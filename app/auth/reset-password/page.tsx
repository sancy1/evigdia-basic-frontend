

// app/auth/reset-password/page.tsx

import { Suspense } from 'react';
import { ResetPasswordContent } from './ResetPasswordContent'; // Import the new client component

// Note: This file is now a Server Component.

export default function ResetPasswordPage() {
  return (
    // Wrap the component that uses useSearchParams() in <Suspense>
    <Suspense fallback={<div>Loading password reset form...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}











// // app/reset-password/page.tsx

// "use client"

// import { useState, useEffect } from "react"
// import { useSearchParams, useRouter } from "next/navigation"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { toast } from "@/hooks/use-toast"
// import { validateResetToken, resetPassword } from "@/lib/api/auth"
// import { LandingHeader } from "@/components/layout/header"
// import { LandingFooter } from "@/components/layout/footer"
// import { PasswordStrengthMeter } from "@/components/auth/PasswordStrengthMeter"
// import Link from "next/link"

// export default function ResetPasswordPage() {
//   const [newPassword, setNewPassword] = useState("")
//   const [confirmNewPassword, setConfirmNewPassword] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [isValidating, setIsValidating] = useState(true)
//   const [isTokenValid, setIsTokenValid] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const searchParams = useSearchParams()
//   const router = useRouter()

//   const token = searchParams.get("token")
//   const userId = searchParams.get("userId")

//   useEffect(() => {
//     const validateToken = async () => {
//       if (!token || !userId) {
//         setIsValidating(false)
//         setIsTokenValid(false)
//         toast({
//           title: "Error",
//           description: "Invalid password reset link",
//           variant: "destructive",
//         })
//         return
//       }

//       try {
//         const response = await validateResetToken(token, userId)
//         if (response.status === "successful") {
//           setIsTokenValid(true)
//         } else {
//           setIsTokenValid(false)
//           toast({
//             title: "Error",
//             description: "Invalid or expired password reset link",
//             variant: "destructive",
//           })
//         }
//       } catch (error: any) {
//         setIsTokenValid(false)
//         toast({
//           title: "Error",
//           description: error.message || "Failed to validate reset token",
//           variant: "destructive",
//         })
//       } finally {
//         setIsValidating(false)
//       }
//     }

//     validateToken()
//   }, [token, userId])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (newPassword !== confirmNewPassword) {
//       toast({
//         title: "Error",
//         description: "Passwords do not match",
//         variant: "destructive",
//       })
//       return
//     }

//     if (!token || !userId) {
//       toast({
//         title: "Error",
//         description: "Invalid reset link",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsLoading(true)

//     try {
//       const response = await resetPassword(token, userId, newPassword, confirmNewPassword)
//       toast({
//         title: "Success",
//         description: response.message || "Password reset successfully",
//       })
//       router.push("/")
//     } catch (error: any) {
//       toast({
//         title: "Error",
//         description: error.message || "Failed to reset password",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (isValidating) {
//     return (
//       <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         <LandingHeader />
//         <div className="flex-1 flex items-center justify-center p-4">
//           <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
//             <CardHeader className="text-center pb-4">
//               <CardTitle className="text-2xl">Validating Link</CardTitle>
//               <CardDescription>Please wait while we verify your password reset link</CardDescription>
//             </CardHeader>
//             <CardContent className="flex justify-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//             </CardContent>
//           </Card>
//         </div>
//         <LandingFooter />
//       </div>
//     )
//   }

//   if (!isTokenValid) {
//     return (
//       <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         <LandingHeader />
//         <div className="flex-1 flex items-center justify-center p-4">
//           <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
//             <CardHeader className="text-center pb-4">
//               <CardTitle className="text-2xl">Invalid Link</CardTitle>
//               <CardDescription>The password reset link is invalid or has expired</CardDescription>
//             </CardHeader>
//             <CardContent className="text-center">
//               <Link href="/auth/request-password-reset">
//                 <Button className="w-full">Request New Reset Link</Button>
//               </Link>
//               <div className="mt-4 text-sm">
//                 <Link href="/" className="text-blue-600 hover:underline">
//                   Return to login
//                 </Link>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//         <LandingFooter />
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <LandingHeader />
      
//       <div className="flex-1 flex items-center justify-center p-4">
//         <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
//           <CardHeader className="text-center pb-4">
//             <CardTitle className="text-2xl">Reset Your Password</CardTitle>
//             <CardDescription>Create a new password for your account</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="newPassword">New Password</Label>
//                 <div className="relative">
//                   <Input
//                     id="newPassword"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter new password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     required
//                   />
//                   <Button
//                     type="button"
//                     variant="ghost"
//                     size="icon"
//                     className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                         <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//                         <circle cx="12" cy="12" r="3" />
//                       </svg>
//                     ) : (
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                         <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
//                         <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
//                         <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
//                         <line x1="2" x2="22" y1="2" y2="22" />
//                       </svg>
//                     )}
//                   </Button>
//                 </div>
//                 <PasswordStrengthMeter password={newPassword} />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
//                 <div className="relative">
//                   <Input
//                     id="confirmNewPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm new password"
//                     value={confirmNewPassword}
//                     onChange={(e) => setConfirmNewPassword(e.target.value)}
//                     required
//                   />
//                   <Button
//                     type="button"
//                     variant="ghost"
//                     size="icon"
//                     className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? (
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                         <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//                         <circle cx="12" cy="12" r="3" />
//                       </svg>
//                     ) : (
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                         <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
//                         <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
//                         <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
//                         <line x1="2" x2="22" y1="2" y2="22" />
//                       </svg>
//                     )}
//                   </Button>
//                 </div>
//               </div>
//               <Button type="submit" className="w-full" disabled={isLoading}>
//                 {isLoading ? "Resetting..." : "Reset Password"}
//               </Button>
//               <div className="text-center text-sm">
//                 <Link href="/" className="text-blue-600 hover:underline">
//                   Return to login
//                 </Link>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </div>

//       <LandingFooter />
//     </div>
//   )
// }
