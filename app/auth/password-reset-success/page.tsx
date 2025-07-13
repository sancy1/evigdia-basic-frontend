
// app/auth/password-reset-success/page.tsx

import { Suspense } from 'react';
import { PasswordResetSuccessContent } from './PasswordResetSuccessContent'; // Import the new client component

// Note: This file is now a Server Component.

export default function PasswordResetSuccessPage() {
  return (
    // Wrap the component that uses useSearchParams() in <Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <PasswordResetSuccessContent />
    </Suspense>
  );
}







// // app/auth/password-reset-success/page.tsx

// "use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { LandingHeader } from "@/components/layout/header"
// import { LandingFooter } from "@/components/layout/footer"
// import { useSearchParams } from "next/navigation"
// import { useState } from "react"
// import { requestPasswordReset } from "@/lib/api/auth"
// import { toast } from "@/hooks/use-toast"

// export default function PasswordResetSuccessPage() {
//   const searchParams = useSearchParams()
//   const email = searchParams.get("email") || ""
//   const [isResending, setIsResending] = useState(false)

//   const handleResend = async () => {
//     if (!email) {
//       toast({
//         title: "Error",
//         description: "Email address not found",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsResending(true)
//     try {
//       const response = await requestPasswordReset(email)
//       toast({
//         title: "Success",
//         description: response.message || "Password reset link has been resent to your email.",
//       })
//     } catch (error: any) {
//       toast({
//         title: "Error",
//         description: error.message || "Failed to resend password reset email",
//         variant: "destructive",
//       })
//     } finally {
//       setIsResending(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <LandingHeader />
      
//       <div className="flex-1 flex items-center justify-center p-4">
//         <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
//           <CardHeader className="text-center pb-4">
//             <CardTitle className="text-2xl">Check Your Email</CardTitle>
//             <CardDescription>
//               We've sent a password reset link to {email || "your email address"}
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="text-center">
//               <p className="mb-4">
//                 If you don't see the email, check your spam folder.
//               </p>
//               <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
//                 Password reset link sent to: <span className="font-medium">{email}</span>
//               </div>
//             </div>
//             <div className="flex flex-col space-y-2">
//               <Link href="/">
//                 <Button className="w-full">Return to Login</Button>
//               </Link>
//               <Button 
//                 variant="outline" 
//                 className="w-full"
//                 onClick={handleResend}
//                 disabled={isResending}
//               >
//                 {isResending ? "Sending..." : "Resend Reset Link"}
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <LandingFooter />
//     </div>
//   )
// }
