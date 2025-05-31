
// // app/admin/register/page.tsx
// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation" // Make sure this is 'next/navigation' for App Router
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { toast } from "@/hooks/use-toast"
// import { registerUser } from "@/lib/api/auth"

// export default function AdminRegisterPage() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//   })
//   const [isLoading, setIsLoading] = useState(false)
//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (formData.password !== formData.confirm_password) {
//       toast({
//         title: "Error",
//         description: "Passwords do not match",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsLoading(true)

//     try {
//       const payload = {
//         ...formData,
//         role: "admin",
//         is_staff: true,
//         is_superuser: true,
//       }

//       console.log("Sending registration payload:", payload)
//       const response = await registerUser(payload)
//       console.log("Registration response:", response)

//       if (response.status === "success" || response.user) {
//         // IMPORTANT: Removed the router.push("/dashboard") here.
//         // The only redirect should be to the success page.
//         toast({
//           title: "Success",
//           description: response.message || "Admin registered successfully. Please check your email for verification.",
//         })
//         router.push(`/auth/registration-success?email=${encodeURIComponent(formData.email)}&username=${encodeURIComponent(formData.username)}`)
//         return // Ensure no further code is executed after the redirect
//       } else {
//         console.warn("Unexpected response format:", response)
//         throw new Error("Unexpected response format from server")
//       }
//     } catch (error: any) {
//       console.error("Registration error:", error)
//       toast({
//         title: "Error",
//         description: error.message || "Failed to register admin",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
//       <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
//         <CardHeader className="text-center pb-4">
//           <CardTitle className="text-2xl">Admin Registration</CardTitle>
//           <CardDescription>
//             Register a new admin account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="username">Username</Label>
//               <Input
//                 id="username"
//                 name="username"
//                 placeholder="admin_username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="admin@example.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 placeholder="Create a strong password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="confirm_password">Confirm Password</Label>
//               <Input
//                 id="confirm_password"
//                 name="confirm_password"
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={formData.confirm_password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full" disabled={isLoading}>
//               {isLoading ? "Registering..." : "Register Admin"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }















// app/admin/register/page.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { registerUser } from "@/lib/api/auth"
import { PasswordStrengthMeter } from "@/components/auth/PasswordStrengthMeter" // Ensure this path is correct
import { Switch } from "@/components/ui/switch" // Ensure this path is correct

// Import the header and footer components
import { LandingHeader } from "@/components/layout/header"
import { LandingFooter } from "@/components/layout/footer"


export default function AdminRegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    is_superuser: false, // Default to false, allow admin to toggle
    is_staff: false,     // Default to false, allow admin to toggle
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirm_password) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    // IMPORTANT:
    // Your current PasswordStrengthMeter component does not expose an 'onStrengthChange' prop.
    // If you need to enforce a minimum password strength before submission,
    // you would need to modify PasswordStrengthMeter.tsx to emit a strength score
    // (e.g., zxcvbn score 0-4 or a 0-100 percentage) and capture it in a state here.
    // Without that, we cannot programmatically check 'passwordStrength < X' in handleSubmit.
    // For now, registration will proceed if passwords match and all fields are filled.


    setIsLoading(true)

    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirm_password, // Confirm_password might not be needed by your backend API
        role: "admin",
        is_staff: formData.is_staff, // Use the state from formData
        is_superuser: formData.is_superuser, // Use the state from formData
      }

      console.log("Sending registration payload:", payload)
      const response = await registerUser(payload)
      console.log("Registration response:", response)

      if (response.status === "success" || response.user) {
        toast({
          title: "Success",
          description: response.message || "Admin registered successfully. Please check your email for verification.",
        })
        router.push(`/auth/registration-success?email=${encodeURIComponent(formData.email)}&username=${encodeURIComponent(formData.username)}`)
        return
      } else {
        console.warn("Unexpected response format:", response)
        throw new Error("Unexpected response format from server")
      }
    } catch (error: any) {
      console.error("Registration error:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to register admin",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // This helper function correctly updates the boolean fields in formData
  const toggleField = (field: 'is_superuser' | 'is_staff') => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }))
  }

  return (
    // The main container div now uses 'flex flex-col' to allow header, content, and footer stacking
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* HEADER: Placed at the very top */}
      <LandingHeader />

      {/* Main Content Area: Use flex-1 to make it grow and center the card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Admin Registration</CardTitle>
            <CardDescription>
              Register a new admin account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="admin_username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange} // onChange updates formData.password
                    required
                  />
                  {/* Toggle show/hide password button */}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                        <line x1="2" x2="22" y1="2" y2="22" />
                      </svg>
                    )}
                  </Button>
                </div>
                {/* Password Strength Meter */}
                <PasswordStrengthMeter password={formData.password} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm_password">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirm_password"
                    name="confirm_password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                  />
                  {/* Toggle show/hide confirm password button */}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                        <line x1="2" x2="22" y1="2" y2="22" />
                      </svg>
                    )}
                  </Button>
                </div>
              </div>

              {/* Admin-specific toggle buttons */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between border p-3 rounded-md bg-gray-50">
                  <Label htmlFor="is_superuser">Superuser (Full Permissions)</Label>
                  <Switch
                    id="is_superuser"
                    checked={formData.is_superuser}
                    onCheckedChange={() => toggleField('is_superuser')}
                  />
                </div>
                <div className="flex items-center justify-between border p-3 rounded-md bg-gray-50">
                  <Label htmlFor="is_staff">Staff Member (Access to Django Admin Panel)</Label>
                  <Switch
                    id="is_staff"
                    checked={formData.is_staff}
                    onCheckedChange={() => toggleField('is_staff')}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register Admin"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* FOOTER: Placed at the very bottom */}
      <LandingFooter />
    </div>
  )
}



