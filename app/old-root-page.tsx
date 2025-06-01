
// // app/page.tsx

// "use client"

// import { useState, useEffect } from "react"
// import LandingPage from "./landing/page"
// import { useRouter } from "next/navigation"

// export default function HomePage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const router = useRouter()

//   useEffect(() => {
//     // Check authentication status
//     const checkAuth = () => {
//       try {
//         const authStatus = localStorage.getItem("isAuthenticated")
//         setIsAuthenticated(authStatus === "true")
//       } catch (error) {
//         console.error("Error checking auth:", error)
//         setIsAuthenticated(false)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     // Small delay to ensure localStorage is available
//     const timer = setTimeout(() => {
//       checkAuth()
//     }, 100)

//     return () => {
//       clearTimeout(timer)
//     }
//   }, [])

//   useEffect(() => {
//     if (!isLoading && isAuthenticated) {
//       // Redirect authenticated users to dashboard
//       router.push("/dashboard")
//     }
//   }, [isLoading, isAuthenticated, router])

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//             <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//           </div>
//           <p className="text-gray-600">Loading AI Builder...</p>
//         </div>
//       </div>
//     )
//   }

//   // If not authenticated, show landing page
//   if (!isAuthenticated) {
//     return <LandingPage />
//   }

//   // This will be briefly shown before redirect happens
//   return null
// }

