


// app/auth/registration-success/page.tsx

import { Suspense } from 'react';
import { RegistrationSuccessContent } from './RegistrationSuccessContent'; // Import the new client component

// Note: No "use client" in this file. It is a Server Component by default.

export default function RegistrationSuccessPage() {
  return (
    // Wrap the component that uses useSearchParams() in <Suspense>
    <Suspense fallback={<div>Loading verification details...</div>}>
      <RegistrationSuccessContent />
    </Suspense>
  );
}














// // app/auth/registration-success/page.tsx

// "use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { useSearchParams } from "next/navigation"
// import { useState } from "react"
// import { resendVerificationEmail } from "@/lib/api/auth"
// import { toast } from "@/hooks/use-toast"
// import { useToast } from "@/hooks/use-toast"
// import { LandingHeader } from "@/components/layout/header"
// import { LandingFooter } from "@/components/layout/footer"

// export default function RegistrationSuccessPage() {
//   const searchParams = useSearchParams()
//   const email = searchParams.get("email") || ""
//   const username = searchParams.get("username") || ""
//   const [isResending, setIsResending] = useState(false)

//   const { toast } = useToast()

//   const handleResendVerification = async () => {
//   if (!email) {
//     toast({
//       title: "Error",
//       description: "Email address not found",
//       variant: "destructive",
//     })
//     return
//   }

//   setIsResending(true)
//   try {
//     const response = await resendVerificationEmail(email)
//     toast({
//       title: "Success",
//       description: response.message || "Verification email has been resent.",
//     })
//   } catch (error: any) {
//     toast({
//       title: "Error",
//       description: error.message || "Failed to resend verification email",
//       variant: "destructive",
//     })
//   } finally {
//     setIsResending(false)
//   }
// }

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <LandingHeader />
      
//       <div className="flex-1 flex items-center justify-center p-4">
//         <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
//           <CardHeader className="text-center pb-4">
//             <CardTitle className="text-2xl">
//               Registration Successful!
//             </CardTitle>
//             <CardDescription>
//               Your account has been created successfully
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="text-center">
//               <p className="mb-4">
//                 Hello {username},
//               </p>
//               <p className="mb-4">
//                 Please check your email (<span className="font-medium">{email}</span>) to verify your account.
//               </p>
//               <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
//                 We've sent a verification link to your email address.
//               </div>
//             </div>
//             <div className="flex flex-col space-y-2">
//               <Link href="/">
//                 <Button className="w-full">Return to Login</Button>
//               </Link>
//               <Button 
//                 variant="outline" 
//                 className="w-full"
//                 onClick={handleResendVerification}
//                 disabled={isResending}
//               >
//                 {isResending ? "Sending..." : "Resend Verification Email"}
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <LandingFooter />
//     </div>
//   )
// }