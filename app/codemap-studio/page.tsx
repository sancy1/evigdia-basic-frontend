"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  FolderTree,
  Upload,
  Github,
  Cloud,
  Copy,
  Download,
  FileText,
  Code,
  Loader2,
  Plus,
  X,
  Trash2,
  Settings,
  RefreshCw,
  Save,
  FileCode,
  TreePine,
  Filter,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"

interface ExclusionItem {
  id: string
  name: string
  type: "file" | "folder"
}

interface ProjectData {
  projectPath: string
  exclusions: ExclusionItem[]
  snippetLines: number
  outputFileName: string
  selectedFiles: string[]
  selectedFolders: string[]
}

export default function CodeMapStudio() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [activeMode, setActiveMode] = useState("structure")
  const [isGenerating, setIsGenerating] = useState(false)

  const [projectData, setProjectData] = useState<ProjectData>({
    projectPath: "",
    exclusions: [],
    snippetLines: 10,
    outputFileName: "structure.txt",
    selectedFiles: [],
    selectedFolders: [],
  })

  const [exclusionInput, setExclusionInput] = useState("")
  const [exclusionMethod, setExclusionMethod] = useState<"typing" | "files" | "folders">("typing")
  const [generatedStructure, setGeneratedStructure] = useState("")
  const [generatedCode, setGeneratedCode] = useState("")
  const [selectedExclusions, setSelectedExclusions] = useState<string[]>([])

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const handleProjectUpload = (type: "local" | "github" | "cloud") => {
    // Simulate file selection
    const mockPath =
      type === "github"
        ? "https://github.com/user/project.git"
        : type === "cloud"
          ? "/cloud/projects/my-app"
          : "/local/projects/my-app"

    setProjectData((prev) => ({ ...prev, projectPath: mockPath }))
    toast({
      title: "Project Selected",
      description: `Project loaded from ${type}`,
    })
  }

  const addExclusion = () => {
    if (!exclusionInput.trim()) return

    const items = exclusionInput
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
    const newExclusions: ExclusionItem[] = items.map((item) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: item,
      type: item.includes(".") ? "file" : "folder",
    }))

    setProjectData((prev) => ({
      ...prev,
      exclusions: [...prev.exclusions, ...newExclusions],
    }))
    setExclusionInput("")

    toast({
      title: "Exclusions Added",
      description: `Added ${newExclusions.length} exclusion(s)`,
    })
  }

  const removeSelectedExclusions = () => {
    setProjectData((prev) => ({
      ...prev,
      exclusions: prev.exclusions.filter((item) => !selectedExclusions.includes(item.id)),
    }))
    setSelectedExclusions([])

    toast({
      title: "Exclusions Removed",
      description: "Selected exclusions have been removed",
    })
  }

  const clearAllExclusions = () => {
    setProjectData((prev) => ({ ...prev, exclusions: [] }))
    setSelectedExclusions([])

    toast({
      title: "All Exclusions Cleared",
      description: "All exclusions have been removed",
    })
  }

  const generateStructure = async () => {
    if (!projectData.projectPath) {
      toast({
        title: "No Project Selected",
        description: "Please select a project folder first",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // Simulate generation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const mockStructure = `my-project/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── input.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── footer.tsx
│   │   └── features/
│   │       ├── auth/
│   │       │   ├── login-form.tsx
│   │       │   └── signup-form.tsx
│   │       └── dashboard/
│   │           ├── stats-card.tsx
│   │           └── chart.tsx
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth].ts
│   │   │   └── users/
│   │   │       └── index.ts
│   │   ├── dashboard/
│   │   │   └── index.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── components.css
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   └── utils.ts
│   └── types/
│       ├── auth.ts
│   └── api.ts
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   └── hero.jpg
│   ├── icons/
│   │   └── favicon.ico
│   └── manifest.json
├── docs/
│   ├── README.md
│   ├── CONTRIBUTING.md
│   └── API.md
├── .env.local
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js`

    setGeneratedStructure(mockStructure)

    if (activeMode !== "structure") {
      const mockCode = `// src/components/ui/button.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          {
            'bg-blue-600 text-white hover:bg-blue-700': variant === 'default',
            'border border-gray-300 bg-white hover:bg-gray-50': variant === 'outline',
            'hover:bg-gray-100': variant === 'ghost',
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4': size === 'md',
            'h-12 px-6 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

// src/components/layout/header.tsx
import { Button } from '@/components/ui/button'
import { Menu, User } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Menu className="h-4 w-4" />
            </Button>
            <h1 className="text-xl font-bold">My App</h1>
          </div>
          <Button variant="outline" size="sm">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
        </div>
      </div>
    </header>
  )
}
`

      setGeneratedCode(mockCode)
    }

    setIsGenerating(false)

    toast({
      title: "Structure Generated!",
      description: "Your project structure has been analyzed and generated",
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Content copied to clipboard",
    })
  }

  const saveToFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)

    toast({
      title: "File Saved",
      description: `${filename} has been downloaded`,
    })
  }

  const clearAll = () => {
    setProjectData({
      projectPath: "",
      exclusions: [],
      snippetLines: 10,
      outputFileName: "structure.txt",
      selectedFiles: [],
      selectedFolders: [],
    })
    setGeneratedStructure("")
    setGeneratedCode("")
    setSelectedExclusions([])
    setExclusionInput("")

    toast({
      title: "All Cleared",
      description: "All data has been reset",
    })
  }

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
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FolderTree className="h-8 w-8 text-purple-600" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CodeMap Studio
                </h1>
              </div>
              <p className={cn("text-lg max-w-4xl", darkMode ? "text-gray-300" : "text-gray-600")}>
                Visualize, analyze, and document your project's architecture with intelligent structure generation and
                code analysis.
              </p>
            </div>

            {/* Mode Selection */}
            {/* <div className="mb-8">
              <Tabs value={activeMode} onValueChange={setActiveMode} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="structure" className="flex items-center gap-2">
                    <TreePine className="h-4 w-4" />
                    Structure Only
                  </TabsTrigger>
                  <TabsTrigger value="snippets" className="flex items-center gap-2">
                    <FileCode className="h-4 w-4" />
                    With Snippets
                  </TabsTrigger>
                  <TabsTrigger value="fullcode" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Full Code
                  </TabsTrigger>
                  <TabsTrigger value="selective" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Selective View
                  </TabsTrigger>
                </TabsList> */}



                {/* Mode Selection */}
                <div className="mb-8"> {/* This div has a mb-8, we'll keep that for now */}
                  <Tabs value={activeMode} onValueChange={setActiveMode} className="w-full">
                    {/* Apply mt-12 mb-24 on mobile, then override with sm:mt-8 sm:mb-8 on larger screens */}
                    {/* Stack vertically on mobile (grid-cols-1), then 4 columns on larger screens (sm:grid-cols-4) */}
                    <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4 gap-2 mt-2 mb-48 sm:mt-2 sm:mb-8">
                      <TabsTrigger value="structure" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                        <TreePine className="h-4 w-4" />
                        Structure Only
                      </TabsTrigger>
                      <TabsTrigger value="snippets" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                        <FileCode className="h-4 w-4" />
                        With Snippets
                      </TabsTrigger>
                      <TabsTrigger value="fullcode" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                        <Code className="h-4 w-4" />
                        Full Code
                      </TabsTrigger>
                      <TabsTrigger value="selective" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                        <Filter className="h-4 w-4" />
                        Selective View
                      </TabsTrigger>
                    </TabsList>



                {/* Project Selection */}
                <Card className={cn("mb-8", darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      Project Source
                    </CardTitle>
                    <CardDescription>
                      Select your project from local storage, GitHub, or cloud platforms
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button
                        variant="outline"
                        className="h-20 flex flex-col gap-2"
                        onClick={() => handleProjectUpload("local")}
                      >
                        <Upload className="h-6 w-6" />
                        <span>Browse Local</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="h-20 flex flex-col gap-2"
                        onClick={() => handleProjectUpload("github")}
                      >
                        <Github className="h-6 w-6" />
                        <span>GitHub Repo</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="h-20 flex flex-col gap-2"
                        onClick={() => handleProjectUpload("cloud")}
                      >
                        <Cloud className="h-6 w-6" />
                        <span>Cloud Storage</span>
                      </Button>
                    </div>

                    {projectData.projectPath && (
                      <div
                        className={cn("p-3 rounded-lg border", darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50")}
                      >
                        <Label className="text-sm font-medium">Selected Project:</Label>
                        <p className={cn("text-sm mt-1", darkMode ? "text-gray-300" : "text-gray-600")}>
                          {projectData.projectPath}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Mode-specific content */}
                <TabsContent value="structure" className="space-y-6">
                  {/* Exclusions */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <X className="h-5 w-5" />
                        Exclusions
                      </CardTitle>
                      <CardDescription>Specify files and folders to exclude from the structure</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Exclusion Methods */}
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          variant={exclusionMethod === "typing" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("typing")}
                        >
                          Type Names
                        </Button>
                        <Button
                          variant={exclusionMethod === "files" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("files")}
                        >
                          Browse Files
                        </Button>
                        <Button
                          variant={exclusionMethod === "folders" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("folders")}
                        >
                          Browse Folders
                        </Button>
                      </div>

                      {/* Exclusion Input */}
                      {exclusionMethod === "typing" && (
                        <div className="space-y-2">
                          <Label>Enter names (comma-separated):</Label>
                          <div className="flex gap-2">
                            <Textarea
                              placeholder="node_modules, .git, dist, *.log, temp/"
                              value={exclusionInput}
                              onChange={(e) => setExclusionInput(e.target.value)}
                              rows={3}
                              className="flex-1"
                            />
                            <div className="flex flex-col gap-2">
                              <Button onClick={addExclusion} size="sm">
                                <Plus className="h-4 w-4 mr-1" />
                                Add
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  navigator.clipboard.readText().then((text) => {
                                    setExclusionInput((prev) => (prev ? `${prev}, ${text}` : text))
                                  })
                                }}
                              >
                                Paste
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Current Exclusions */}
                      {projectData.exclusions.length > 0 && (
                        <div className="space-y-3">
                          <Label>Current Exclusions:</Label>
                          <div
                            className={cn(
                              "p-4 rounded-lg border max-h-40 overflow-y-auto",
                              darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50",
                            )}
                          >
                            <div className="space-y-2">
                              {projectData.exclusions.map((item) => (
                                <div key={item.id} className="flex items-center gap-2">
                                  <Checkbox
                                    checked={selectedExclusions.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedExclusions((prev) => [...prev, item.id])
                                      } else {
                                        setSelectedExclusions((prev) => prev.filter((id) => id !== item.id))
                                      }
                                    }}
                                  />
                                  <Badge variant={item.type === "file" ? "default" : "secondary"}>
                                    {item.type === "file" ? (
                                      <FileText className="h-3 w-3 mr-1" />
                                    ) : (
                                      <FolderTree className="h-3 w-3 mr-1" />
                                    )}
                                    {item.name}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={removeSelectedExclusions}
                              disabled={selectedExclusions.length === 0}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove Selected
                            </Button>
                            <Button variant="outline" size="sm" onClick={clearAllExclusions}>
                              Clear All
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Output Options */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Output Options
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Save As:</Label>
                        <Input
                          value={projectData.outputFileName}
                          onChange={(e) => setProjectData((prev) => ({ ...prev, outputFileName: e.target.value }))}
                          placeholder="structure.txt"
                        />
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        <Button
                          onClick={generateStructure}
                          disabled={!projectData.projectPath || isGenerating}
                          className="bg-gradient-to-r from-blue-600 to-purple-600"
                        >
                          {isGenerating ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              <TreePine className="mr-2 h-4 w-4" />
                              Generate Structure
                            </>
                          )}
                        </Button>

                        {generatedStructure && (
                          <>
                            <Button
                              variant="outline"
                              onClick={() => saveToFile(generatedStructure, projectData.outputFileName)}
                            >
                              <Save className="mr-2 h-4 w-4" />
                              Save to File
                            </Button>
                            <Button variant="outline" onClick={() => copyToClipboard(generatedStructure)}>
                              <Copy className="mr-2 h-4 w-4" />
                              Copy
                            </Button>
                          </>
                        )}

                        <Button variant="outline" onClick={clearAll}>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Clear All
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="snippets" className="space-y-6">
                  {/* Snippet Options */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCode className="h-5 w-5" />
                        Snippet Options
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Lines per snippet: {projectData.snippetLines}</Label>
                        <Slider
                          value={[projectData.snippetLines]}
                          onValueChange={(value) => setProjectData((prev) => ({ ...prev, snippetLines: value[0] }))}
                          max={50}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>1 line</span>
                          <span>50 lines</span>
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        <Button
                          onClick={generateStructure}
                          disabled={!projectData.projectPath || isGenerating}
                          className="bg-gradient-to-r from-blue-600 to-purple-600"
                        >
                          {isGenerating ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              <FileCode className="mr-2 h-4 w-4" />
                              Generate with Snippets
                            </>
                          )}
                        </Button>

                        <Button variant="outline" onClick={clearAll}>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Clear All
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  {/* Exclusions */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <X className="h-5 w-5" />
                        Exclusions
                      </CardTitle>
                      <CardDescription>Specify files and folders to exclude from the structure</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Exclusion Methods */}
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          variant={exclusionMethod === "typing" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("typing")}
                        >
                          Type Names
                        </Button>
                        <Button
                          variant={exclusionMethod === "files" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("files")}
                        >
                          Browse Files
                        </Button>
                        <Button
                          variant={exclusionMethod === "folders" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("folders")}
                        >
                          Browse Folders
                        </Button>
                      </div>

                      {/* Exclusion Input */}
                      {exclusionMethod === "typing" && (
                        <div className="space-y-2">
                          <Label>Enter names (comma-separated):</Label>
                          <div className="flex gap-2">
                            <Textarea
                              placeholder="node_modules, .git, dist, *.log, temp/"
                              value={exclusionInput}
                              onChange={(e) => setExclusionInput(e.target.value)}
                              rows={3}
                              className="flex-1"
                            />
                            <div className="flex flex-col gap-2">
                              <Button onClick={addExclusion} size="sm">
                                <Plus className="h-4 w-4 mr-1" />
                                Add
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  navigator.clipboard.readText().then((text) => {
                                    setExclusionInput((prev) => (prev ? `${prev}, ${text}` : text))
                                  })
                                }}
                              >
                                Paste
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Current Exclusions */}
                      {projectData.exclusions.length > 0 && (
                        <div className="space-y-3">
                          <Label>Current Exclusions:</Label>
                          <div
                            className={cn(
                              "p-4 rounded-lg border max-h-40 overflow-y-auto",
                              darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50",
                            )}
                          >
                            <div className="space-y-2">
                              {projectData.exclusions.map((item) => (
                                <div key={item.id} className="flex items-center gap-2">
                                  <Checkbox
                                    checked={selectedExclusions.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedExclusions((prev) => [...prev, item.id])
                                      } else {
                                        setSelectedExclusions((prev) => prev.filter((id) => id !== item.id))
                                      }
                                    }}
                                  />
                                  <Badge variant={item.type === "file" ? "default" : "secondary"}>
                                    {item.type === "file" ? (
                                      <FileText className="h-3 w-3 mr-1" />
                                    ) : (
                                      <FolderTree className="h-3 w-3 mr-1" />
                                    )}
                                    {item.name}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={removeSelectedExclusions}
                              disabled={selectedExclusions.length === 0}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove Selected
                            </Button>
                            <Button variant="outline" size="sm" onClick={clearAllExclusions}>
                              Clear All
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="fullcode" className="space-y-6">
                  {/* Exclusions */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <X className="h-5 w-5" />
                        Exclusions
                      </CardTitle>
                      <CardDescription>Specify files and folders to exclude from the structure</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Exclusion Methods */}
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          variant={exclusionMethod === "typing" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("typing")}
                        >
                          Type Names
                        </Button>
                        <Button
                          variant={exclusionMethod === "files" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("files")}
                        >
                          Browse Files
                        </Button>
                        <Button
                          variant={exclusionMethod === "folders" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("folders")}
                        >
                          Browse Folders
                        </Button>
                      </div>

                      {/* Exclusion Input */}
                      {exclusionMethod === "typing" && (
                        <div className="space-y-2">
                          <Label>Enter names (comma-separated):</Label>
                          <div className="flex gap-2">
                            <Textarea
                              placeholder="node_modules, .git, dist, *.log, temp/"
                              value={exclusionInput}
                              onChange={(e) => setExclusionInput(e.target.value)}
                              rows={3}
                              className="flex-1"
                            />
                            <div className="flex flex-col gap-2">
                              <Button onClick={addExclusion} size="sm">
                                <Plus className="h-4 w-4 mr-1" />
                                Add
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  navigator.clipboard.readText().then((text) => {
                                    setExclusionInput((prev) => (prev ? `${prev}, ${text}` : text))
                                  })
                                }}
                              >
                                Paste
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Current Exclusions */}
                      {projectData.exclusions.length > 0 && (
                        <div className="space-y-3">
                          <Label>Current Exclusions:</Label>
                          <div
                            className={cn(
                              "p-4 rounded-lg border max-h-40 overflow-y-auto",
                              darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50",
                            )}
                          >
                            <div className="space-y-2">
                              {projectData.exclusions.map((item) => (
                                <div key={item.id} className="flex items-center gap-2">
                                  <Checkbox
                                    checked={selectedExclusions.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedExclusions((prev) => [...prev, item.id])
                                      } else {
                                        setSelectedExclusions((prev) => prev.filter((id) => id !== item.id))
                                      }
                                    }}
                                  />
                                  <Badge variant={item.type === "file" ? "default" : "secondary"}>
                                    {item.type === "file" ? (
                                      <FileText className="h-3 w-3 mr-1" />
                                    ) : (
                                      <FolderTree className="h-3 w-3 mr-1" />
                                    )}
                                    {item.name}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={removeSelectedExclusions}
                              disabled={selectedExclusions.length === 0}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove Selected
                            </Button>
                            <Button variant="outline" size="sm" onClick={clearAllExclusions}>
                              Clear All
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        Full Code Analysis
                      </CardTitle>
                      <CardDescription>Generate complete project structure with full file contents</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          onClick={generateStructure}
                          disabled={!projectData.projectPath || isGenerating}
                          className="bg-gradient-to-r from-blue-600 to-purple-600"
                        >
                          {isGenerating ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              <Code className="mr-2 h-4 w-4" />
                              Generate Full Code
                            </>
                          )}
                        </Button>

                        <Button variant="outline" onClick={clearAll}>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Clear All
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="selective" className="space-y-6">
                  {/* Exclusions */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <X className="h-5 w-5" />
                        Exclusions
                      </CardTitle>
                      <CardDescription>Specify files and folders to exclude from the structure</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Exclusion Methods */}
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          variant={exclusionMethod === "typing" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("typing")}
                        >
                          Type Names
                        </Button>
                        <Button
                          variant={exclusionMethod === "files" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("files")}
                        >
                          Browse Files
                        </Button>
                        <Button
                          variant={exclusionMethod === "folders" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExclusionMethod("folders")}
                        >
                          Browse Folders
                        </Button>
                      </div>

                      {/* Exclusion Input */}
                      {exclusionMethod === "typing" && (
                        <div className="space-y-2">
                          <Label>Enter names (comma-separated):</Label>
                          <div className="flex gap-2">
                            <Textarea
                              placeholder="node_modules, .git, dist, *.log, temp/"
                              value={exclusionInput}
                              onChange={(e) => setExclusionInput(e.target.value)}
                              rows={3}
                              className="flex-1"
                            />
                            <div className="flex flex-col gap-2">
                              <Button onClick={addExclusion} size="sm">
                                <Plus className="h-4 w-4 mr-1" />
                                Add
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  navigator.clipboard.readText().then((text) => {
                                    setExclusionInput((prev) => (prev ? `${prev}, ${text}` : text))
                                  })
                                }}
                              >
                                Paste
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Current Exclusions */}
                      {projectData.exclusions.length > 0 && (
                        <div className="space-y-3">
                          <Label>Current Exclusions:</Label>
                          <div
                            className={cn(
                              "p-4 rounded-lg border max-h-40 overflow-y-auto",
                              darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50",
                            )}
                          >
                            <div className="space-y-2">
                              {projectData.exclusions.map((item) => (
                                <div key={item.id} className="flex items-center gap-2">
                                  <Checkbox
                                    checked={selectedExclusions.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedExclusions((prev) => [...prev, item.id])
                                      } else {
                                        setSelectedExclusions((prev) => prev.filter((id) => id !== item.id))
                                      }
                                    }}
                                  />
                                  <Badge variant={item.type === "file" ? "default" : "secondary"}>
                                    {item.type === "file" ? (
                                      <FileText className="h-3 w-3 mr-1" />
                                    ) : (
                                      <FolderTree className="h-3 w-3 mr-1" />
                                    )}
                                    {item.name}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={removeSelectedExclusions}
                              disabled={selectedExclusions.length === 0}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove Selected
                            </Button>
                            <Button variant="outline" size="sm" onClick={clearAllExclusions}>
                              Clear All
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        Selective Analysis
                      </CardTitle>
                      <CardDescription>Choose specific files and folders to include in your analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Display Mode:</Label>
                            <div className="flex flex-col gap-2">
                              <Button variant="outline" size="sm">
                                <TreePine className="h-4 w-4 mr-2" />
                                Structure Only
                              </Button>
                              <Button variant="outline" size="sm">
                                <FileCode className="h-4 w-4 mr-2" />
                                Structure + Snippets
                              </Button>
                              <Button variant="outline" size="sm">
                                <Code className="h-4 w-4 mr-2" />
                                Structure + Full Code
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>File Selection:</Label>
                            <div
                              className={cn(
                                "p-4 border rounded-lg min-h-32",
                                darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50",
                              )}
                            >
                              <p className={cn("text-sm", darkMode ? "text-gray-400" : "text-gray-500")}>
                                Select project first to browse files
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                          <Button
                            onClick={generateStructure}
                            disabled={!projectData.projectPath || isGenerating}
                            className="bg-gradient-to-r from-blue-600 to-purple-600"
                          >
                            {isGenerating ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating...
                              </>
                            ) : (
                              <>
                                <Filter className="mr-2 h-4 w-4" />
                                Generate Selective View
                              </>
                            )}
                          </Button>

                          <Button variant="outline" onClick={clearAll}>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Clear All
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Results */}
            {(generatedStructure || generatedCode) && (
              <div className="space-y-6">
                <h2 className={cn("text-2xl font-bold", darkMode ? "text-white" : "text-gray-900")}>
                  Generated Results
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Structure Preview */}
                  {generatedStructure && (
                    <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <TreePine className="h-5 w-5" />
                            Project Structure
                          </span>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(generatedStructure)}>
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => saveToFile(generatedStructure, projectData.outputFileName)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre
                          className={cn(
                            "text-sm overflow-auto max-h-96 p-4 rounded-lg border font-mono",
                            darkMode ? "bg-gray-900 border-gray-600 text-gray-100" : "bg-gray-50 text-gray-800",
                          )}
                        >
                          {generatedStructure}
                        </pre>
                      </CardContent>
                    </Card>
                  )}

                  {/* Code Preview */}
                  {generatedCode && (
                    <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <Code className="h-5 w-5" />
                            Code Preview
                          </span>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(generatedCode)}>
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => saveToFile(generatedCode, "code-preview.txt")}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre
                          className={cn(
                            "text-sm overflow-auto max-h-96 p-4 rounded-lg border font-mono",
                            darkMode ? "bg-gray-900 border-gray-600 text-gray-100" : "bg-gray-50 text-gray-800",
                          )}
                        >
                          {generatedCode}
                        </pre>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
