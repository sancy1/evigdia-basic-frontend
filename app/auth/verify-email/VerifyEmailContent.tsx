
// app/auth/verify-email/VerifyEmailContent.tsx

"use client"

import { useEffect, useState, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { verifyEmail, resendVerificationEmail } from "@/lib/api/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"
import { LandingHeader } from "@/components/layout/header"
import { LandingFooter } from "@/components/layout/footer"

export function VerifyEmailContent() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isResending, setIsResending] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState<"pending" | "success" | "failed">("pending")
  const [countdown, setCountdown] = useState(60)
  const searchParams = useSearchParams()
  const router = useRouter()

  const token = searchParams.get("token")
  const hasVerifiedRef = useRef(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (verificationStatus === "success" && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (verificationStatus === "success" && countdown === 0) {
      router.push("/");
    }
    return () => clearTimeout(timer);
  }, [countdown, verificationStatus, router]);

  useEffect(() => {
    if (token && !hasVerifiedRef.current) {
      hasVerifiedRef.current = true;
      setIsLoading(true);

      const doVerification = async () => {
        try {
          console.log('Attempting verification for token:', token);
          const response = await verifyEmail(token);
          console.log('Verification response:', response);

          if (response.status === "success") {
            setVerificationStatus("success");
            toast({
              title: "Email Verified",
              description: response.message || "Your email has been verified successfully.",
            });
            if (response.debug?.tokens) {
              localStorage.setItem('accessToken', response.debug.tokens.access);
              localStorage.setItem('refreshToken', response.debug.tokens.refresh);
            }
          } else {
            setVerificationStatus("failed");
            toast({
              title: "Verification Failed",
              description: response.message || "Email verification failed.",
              variant: "destructive",
            });
          }
        } catch (error: any) {
          console.error('Full verification error:', error);
          setVerificationStatus("failed");
          toast({
            title: "Error",
            description: error.message || "An error occurred during verification",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      };
      doVerification();
    } else if (!token && !hasVerifiedRef.current) {
      setIsLoading(false);
      setVerificationStatus("failed");
      toast({
        title: "Error",
        description: "Verification token is missing",
        variant: "destructive",
      });
    } else if (token && hasVerifiedRef.current && verificationStatus === "pending") {
      setIsLoading(false);
    }
  }, [token, verificationStatus]);


  const handleResendVerification = async () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setIsResending(true)
    try {
      const response = await resendVerificationEmail(email)
      toast({
        title: "Success",
        description: response.message || "Verification email has been resent.",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to resend verification email",
        variant: "destructive",
      })
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <LandingHeader />

      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">
              {verificationStatus === "pending" && "Verifying Your Email"}
              {verificationStatus === "success" && "Email Verified Successfully!"}
              {verificationStatus === "failed" && "Verification Failed"}
            </CardTitle>
            <CardDescription>
              {verificationStatus === "pending" && "Please wait while we verify your email address..."}
              {verificationStatus === "success" && "You can now login to your account"}
              {verificationStatus === "failed" && "We couldn't verify your email address. The token might be invalid or expired."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isLoading && verificationStatus === "pending" && (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}

            {!isLoading && verificationStatus === "failed" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Enter your email to resend verification</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleResendVerification}
                  className="w-full"
                  disabled={isResending}
                >
                  {isResending ? "Sending..." : "Resend Verification Email"}
                </Button>
                <div className="text-center text-sm">
                  <Link href="/" className="text-blue-600 hover:underline">
                    Return to login page
                  </Link>
                </div>
              </div>
            )}

            {verificationStatus === "success" && (
              <div className="text-center py-4 space-y-4">
                <div className="text-green-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Congratulations!</h3>
                <p className="text-gray-600 mb-2">
                  Your email has been verified successfully.
                </p>
                <p className="text-gray-600 mb-4">
                  You will be automatically redirected to the login page in {countdown} seconds.
                </p>
                <div className="flex flex-col space-y-2">
                  <Link href="/">
                    <Button className="w-full">Go to Login Now</Button>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <LandingFooter />
    </div>
  )
}