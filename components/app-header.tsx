// "use client"

// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Sparkles, Moon, Sun } from "lucide-react"
// import { cn } from "@/lib/utils"
// import Link from 'next/link';

// interface AppHeaderProps {
//   sidebarOpen: boolean
//   darkMode: boolean
//   setDarkMode: (dark: boolean) => void
// }

// export function AppHeader({ sidebarOpen, darkMode, setDarkMode }: AppHeaderProps) {
//   const toggleTheme = () => {
//     const newDarkMode = !darkMode
//     setDarkMode(newDarkMode)
//     localStorage.setItem("theme", newDarkMode ? "dark" : "light")

//     if (newDarkMode) {
//       document.documentElement.classList.add("dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//     }
//   }

//   return (
//     <div
//       className={cn(
//         "h-16 border-b flex items-center px-6 transition-all duration-300",
//         darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
//       )}
//     >

//       {/* Left side - Logo and App Name */}
//     <div className="flex items-center gap-3">
//       <Link href="/" className="flex items-center gap-3">
//         <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//           <Sparkles className="h-5 w-5 text-white" />
//         </div>
//         <div className="flex items-center gap-2">
//           <h1 className={cn("font-bold text-lg", darkMode ? "text-white" : "text-gray-900")}>AI Builder</h1>
//           <span className={cn("text-lg", darkMode ? "text-gray-400" : "text-gray-500")}>|</span>
//           <Badge variant="secondary" className="text-xs">
//             v1.0.0
//           </Badge>
//         </div>
//       </Link>
//     </div>

//       {/* Right side - Dark Mode Toggle */}
//       <div className="ml-auto">
//         <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
//           {darkMode ? <Sun className="h-4 w-4 text-gray-300" /> : <Moon className="h-4 w-4 text-gray-600" />}
//         </Button>
//       </div>
//     </div>
//   )
// }
























// "use client"

// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Moon, Sun } from "lucide-react"
// import { cn } from "@/lib/utils"
// import Link from "next/link"
// import { UniqueLogo } from "./unique-logo"

// interface AppHeaderProps {
//   sidebarOpen: boolean
//   darkMode: boolean
//   setDarkMode: (dark: boolean) => void
// }

// export function AppHeader({ sidebarOpen, darkMode, setDarkMode }: AppHeaderProps) {
//   const toggleTheme = () => {
//     const newDarkMode = !darkMode
//     setDarkMode(newDarkMode)
//     localStorage.setItem("theme", newDarkMode ? "dark" : "light")

//     if (newDarkMode) {
//       document.documentElement.classList.add("dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//     }
//   }

//   return (
//     <div
//       className={cn(
//         "h-16 border-b flex items-center px-6 transition-all duration-300",
//         darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
//       )}
//     >
//       {/* Left side - Logo and App Name */}
//       <div className="flex items-center gap-3">
//         <Link href="/" className="flex items-center gap-3 group">
//           <div className="transform transition-transform group-hover:scale-110 duration-200">
//             <UniqueLogo darkMode={darkMode} size="md" />
//           </div>
//           <div className="flex items-center gap-2">
//             <h1 className={cn("font-bold text-lg transition-colors", darkMode ? "text-white" : "text-gray-900")}>
//               AI Builder
//             </h1>
//             <span className={cn("text-lg", darkMode ? "text-gray-400" : "text-gray-500")}>|</span>
//             <Badge
//               variant="secondary"
//               className={cn(
//                 "text-xs transition-colors",
//                 darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600",
//               )}
//             >
//               v1.0.0
//             </Badge>
//           </div>
//         </Link>
//       </div>

//       {/* Right side - Dark Mode Toggle */}
//       <div className="ml-auto">
//         <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
//           {darkMode ? <Sun className="h-4 w-4 text-gray-300" /> : <Moon className="h-4 w-4 text-gray-600" />}
//         </Button>
//       </div>
//     </div>
//   )
// }



























// "use client"

// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Moon, Sun } from "lucide-react"
// import { cn } from "@/lib/utils"
// import Link from "next/link"
// import { UniqueLogo } from "./unique-logo"

// interface AppHeaderProps {
//   sidebarOpen: boolean
//   darkMode: boolean
//   setDarkMode: (dark: boolean) => void
// }

// export function AppHeader({ sidebarOpen, darkMode, setDarkMode }: AppHeaderProps) {
//   const toggleTheme = () => {
//     const newDarkMode = !darkMode
//     setDarkMode(newDarkMode)
//     localStorage.setItem("theme", newDarkMode ? "dark" : "light")

//     if (newDarkMode) {
//       document.documentElement.classList.add("dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//     }
//   }

//   return (
//     <div
//       className={cn(
//         "h-16 border-b flex items-center px-6 transition-all duration-300",
//         darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
//       )}
//     >
//       {/* Left side - Logo and App Name */}
//       <div className="flex items-center gap-3">
//         <Link href="/" className="flex items-center gap-3 group">
//           <div className="transform transition-transform group-hover:scale-110 duration-200">
//             {/* You can change the colorTheme prop to any of: "cyber", "energy", "aurora", "galaxy", "ocean", "neon" */}
//             <UniqueLogo darkMode={darkMode} size="md" colorTheme="cyber" />
//           </div>
//           <div className="flex items-center gap-2">
//             <h1 className={cn("font-bold text-lg transition-colors", darkMode ? "text-white" : "text-gray-900")}>
//               AI Builder
//             </h1>
//             <span className={cn("text-lg", darkMode ? "text-gray-400" : "text-gray-500")}>|</span>
//             <Badge
//               variant="secondary"
//               className={cn(
//                 "text-xs transition-colors",
//                 darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600",
//               )}
//             >
//               v1.0.0
//             </Badge>
//           </div>
//         </Link>
//       </div>

//       {/* Right side - Dark Mode Toggle */}
//       <div className="ml-auto">
//         <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
//           {darkMode ? <Sun className="h-4 w-4 text-gray-300" /> : <Moon className="h-4 w-4 text-gray-600" />}
//         </Button>
//       </div>
//     </div>
//   )
// }


























"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { UniqueLogo } from "./unique-logo"

interface AppHeaderProps {
  sidebarOpen: boolean
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

export function AppHeader({ sidebarOpen, darkMode, setDarkMode }: AppHeaderProps) {
  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div
      className={cn(
        "h-16 border-b flex items-center px-6 transition-all duration-300",
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
      )}
    >
      {/* Left side - Logo and App Name */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="transform transition-transform group-hover:scale-110 duration-200">
            <UniqueLogo darkMode={darkMode} size="md" />
          </div>
          <div className="flex items-center gap-2">
            <h1 className={cn("font-bold text-lg transition-colors", darkMode ? "text-white" : "text-gray-900")}>
              AI Builder
            </h1>
            <span className={cn("text-lg", darkMode ? "text-gray-400" : "text-gray-500")}>|</span>
            <Badge
              variant="secondary"
              className={cn(
                "text-xs transition-colors",
                darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600",
              )}
            >
              v1.0.0
            </Badge>
          </div>
        </Link>
      </div>

      {/* Right side - Dark Mode Toggle */}
      <div className="ml-auto">
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
          {darkMode ? <Sun className="h-4 w-4 text-gray-300" /> : <Moon className="h-4 w-4 text-gray-600" />}
        </Button>
      </div>
    </div>
  )
}
