
// // app/page.tsx

// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { LandingHeader } from "@/components/layout/header"
// import { LandingFooter } from "@/components/layout/footer"
// import Link from "next/link"



// import {
//   Sparkles,
//   Bot,
//   Code,
//   Zap,
//   Shield,
//   Users,
//   ArrowRight,
//   Star,
//   Play,
//   ChevronLeft,
//   ChevronRight,
//   Eye,
//   EyeOff,
// } from "lucide-react"
// import { toast } from "@/hooks/use-toast"
// import { cn } from "@/lib/utils"
// import { registerUser } from "@/lib/api/auth"
// import { useRouter } from "next/navigation"
// import { PasswordStrengthMeter } from "@/components/auth/PasswordStrengthMeter"

// const features = [
//   {
//     icon: Bot,
//     title: "AI-Powered Prompt Generation",
//     description: "Create detailed, professional prompts that help AI understand your project requirements perfectly.",
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     icon: Code,
//     title: "Smart Code Generation",
//     description: "Generate clean, production-ready code files with proper structure and best practices.",
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     icon: Zap,
//     title: "Lightning Fast Development",
//     description: "Accelerate your development process from idea to implementation in minutes, not hours.",
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     icon: Shield,
//     title: "Professional Quality",
//     description: "Get enterprise-grade code with error handling, security best practices, and clean architecture.",
//     image: "/placeholder.svg?height=400&width=600",
//   },
// ]

// const testimonials = [
//   {
//     name: "Sarah Chen",
//     role: "Full Stack Developer",
//     company: "TechCorp",
//     content: "AI Builder has revolutionized how I approach new projects. What used to take days now takes hours.",
//     rating: 5,
//     avatar: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     name: "Marcus Rodriguez",
//     role: "Startup Founder",
//     company: "InnovateLab",
//     content:
//       "The prompt builder is incredibly intuitive. It helps me communicate my vision clearly to get exactly what I need.",
//     rating: 5,
//     avatar: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     name: "Emily Johnson",
//     role: "Product Manager",
//     company: "DevStudio",
//     content: "Our team's productivity has increased by 300% since we started using AI Builder for rapid prototyping.",
//     rating: 5,
//     avatar: "/placeholder.svg?height=40&width=40",
//   },
// ]

// export default function LandingPage() {
//   const [currentFeature, setCurrentFeature] = useState(0)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const [authMode, setAuthMode] = useState<"signin" | "signup">("signin")
//   const router = useRouter()

//   const [signInData, setSignInData] = useState({
//     email: "",
//     password: "",
//   })

//   const [signUpData, setSignUpData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })

//   // Load saved form data from localStorage
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const savedFormData = localStorage.getItem('signUpFormData')
//       if (savedFormData) {
//         const parsedData = JSON.parse(savedFormData)
//         setSignUpData(prev => ({
//           ...prev,
//           username: parsedData.username || '',
//           email: parsedData.email || '',
//           // Don't restore passwords for security
//         }))
//       }
//     }
//   }, [])

//   const nextFeature = () => {
//     setCurrentFeature((prev) => (prev + 1) % features.length)
//   }

//   const prevFeature = () => {
//     setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
//   }

//   const handleSignIn = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500))

//     // Set authentication status
//     localStorage.setItem("isAuthenticated", "true")

//     toast({
//       title: "Welcome back!",
//       description: "You have been successfully signed in.",
//     })

//     // Redirect to main app
//     window.location.href = "/"
//     setIsLoading(false)
//   }


//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (signUpData.password !== signUpData.confirmPassword) {
//       toast({
//         title: "Error",
//         description: "Passwords do not match.",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsLoading(true)

//     try {
//       const payload = {
//         username: signUpData.username,
//         email: signUpData.email,
//         password: signUpData.password,
//         confirm_password: signUpData.confirmPassword,
//       }

//       const response = await registerUser(payload)

//       // Check if the response indicates success
//       if (response.status === "success" || response.user) {
//         // Redirect to success page with user details
//         window.location.href = `/auth/registration-success?email=${encodeURIComponent(signUpData.email)}&username=${encodeURIComponent(signUpData.username)}`
//       } else {
//         // Handle cases where the API returns success but with unexpected format
//         throw new Error(response.message || "Registration completed but with unexpected response")
//       }

//     } catch (error: any) {
//       console.error("Registration error:", error)
//       toast({
//         title: "Registration Failed",
//         description: error.message || "An error occurred during registration. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }


//   const handleGoogleAuth = async () => {
//     setIsLoading(true)

//     // Simulate Google OAuth
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     // Set authentication status
//     localStorage.setItem("isAuthenticated", "true")

//     toast({
//       title: "Success!",
//       description: "You have been successfully authenticated with Google.",
//     })

//     // Redirect to main app
//     window.location.href = "/"
//     setIsLoading(false)
//   }

//   const FeatureIcon = features[currentFeature].icon

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentFeature((prev) => (prev + 1) % features.length)
//     }, 4000) // Auto-advance every 4 seconds

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

//       <LandingHeader />

//       <div className="container mx-auto px-4 py-12">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Hero Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
//                 🚀 Now in Beta - Join thousands of developers
//               </Badge>
//               <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//                 Build Apps with{" "}
//                 <span className="text-purple-600 dark:text-purple-400 bg-clip-text text-purple">
//                   AI Precision
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Transform your ideas into production-ready code with our intelligent prompt builder. Generate clean,
//                 professional applications in minutes, not hours.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 size="lg"
//                 className="bg-purple-600"
//                 onClick={() => setAuthMode("signup")}
//               >
//                 Start Building Free
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button size="lg" variant="outline" className="group">
//                 <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                 Watch Demo
//               </Button>
//             </div>

//             <div className="flex items-center gap-8 pt-4">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">10K+</div>
//                 <div className="text-sm text-gray-600">Projects Built</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">5K+</div>
//                 <div className="text-sm text-gray-600">Developers</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">99.9%</div>
//                 <div className="text-sm text-gray-600">Uptime</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Auth Forms */}
//           <div className="lg:pl-8">
//             <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
//               <CardHeader className="text-center pb-4">
//                 <CardTitle className="text-2xl">{authMode === "signin" ? "Welcome Back" : "Create Account"}</CardTitle>
//                 <CardDescription>
//                   {authMode === "signin"
//                     ? "Sign in to continue building amazing projects"
//                     : "Join thousands of developers building with AI"}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as "signin" | "signup")}>
//                   <TabsList className="grid w-full grid-cols-2">
//                     <TabsTrigger value="signin">Sign In</TabsTrigger>
//                     <TabsTrigger value="signup">Sign Up</TabsTrigger>
//                   </TabsList>

//                   <TabsContent value="signin" className="space-y-4 mt-6">
//                     <form onSubmit={handleSignIn} className="space-y-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="signin-email">Email</Label>
//                         <Input
//                           id="signin-email"
//                           type="email"
//                           placeholder="john@example.com"
//                           value={signInData.email}
//                           onChange={(e) => setSignInData((prev) => ({ ...prev, email: e.target.value }))}
//                           required
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="signin-password">Password</Label>
//                         <div className="relative">
//                           <Input
//                             id="signin-password"
//                             type={showPassword ? "text" : "password"}
//                             placeholder="Enter your password"
//                             value={signInData.password}
//                             onChange={(e) => setSignInData((prev) => ({ ...prev, password: e.target.value }))}
//                             required
//                           />
//                           <Button
//                             type="button"
//                             variant="ghost"
//                             size="icon"
//                             className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
//                             onClick={() => setShowPassword(!showPassword)}
//                           >
//                             {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                           </Button>
//                         </div>
//                       </div>
//                       <Button type="submit" className="w-full" disabled={isLoading}>
//                         {isLoading ? "Signing in..." : "Sign In"}
//                       </Button>

//                       <div className="text-center text-sm">
//                       <Button asChild variant="outline">
//                         <Link href="/auth/request-password-reset">
//                           Forgot password?
//                         </Link>
//                       </Button>
//                     </div>

//                     </form>
//                   </TabsContent>

//                   <TabsContent value="signup" className="space-y-4 mt-6">
//                     <form onSubmit={handleSignUp} className="space-y-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="signup-username">Username</Label>
//                         <Input
//                           id="signup-username"
//                           placeholder="john_doe"
//                           value={signUpData.username}
//                           onChange={(e) => setSignUpData((prev) => ({ ...prev, username: e.target.value }))}
//                           required
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="signup-email">Email</Label>
//                         <Input
//                           id="signup-email"
//                           type="email"
//                           placeholder="john@example.com"
//                           value={signUpData.email}
//                           onChange={(e) => setSignUpData((prev) => ({ ...prev, email: e.target.value }))}
//                           required
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="signup-password">Password</Label>
//                         <div className="relative">
//                           <Input
//                             id="signup-password"
//                             type={showPassword ? "text" : "password"}
//                             placeholder="Create a strong password"
//                             value={signUpData.password}
//                             onChange={(e) => setSignUpData((prev) => ({ ...prev, password: e.target.value }))}
//                             required
//                           />
//                           <Button
//                             type="button"
//                             variant="ghost"
//                             size="icon"
//                             className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
//                             onClick={() => setShowPassword(!showPassword)}
//                           >
//                             {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                           </Button>
//                         </div>
//                         <PasswordStrengthMeter password={signUpData.password} />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="confirmPassword">Confirm Password</Label>
//                         <div className="relative">
//                           <Input
//                             id="confirmPassword"
//                             type={showConfirmPassword ? "text" : "password"}
//                             placeholder="Confirm your password"
//                             value={signUpData.confirmPassword}
//                             onChange={(e) => setSignUpData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
//                             required
//                           />
//                           <Button
//                             type="button"
//                             variant="ghost"
//                             size="icon"
//                             className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
//                             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                           >
//                             {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                           </Button>
//                         </div>
//                       </div>
//                       <Button type="submit" className="w-full" disabled={isLoading}>
//                         {isLoading ? "Creating account..." : "Create Account"}
//                       </Button>
//                     </form>
//                   </TabsContent>
//                 </Tabs>

//                 <div className="relative">
//                   <div className="absolute inset-0 flex items-center">
//                     <span className="w-full border-t" />
//                   </div>
//                   <div className="relative flex justify-center text-xs uppercase">
//                     <span className="bg-white px-2 text-gray-500">Or continue with</span>
//                   </div>
//                 </div>

//                 <Button variant="outline" className="w-full" onClick={handleGoogleAuth} disabled={isLoading}>
//                   <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
//                     <path
//                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                       fill="#4285F4"
//                     />
//                     <path
//                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                       fill="#34A853"
//                     />
//                     <path
//                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                       fill="#FBBC05"
//                     />
//                     <path
//                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                       fill="#EA4335"
//                     />
//                   </svg>
//                   Continue with Google
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Features Slider */}
//         <div className="mt-24">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">Powerful Features for Modern Development</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Everything you need to transform your ideas into production-ready applications
//             </p>
//           </div>

//           <div className="relative overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentFeature * 100}%)` }}
//             >
//               {features.map((feature, index) => {
//                 const FeatureIcon = feature.icon
//                 return (
//                   <div key={index} className="w-full flex-shrink-0">
//                     <Card className="mx-4 overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
//                       <CardContent className="p-0">
//                         <div className="grid lg:grid-cols-2">
//                           <div className="p-8 lg:p-12 flex flex-col justify-center">
//                             <div className="flex items-center gap-3 mb-6">
//                               <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
//                                 <FeatureIcon className="h-6 w-6 text-white" />
//                               </div>
//                               <Badge variant="secondary">
//                                 Feature {index + 1} of {features.length}
//                               </Badge>
//                             </div>
//                             <h3 className="text-2xl lg:text-3xl font-bold mb-4">{feature.title}</h3>
//                             <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
//                             <div className="flex items-center gap-4">
//                               <Button variant="outline" size="icon" onClick={prevFeature}>
//                                 <ChevronLeft className="h-4 w-4" />
//                               </Button>
//                               <div className="flex gap-2">
//                                 {features.map((_, dotIndex) => (
//                                   <button
//                                     key={dotIndex}
//                                     className={cn(
//                                       "w-3 h-3 rounded-full transition-all duration-300",
//                                       dotIndex === currentFeature
//                                         ? "bg-blue-600 scale-110"
//                                         : "bg-gray-300 hover:bg-gray-400",
//                                     )}
//                                     onClick={() => setCurrentFeature(dotIndex)}
//                                   />
//                                 ))}
//                               </div>
//                               <Button variant="outline" size="icon" onClick={nextFeature}>
//                                 <ChevronRight className="h-4 w-4" />
//                               </Button>
//                             </div>
//                           </div>
//                           <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center">
//                             <div className="relative">
//                               <img
//                                 src={feature.image || "/placeholder.svg?height=400&width=600"}
//                                 alt={feature.title}
//                                 className="max-w-full h-auto rounded-lg shadow-lg"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
//                             </div>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Progress bar */}
//           <div className="mt-8 flex justify-center">
//             <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out"
//                 style={{ width: `${((currentFeature + 1) / features.length) * 100}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <div className="mt-24">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose AI Builder?</h2>
//             <p className="text-xl text-gray-600">Join thousands of developers who trust AI Builder</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: Zap,
//                 title: "10x Faster",
//                 description: "Build applications in minutes instead of hours",
//               },
//               {
//                 icon: Shield,
//                 title: "Enterprise Ready",
//                 description: "Production-grade code with security best practices",
//               },
//               {
//                 icon: Users,
//                 title: "Team Collaboration",
//                 description: "Share prompts and collaborate with your team",
//               },
//               {
//                 icon: Code,
//                 title: "Clean Code",
//                 description: "Well-structured, maintainable, and documented code",
//               },
//             ].map((benefit, index) => (
//               <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
//                 <CardContent className="p-6">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                     <benefit.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
//                   <p className="text-gray-600">{benefit.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Testimonials */}
//         <div className="mt-24">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">Loved by Developers</h2>
//             <p className="text-xl text-gray-600">See what our community is saying</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-1 mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>
//                   <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={testimonial.avatar || "/placeholder.svg"}
//                       alt={testimonial.name}
//                       className="w-10 h-10 rounded-full"
//                     />
//                     <div>
//                       <div className="font-semibold">{testimonial.name}</div>
//                       <div className="text-sm text-gray-500">
//                         {testimonial.role} at {testimonial.company}
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-24 text-center">
//           <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//             <CardContent className="p-12">
//               <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
//               <p className="text-xl mb-8 opacity-90">
//                 Join thousands of developers who are already building the future with AI Builder
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button size="lg" variant="secondary" onClick={() => setAuthMode("signup")}>
//                   Start Building Free
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
//                 >
//                   Schedule Demo
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       <LandingFooter />
      
//     </div>
//   )
// }


























// app/page.tsx

"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react" // Import useRef
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LandingHeader } from "@/components/layout/header"
import { LandingFooter } from "@/components/layout/footer"
import Link from "next/link"

import {
  Sparkles,
  Bot,
  Code,
  Zap,
  Shield,
  Users,
  ArrowRight,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { registerUser } from "@/lib/api/auth"
import { useRouter } from "next/navigation"
import { PasswordStrengthMeter } from "@/components/auth/PasswordStrengthMeter"

const features = [
  {
    icon: Bot,
    title: "AI-Powered Prompt Generation",
    description: "Create detailed, professional prompts that help AI understand your project requirements perfectly.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Code,
    title: "Smart Code Generation",
    description: "Generate clean, production-ready code files with proper structure and best practices.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Zap,
    title: "Lightning Fast Development",
    description: "Accelerate your development process from idea to implementation in minutes, not hours.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Shield,
    title: "Professional Quality",
    description: "Get enterprise-grade code with error handling, security best practices, and clean architecture.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Full Stack Developer",
    company: "TechCorp",
    content: "AI Builder has revolutionized how I approach new projects. What used to take days now takes hours.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    company: "InnovateLab",
    content:
      "The prompt builder is incredibly intuitive. It helps me communicate my vision clearly to get exactly what I need.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Johnson",
    role: "Product Manager",
    company: "DevStudio",
    content: "Our team's productivity has increased by 300% since we started using AI Builder for rapid prototyping.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function LandingPage() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin")
  const router = useRouter()

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  })

  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  // State for the restriction modal
  const [showRestrictionModal, setShowRestrictionModal] = useState(false);
  const modalTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Load saved form data from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFormData = localStorage.getItem('signUpFormData')
      if (savedFormData) {
        const parsedData = JSON.parse(savedFormData)
        setSignUpData(prev => ({
          ...prev,
          username: parsedData.username || '',
          email: parsedData.email || '',
          // Don't restore passwords for security
        }))
      }
    }
  }, [])

  // Effect to trigger the restriction modal after a delay
  useEffect(() => {
    // Set a timer to show the modal after 5 seconds (was 7000ms)
    modalTimerRef.current = setTimeout(() => {
      setShowRestrictionModal(true);
      // Disable scrolling on the body
      document.body.style.overflow = 'hidden';

      // Add event listeners to freeze the page (only scrolling here, clicks handled by modal overlay)
      const preventScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      };

      // Prevent scrolling
      window.addEventListener('scroll', preventScroll, { passive: false });
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });


      // Cleanup function
      return () => {
        document.body.style.overflow = ''; // Re-enable scrolling
        window.removeEventListener('scroll', preventScroll);
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
      };

    }, 5000); // Changed from 7000 to 5000 milliseconds

    // Cleanup the timer if the component unmounts before the modal appears
    return () => {
      if (modalTimerRef.current) {
        clearTimeout(modalTimerRef.current);
      }
      // Ensure cleanup if component unmounts
      document.body.style.overflow = '';
      const preventScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      };
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount


  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Set authentication status
    localStorage.setItem("isAuthenticated", "true")

    toast({
      title: "Welcome back!",
      description: "You have been successfully signed in.",
    })

    // Redirect to main app
    window.location.href = "/"
    setIsLoading(false)
  }


  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (signUpData.password !== signUpData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const payload = {
        username: signUpData.username,
        email: signUpData.email,
        password: signUpData.password,
        confirm_password: signUpData.confirmPassword,
      }

      const response = await registerUser(payload)

      // Check if the response indicates success
      if (response.status === "success" || response.user) {
        // Redirect to success page with user details
        window.location.href = `/auth/registration-success?email=${encodeURIComponent(signUpData.email)}&username=${encodeURIComponent(signUpData.username)}`
      } else {
        // Handle cases where the API returns success but with unexpected format
        throw new Error(response.message || "Registration completed but with unexpected response")
      }

    } catch (error: any) {
      console.error("Registration error:", error)
      toast({
        title: "Registration Failed",
        description: error.message || "An error occurred during registration. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }


  const handleGoogleAuth = async () => {
    setIsLoading(true)

    // Simulate Google OAuth
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Set authentication status
    localStorage.setItem("isAuthenticated", "true")

    toast({
      title: "Success!",
      description: "You have been successfully authenticated with Google.",
    })

    // Redirect to main app
    window.location.href = "/"
    setIsLoading(false)
  }

  const FeatureIcon = features[currentFeature].icon

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 4000) // Auto-advance every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      <LandingHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                🚀 Now in Beta - Join thousands of developers
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Build Apps with{" "}
                <span className="text-purple-600 dark:text-purple-400 bg-clip-text text-purple">
                  AI Precision
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your ideas into production-ready code with our intelligent prompt builder. Generate clean,
                professional applications in minutes, not hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-purple-600"
                onClick={() => setAuthMode("signup")}
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5K+</div>
                <div className="text-sm text-gray-600">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <div className="lg:pl-8">
            <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{authMode === "signin" ? "Welcome Back" : "Create Account"}</CardTitle>
                <CardDescription>
                  {authMode === "signin"
                    ? "Sign in to continue building amazing projects"
                    : "Join thousands of developers building with AI"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as "signin" | "signup")}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>

                  <TabsContent value="signin" className="space-y-4 mt-6">
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signin-email">Email</Label>
                        <Input
                          id="signin-email"
                          type="email"
                          placeholder="john@example.com"
                          value={signInData.email}
                          onChange={(e) => setSignInData((prev) => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signin-password">Password</Label>
                        <div className="relative">
                          <Input
                            id="signin-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={signInData.password}
                            onChange={(e) => setSignInData((prev) => ({ ...prev, password: e.target.value }))}
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign In"}
                      </Button>

                      <div className="text-center text-sm">
                      <Button asChild variant="outline">
                        <Link href="/auth/request-password-reset">
                          Forgot password?
                        </Link>
                      </Button>
                    </div>

                    </form>
                  </TabsContent>

                  <TabsContent value="signup" className="space-y-4 mt-6">
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-username">Username</Label>
                        <Input
                          id="signup-username"
                          placeholder="john_doe"
                          value={signUpData.username}
                          onChange={(e) => setSignUpData((prev) => ({ ...prev, username: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email</Label>
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="john@example.com"
                          value={signUpData.email}
                          onChange={(e) => setSignUpData((prev) => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative">
                          <Input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={signUpData.password}
                            onChange={(e) => setSignUpData((prev) => ({ ...prev, password: e.target.value }))}
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                        <PasswordStrengthMeter password={signUpData.password} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <div className="relative">
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={signUpData.confirmPassword}
                            onChange={(e) => setSignUpData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Create Account"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full" onClick={handleGoogleAuth} disabled={isLoading}>
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Slider */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Powerful Features for Modern Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your ideas into production-ready applications
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentFeature * 100}%)` }}
            >
              {features.map((feature, index) => {
                const FeatureIcon = feature.icon
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-4 overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2">
                          <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <FeatureIcon className="h-6 w-6 text-white" />
                              </div>
                              <Badge variant="secondary">
                                Feature {index + 1} of {features.length}
                              </Badge>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
                            <div className="flex items-center gap-4">
                              <Button variant="outline" size="icon" onClick={prevFeature}>
                                <ChevronLeft className="h-4 w-4" />
                              </Button>
                              <div className="flex gap-2">
                                {features.map((_, dotIndex) => (
                                  <button
                                    key={dotIndex}
                                    className={cn(
                                      "w-3 h-3 rounded-full transition-all duration-300",
                                      dotIndex === currentFeature
                                        ? "bg-blue-600 scale-110"
                                        : "bg-gray-300 hover:bg-gray-400",
                                    )}
                                    onClick={() => setCurrentFeature(dotIndex)}
                                  />
                                ))}
                              </div>
                              <Button variant="outline" size="icon" onClick={nextFeature}>
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center">
                            <div className="relative">
                              <img
                                src={feature.image || "/placeholder.svg?height=400&width=600"}
                                alt={feature.title}
                                className="max-w-full h-auto rounded-lg shadow-lg"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-8 flex justify-center">
            <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out"
                style={{ width: `${((currentFeature + 1) / features.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose AI Builder?</h2>
            <p className="text-xl text-gray-600">Join thousands of developers who trust AI Builder</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "10x Faster",
                description: "Build applications in minutes instead of hours",
              },
              {
                icon: Shield,
                title: "Enterprise Ready",
                description: "Production-grade code with security best practices",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Share prompts and collaborate with your team",
              },
              {
                icon: Code,
                title: "Clean Code",
                description: "Well-structured, maintainable, and documented code",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Loved by Developers</h2>
            <p className="text-xl text-gray-600">See what our community is saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of developers who are already building the future with AI Builder
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => setAuthMode("signup")}>
                  Start Building Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <LandingFooter />

      {/* Restriction Modal */}
      {showRestrictionModal && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center p-4"
          style={{ pointerEvents: 'auto' }} // Ensure the modal itself is clickable (though we want no interaction)
        >
          <Card className="w-full max-w-lg mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-md text-center p-8 sm:p-12 rounded-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold text-purple-700">Proprietary Preview Notice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-gray-800">
              <p>
                This web application represents a proprietary solution currently under development, intended for a subscription-based service upon completion.
              </p>
              <p>
                To safeguard my intellectual property and maintain the confidentiality of my innovative approach, further details or interactive browsing capabilities are currently restricted. I appreciate your understanding.
              </p>
              <div className="mt-6"> {/* Added div for spacing */}
                <Link href="https://www.alexandercyril.xyz/contact" passHref target="_blank" rel="noopener noreferrer">
                  <Button variant="default" className="w-full max-w-xs mx-auto bg-purple-600 hover:bg-purple-700 text-white">
                    Contact Me
                  </Button>
                </Link>
              </div>
              <p className="font-semibold">
                For potential partnership inquiries or more information, please contact me directly.
              </p>
              <p className="text-sm text-gray-600 mt-8">
                Thank you for your interest.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
