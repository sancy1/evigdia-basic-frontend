"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Code, MessageSquare, FileText } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <div className={cn("flex h-screen", darkMode ? "dark bg-gray-900" : "bg-gray-50")}>
      {/* Sidebar */}
      <AppSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <AppHeader sidebarOpen={sidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <h1 className={cn("text-3xl font-bold mb-8", darkMode ? "text-white" : "text-gray-800")}>
              AI Builder Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Landing Page Card */}
              {/* <Card
                className={cn(
                  "p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow",
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white",
                )}
              >
                <Home className="w-10 h-10 text-blue-600 mb-4" />
                <h2 className={cn("text-xl font-semibold mb-2", darkMode ? "text-white" : "text-gray-900")}>Home</h2>
                <p className={cn("mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>Return to the landing page</p>
                <Link href="/" className="w-full">
                  <Button variant="outline" className="w-full">
                    Go to Home
                  </Button>
                </Link>
              </Card> */}

              {/* Prompt Builder Card */}
              <Card
                className={cn(
                  "p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow",
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white",
                )}
              >
                <MessageSquare className="w-10 h-10 text-purple-600 mb-4" />
                <h2 className={cn("text-xl font-semibold mb-2", darkMode ? "text-white" : "text-gray-900")}>
                  Prompt Builder
                </h2>
                <p className={cn("mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>Create and manage AI prompts</p>
                <Link href="/prompt-builder" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Open App</Button>
                </Link>
              </Card>

              {/* CodeMap Studio Card */}
              <Card
                className={cn(
                  "p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow",
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white",
                )}
              >
                <Code className="w-10 h-10 text-green-600 mb-4" />
                <h2 className={cn("text-xl font-semibold mb-2", darkMode ? "text-white" : "text-gray-900")}>
                  CodeMap Studio
                </h2>
                <p className={cn("mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>Visualize and analyze code</p>
                <Link href="/codemap-studio" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Open App</Button>
                </Link>
              </Card>

              {/* TextExtract Pro Card */}
              <Card
                className={cn(
                  "p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow",
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white",
                )}
              >
                <FileText className="w-10 h-10 text-orange-600 mb-4" />
                <h2 className={cn("text-xl font-semibold mb-2", darkMode ? "text-white" : "text-gray-900")}>
                  TextExtract Pro
                </h2>
                <p className={cn("mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>
                  Advanced text extraction tools
                </p>
                <Link href="/textextract-pro" className="w-full">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Open App</Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
