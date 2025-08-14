// "use client"

// import { useState, useEffect } from "react"
// import { Card } from "@/components/ui/card"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// import { 
//   Home, 
//   Code, 
//   MessageSquare, 
//   FileText, 
//   Bot, 
//   FolderTree, 
//   Bug, 
//   Search, 
//   History 
// } from "lucide-react"

// import { AppSidebar } from "@/components/app-sidebar"
// import { AppHeader } from "@/components/app-header"
// import { cn } from "@/lib/utils"

// export default function DashboardPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true)
//   const [darkMode, setDarkMode] = useState(false)

//   // Theme management
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme")
//     if (savedTheme === "dark") {
//       setDarkMode(true)
//       document.documentElement.classList.add("dark")
//     }
//   }, [])

//   return (
//     <div className={cn("flex h-screen", darkMode ? "dark bg-gray-900" : "bg-gray-50")}>
//       {/* Sidebar */}
//       <AppSidebar
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//         darkMode={darkMode}
//         setDarkMode={setDarkMode}
//       />

//       {/* Main Content */}
//       <div className="flex-1 overflow-hidden flex flex-col">
//         {/* Header */}
//         <AppHeader sidebarOpen={sidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />

//         {/* Page Content */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="max-w-6xl mx-auto px-6 py-8">
//             <h1 className={cn("text-3xl font-bold mb-8", darkMode ? "text-white" : "text-gray-800")}>
//               AI Builder Dashboard
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {/* Landing Page Card */}
//               {/* <Card
//                 className={cn(
//                   "p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow",
//                   darkMode ? "bg-gray-800 border-gray-700" : "bg-white",
//                 )}
//               >
//                 <Home className="w-10 h-10 text-blue-600 mb-4" />
//                 <h2 className={cn("text-xl font-semibold mb-2", darkMode ? "text-white" : "text-gray-900")}>Home</h2>
//                 <p className={cn("mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>Return to the landing page</p>
//                 <Link href="/" className="w-full">
//                   <Button variant="outline" className="w-full">
//                     Go to Home
//                   </Button>
//                 </Link>
//               </Card> */}

//               {/* Prompt Builder Card */}
//               <Card
//                 className={cn(
//                   "p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow",
//                   darkMode ? "bg-gray-800 border-gray-700" : "bg-white",
//                 )}
//               >
//                 <Bot className="w-10 h-10 text-purple-600 mb-4" />
//                 <h2 className={cn("text-xl font-semibold mb-2", darkMode ? "text-white" : "text-gray-900")}>
//                   Prompt Builder
//                 </h2>
//                 <p className={cn("mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>Create and manage AI prompts</p>
//                 <Link href="/prompt-builder" className="w-full">
//                   <Button className="w-full bg-purple-600 hover:bg-purple-700">Open App</Button>
//                 </Link>
//               </Card>

//               {/* CodeMap Studio Card */}
//               <Card
//                 className={cn(
//                   "p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow",
//                   darkMode ? "bg-gray-800 border-gray-700" : "bg-white",
//                 )}
//               >
//                 <FolderTree className="w-10 h-10 text-green-600 mb-4" />
//                 <h2 className={cn("text-xl font-semibold mb-2", darkMode ? "text-white" : "text-gray-900")}>
//                   CodeMap Studio
//                 </h2>
//                 <p className={cn("mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>Visualize, analyze code and project structure</p>
//                 <Link href="/codemap-studio" className="w-full">
//                   <Button className="w-full bg-green-600 hover:bg-green-700">Open App</Button>
//                 </Link>
//               </Card>


//               {/* TextExtract Pro Card */}
//               <Card
//                 className={cn(
//                   "p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow",
//                   darkMode ? "bg-gray-800 border-gray-700" : "bg-white",
//                 )}
//               >
//                 <FileText className="w-10 h-10 text-orange-600 mb-4" />
//                 <h2 className={cn("text-xl font-semibold mb-2", darkMode ? "text-white" : "text-gray-900")}>
//                   TextExtract Pro
//                 </h2>
//                 <p className={cn("mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>
//                   Advanced text extraction tools
//                 </p>
//                 <Link href="/textextract-pro" className="w-full">
//                   <Button className="w-full bg-orange-600 hover:bg-orange-700">Open App</Button>
//                 </Link>
//               </Card>


//               {/* Code Generator Card */}
//               <Card
//                 className={cn(
//                   "p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow",
//                   darkMode ? "bg-gray-800 border-gray-700" : "bg-white",
//                 )}
//               >
//                 <Code className="w-10 h-10 text-gray-600 mb-4" />
//                 <h2 className={cn("text-xl font-semibold mb-2", darkMode ? "text-white" : "text-gray-900")}>
//                   Code Generator
//                 </h2>
//                 <p className={cn("mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>
//                   Generate production-ready code
//                 </p>
//                 <Link href="/code-generator" className="w-full">
//                   <Button className="w-full bg-gray-600 hover:bg-gray-700">Open App</Button>
//                 </Link>
//               </Card>
              

//               {/* Debug Card */}
//               <Card
//                 className={cn(
//                   "p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow",
//                   darkMode ? "bg-gray-800 border-gray-700" : "bg-white",
//                 )}
//               >
//                 <Code className="w-10 h-10 text-red-600 mb-4" />
//                 <h2 className={cn("text-xl font-semibold mb-2", darkMode ? "text-white" : "text-gray-900")}>
//                   Debug
//                 </h2>
//                 <p className={cn("mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>
//                    AI-powered analysis and precise solutions
//                 </p>
//                 <Link href="/debug" className="w-full">
//                   <Button className="w-full bg-red-600 hover:bg-gray-700">Open App</Button>
//                 </Link>
//               </Card>


//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

















"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Bot, FolderTree, FileText, Bug, Clock, ArrowRight, Layers, Settings, Plus } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for the dashboard
const recentProjects = [
  { id: 1, name: "E-commerce Platform", type: "Web App", progress: 75, lastUpdated: "2 hours ago" },
  { id: 2, name: "Task Management API", type: "Backend", progress: 45, lastUpdated: "Yesterday" },
  { id: 3, name: "Mobile Dashboard", type: "Mobile App", progress: 90, lastUpdated: "3 days ago" },
  { id: 4, name: "Analytics Dashboard", type: "Web App", progress: 30, lastUpdated: "1 week ago" },
]

const activityFeed = [
  { id: 1, action: "Generated code", project: "E-commerce Platform", time: "2 hours ago", icon: Code },
  { id: 2, action: "Created prompt", project: "Task Management API", time: "Yesterday", icon: Bot },
  { id: 3, action: "Debugged issue", project: "Mobile Dashboard", time: "3 days ago", icon: Bug },
  { id: 4, action: "Extracted text", project: "Documentation", time: "1 week ago", icon: FileText },
]

const quickStats = [
  { title: "Total Projects", value: "24", icon: Layers, color: "bg-blue-500" },
  { title: "Code Generated", value: "156 files", icon: Code, color: "bg-purple-500" },
  { title: "Debug Sessions", value: "38", icon: Bug, color: "bg-red-500" },
  { title: "Prompts Created", value: "92", icon: Bot, color: "bg-green-500" },
]

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Dashboard Header */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className={cn("text-3xl font-bold", darkMode ? "text-white" : "text-gray-800")}>
                    Welcome back, John
                  </h1>
                  <p className={cn("mt-1 text-lg", darkMode ? "text-gray-300" : "text-gray-600")}>
                    Here's what's happening with your projects today
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Activity Log</span>
                  </Button>
                  <Button className="bg-purple-600 from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </div>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {quickStats.map((stat, index) => (
                    <Card
                      key={index}
                      className={cn("border-0 shadow-lg overflow-hidden", darkMode ? "bg-gray-800" : "bg-white")}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className={cn("text-sm font-medium", darkMode ? "text-gray-400" : "text-gray-500")}>
                              {stat.title}
                            </p>
                            <h3 className={cn("text-2xl font-bold mt-1", darkMode ? "text-white" : "text-gray-900")}>
                              {stat.value}
                            </h3>
                          </div>
                          <div className={cn("p-3 rounded-full", stat.color, "bg-opacity-20")}>
                            <stat.icon className={cn("h-6 w-6", stat.color.replace("bg-", "text-"))} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Recent Projects */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle className="text-xl font-bold">Recent Projects</CardTitle>
                      <CardDescription>Your most recently updated projects</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <span>View All</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      {recentProjects.map((project) => (
                        <div
                          key={project.id}
                          className={cn(
                            "p-4 rounded-lg flex flex-col sm:flex-row sm:items-center gap-4",
                            darkMode ? "bg-gray-700/50" : "bg-gray-50",
                          )}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className={cn("font-medium truncate", darkMode ? "text-white" : "text-gray-900")}>
                                {project.name}
                              </h4>
                              <Badge variant="secondary" className="text-xs">
                                {project.type}
                              </Badge>
                            </div>
                            <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2">
                              <div className="flex-1">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span className={darkMode ? "text-gray-400" : "text-gray-500"}>Progress</span>
                                  <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
                                    {project.progress}%
                                  </span>
                                </div>
                                <Progress value={project.progress} className="h-1.5" />
                              </div>
                              <div className={cn("text-xs", darkMode ? "text-gray-400" : "text-gray-500")}>
                                Updated {project.lastUpdated}
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Open
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tools and Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Tools Section */}
                  <div className="lg:col-span-2">
                    <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                      <CardHeader>
                        <CardTitle className="text-xl font-bold">AI Builder Tools</CardTitle>
                        <CardDescription>Quick access to your favorite tools</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          <Link href="/prompt-builder">
                            <div
                              className={cn(
                                "p-4 rounded-lg border flex flex-col items-center text-center gap-3 transition-all hover:shadow-md",
                                darkMode
                                  ? "bg-gray-700/50 border-gray-600 hover:bg-gray-700"
                                  : "bg-gray-50 border-gray-200 hover:bg-gray-100",
                              )}
                            >
                              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                <Bot className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                              </div>
                              <div>
                                <h3 className={cn("font-medium", darkMode ? "text-white" : "text-gray-900")}>
                                  Prompt Builder
                                </h3>
                                <p className={cn("text-xs mt-1", darkMode ? "text-gray-400" : "text-gray-500")}>
                                  Create AI prompts
                                </p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/codemap-studio">
                            <div
                              className={cn(
                                "p-4 rounded-lg border flex flex-col items-center text-center gap-3 transition-all hover:shadow-md",
                                darkMode
                                  ? "bg-gray-700/50 border-gray-600 hover:bg-gray-700"
                                  : "bg-gray-50 border-gray-200 hover:bg-gray-100",
                              )}
                            >
                              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <FolderTree className="h-6 w-6 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <h3 className={cn("font-medium", darkMode ? "text-white" : "text-gray-900")}>
                                  CodeMap Studio
                                </h3>
                                <p className={cn("text-xs mt-1", darkMode ? "text-gray-400" : "text-gray-500")}>
                                  Visualize code
                                </p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/textextract-pro">
                            <div
                              className={cn(
                                "p-4 rounded-lg border flex flex-col items-center text-center gap-3 transition-all hover:shadow-md",
                                darkMode
                                  ? "bg-gray-700/50 border-gray-600 hover:bg-gray-700"
                                  : "bg-gray-50 border-gray-200 hover:bg-gray-100",
                              )}
                            >
                              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                <FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                              </div>
                              <div>
                                <h3 className={cn("font-medium", darkMode ? "text-white" : "text-gray-900")}>
                                  TextExtract Pro
                                </h3>
                                <p className={cn("text-xs mt-1", darkMode ? "text-gray-400" : "text-gray-500")}>
                                  Extract text
                                </p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/code-generator">
                            <div
                              className={cn(
                                "p-4 rounded-lg border flex flex-col items-center text-center gap-3 transition-all hover:shadow-md",
                                darkMode
                                  ? "bg-gray-700/50 border-gray-600 hover:bg-gray-700"
                                  : "bg-gray-50 border-gray-200 hover:bg-gray-100",
                              )}
                            >
                              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <h3 className={cn("font-medium", darkMode ? "text-white" : "text-gray-900")}>
                                  Code Generator
                                </h3>
                                <p className={cn("text-xs mt-1", darkMode ? "text-gray-400" : "text-gray-500")}>
                                  Generate code
                                </p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/debug">
                            <div
                              className={cn(
                                "p-4 rounded-lg border flex flex-col items-center text-center gap-3 transition-all hover:shadow-md",
                                darkMode
                                  ? "bg-gray-700/50 border-gray-600 hover:bg-gray-700"
                                  : "bg-gray-50 border-gray-200 hover:bg-gray-100",
                              )}
                            >
                              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                <Bug className="h-6 w-6 text-red-600 dark:text-red-400" />
                              </div>
                              <div>
                                <h3 className={cn("font-medium", darkMode ? "text-white" : "text-gray-900")}>Debug</h3>
                                <p className={cn("text-xs mt-1", darkMode ? "text-gray-400" : "text-gray-500")}>
                                  Fix issues
                                </p>
                              </div>
                            </div>
                          </Link>

                          <Link href="#settings">
                            <div
                              className={cn(
                                "p-4 rounded-lg border flex flex-col items-center text-center gap-3 transition-all hover:shadow-md",
                                darkMode
                                  ? "bg-gray-700/50 border-gray-600 hover:bg-gray-700"
                                  : "bg-gray-50 border-gray-200 hover:bg-gray-100",
                              )}
                            >
                              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                <Settings className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                              </div>
                              <div>
                                <h3 className={cn("font-medium", darkMode ? "text-white" : "text-gray-900")}>
                                  Settings
                                </h3>
                                <p className={cn("text-xs mt-1", darkMode ? "text-gray-400" : "text-gray-500")}>
                                  Configure app
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Activity Feed */}
                  <div>
                    <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                      <CardHeader>
                        <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
                        <CardDescription>Your latest actions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-5">
                          {activityFeed.map((activity) => (
                            <div key={activity.id} className="flex gap-3">
                              <div
                                className={cn(
                                  "flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center",
                                  activity.icon === Code
                                    ? "bg-blue-100 dark:bg-blue-900/30"
                                    : activity.icon === Bot
                                      ? "bg-purple-100 dark:bg-purple-900/30"
                                      : activity.icon === Bug
                                        ? "bg-red-100 dark:bg-red-900/30"
                                        : "bg-green-100 dark:bg-green-900/30",
                                )}
                              >
                                <activity.icon
                                  className={cn(
                                    "h-5 w-5",
                                    activity.icon === Code
                                      ? "text-blue-600 dark:text-blue-400"
                                      : activity.icon === Bot
                                        ? "text-purple-600 dark:text-purple-400"
                                        : activity.icon === Bug
                                          ? "text-red-600 dark:text-red-400"
                                          : "text-green-600 dark:text-green-400",
                                  )}
                                />
                              </div>
                              <div className="flex-1">
                                <p className={cn("text-sm", darkMode ? "text-white" : "text-gray-900")}>
                                  <span className="font-medium">{activity.action}</span> in{" "}
                                  <span className="font-medium">{activity.project}</span>
                                </p>
                                <p className={cn("text-xs mt-1", darkMode ? "text-gray-400" : "text-gray-500")}>
                                  {activity.time}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">All Projects</CardTitle>
                    <CardDescription>Manage all your projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className={cn("text-lg", darkMode ? "text-gray-300" : "text-gray-600")}>
                        Projects tab content will be displayed here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Analytics</CardTitle>
                    <CardDescription>Your usage statistics and insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className={cn("text-lg", darkMode ? "text-gray-300" : "text-gray-600")}>
                        Analytics content will be displayed here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
