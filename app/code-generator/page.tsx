"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Copy,
  Download,
  FileText,
  Code,
  Loader2,
  Plus,
  X,
  Bot,
  Sparkles,
  ListChecks,
  Settings,
  Layers,
  Shield,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"

interface FormData {
  appName: string
  appDescription: string
  summary: string
  instructions: string
  targetUsers: string
  keyFeatures: string[]
  whatTried: string
  whatWorked: string
  whatFailed: string
  whatToAvoid: string
  whatToImprove: string
  expectedResult: string
  hasProjectStructure: boolean
  projectStructureDetails: string
  professionalImplementation: boolean
  avoidErrors: boolean
  avoidBreakingCode: boolean
  existingCodeContext: string
  platform: string
  techStack: string
  designStyle: string
  hasUserRoles: boolean
  userRoles: string
  integrationNeeds: string
  outputGoals: string[]
  libraryVersion: string
}

interface Task {
  id: string
  name: string
  description: string
  selected: boolean
  order: number
}

export default function CodeGenerator() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    appName: "",
    appDescription: "",
    summary: "",
    instructions: "",
    targetUsers: "",
    keyFeatures: [""],
    whatTried: "",
    whatWorked: "",
    whatFailed: "",
    whatToAvoid: "",
    whatToImprove: "",
    expectedResult: "",
    hasProjectStructure: false,
    projectStructureDetails: "",
    professionalImplementation: true,
    avoidErrors: true,
    avoidBreakingCode: false,
    existingCodeContext: "",
    platform: "",
    techStack: "",
    designStyle: "",
    hasUserRoles: false,
    userRoles: "",
    integrationNeeds: "",
    outputGoals: [],
    libraryVersion: "latest",
  })

  const [promptInput, setPromptInput] = useState("")
  const [generatedTasks, setGeneratedTasks] = useState<Task[]>([])
  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [generatedCode, setGeneratedCode] = useState("")
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false)
  const [isGeneratingCode, setIsGeneratingCode] = useState(false)
  const [isGeneratingTasks, setIsGeneratingTasks] = useState(false)
  const [activeTab, setActiveTab] = useState("form")
  const [buildAllSelected, setBuildAllSelected] = useState(false)

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      keyFeatures: [...prev.keyFeatures, ""],
    }))
  }

  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      keyFeatures: prev.keyFeatures.filter((_, i) => i !== index),
    }))
  }

  const updateFeature = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      keyFeatures: prev.keyFeatures.map((feature, i) => (i === index ? value : feature)),
    }))
  }

  const handleOutputGoalChange = (goal: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      outputGoals: checked ? [...prev.outputGoals, goal] : prev.outputGoals.filter((g) => g !== goal),
    }))
  }

  const generateTasks = async () => {
    if (!promptInput.trim()) {
      toast({
        title: "Empty Prompt",
        description: "Please enter a prompt to generate tasks",
        variant: "destructive",
      })
      return
    }

    setIsGeneratingTasks(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Example tasks for a To-Do App
    const mockTasks = [
      {
        id: "1",
        name: "Set up project structure",
        description: "Initialize the project with necessary files and dependencies",
        selected: false,
        order: 1,
      },
      {
        id: "2",
        name: "Create database schema",
        description: "Design and implement the database models for tasks",
        selected: false,
        order: 2,
      },
      {
        id: "3",
        name: "Implement task creation (Create)",
        description: "Build UI and backend logic for adding new tasks",
        selected: false,
        order: 3,
      },
      {
        id: "4",
        name: "Implement task listing (Read)",
        description: "Display all tasks with proper formatting and sorting",
        selected: false,
        order: 4,
      },
      {
        id: "5",
        name: "Implement task editing (Update)",
        description: "Allow users to modify existing tasks",
        selected: false,
        order: 5,
      },
      {
        id: "6",
        name: "Implement task deletion (Delete)",
        description: "Add functionality to remove tasks",
        selected: false,
        order: 6,
      },
      {
        id: "7",
        name: "Add authentication",
        description: "Implement user login and registration",
        selected: false,
        order: 7,
      },
      {
        id: "8",
        name: "Add task filtering and sorting",
        description: "Allow users to organize and find tasks easily",
        selected: false,
        order: 8,
      },
    ]

    setGeneratedTasks(mockTasks)
    setIsGeneratingTasks(false)

    toast({
      title: "Tasks Generated!",
      description: "Development tasks have been created based on your prompt",
    })
  }

  const toggleTaskSelection = (taskId: string) => {
    setGeneratedTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, selected: !task.selected } : task)))
  }

  const toggleAllTasks = (selected: boolean) => {
    setBuildAllSelected(selected)
    setGeneratedTasks((prev) => prev.map((task) => ({ ...task, selected })))
  }

  const generatePrompt = async () => {
    setIsGeneratingPrompt(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const selectedTasks = generatedTasks.filter((task) => task.selected || buildAllSelected)
    const tasksList =
      selectedTasks.length > 0
        ? `\n## Selected Tasks\n${selectedTasks.map((task) => `- ${task.name}: ${task.description}`).join("\n")}`
        : ""

    const prompt = `
# Professional App Development Prompt

## Project Overview
**App Name:** ${formData.appName || "App from prompt"}
**Description:** ${formData.appDescription || promptInput.substring(0, 100) + "..."}
**Summary:** ${formData.summary || "Generated from user prompt"}

## User Prompt
${promptInput}

${tasksList}

## Technical Requirements
**Platform:** ${formData.platform || "Web"}
**Tech Stack:** ${formData.techStack || "Not specified"}
**Library Version:** ${formData.libraryVersion}
**Design Style:** ${formData.designStyle || "Modern, clean interface"}

## Implementation Guidelines
- Professional implementation: ${formData.professionalImplementation ? "Yes" : "No"}
- Avoid errors: ${formData.avoidErrors ? "Yes" : "No"}
- Preserve existing code: ${formData.avoidBreakingCode ? "Yes" : "No"}

## Expected Output
${formData.expectedResult || "Production-ready code implementing the requested functionality"}

## Output Goals
${formData.outputGoals.join(", ") || "Complete implementation of the requested features"}

## Additional Instructions
${formData.instructions || "Follow best practices and provide clean, well-documented code"}
    `.trim()

    setGeneratedPrompt(prompt)
    setIsGeneratingPrompt(false)
    setActiveTab("prompt")
    toast({
      title: "Prompt Generated!",
      description: "Your detailed prompt has been created successfully.",
    })
  }

  const generateCode = async () => {
    setIsGeneratingCode(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const selectedTasks = generatedTasks.filter((task) => task.selected || buildAllSelected)

    // Generate mock code based on the prompt and selected tasks
    const code = `
// src/app/page.tsx
import React from 'react'
import { Button } from '@/components/ui/button'
import { TaskList } from '@/components/TaskList'
import { AddTaskForm } from '@/components/AddTaskForm'

export default function TodoApp() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        ${formData.appName || "Todo App"}
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        ${formData.summary || promptInput.substring(0, 100) + "..."}
      </p>
      
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
        <div className="p-8">
          <AddTaskForm />
        </div>
      </div>
      
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <TaskList />
        </div>
      </div>
    </div>
  )
}

// src/components/AddTaskForm.tsx
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function AddTaskForm() {
  const [task, setTask] = useState('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add task logic would go here
    console.log('Adding task:', task)
    setTask('')
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
      <div className="flex gap-2">
        <Input 
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task description"
          className="flex-1"
          required
        />
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  )
}

// src/components/TaskList.tsx
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Trash2, Edit } from 'lucide-react'

interface Task {
  id: string
  text: string
  completed: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Learn React', completed: true },
    { id: '2', text: 'Build a todo app', completed: false },
    { id: '3', text: 'Deploy to production', completed: false },
  ])
  
  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }
  
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add some tasks to get started!</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map(task => (
            <li key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-2">
                <Checkbox 
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  id={\`task-\${task.id}\`}
                />
                <label 
                  htmlFor={\`task-\${task.id}\`}
                  className={\`\${task.completed ? "line-through text-gray-500" : ""}\`}
                >
                  {task.text}
                </label>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
`.trim()

    setGeneratedCode(code)
    setIsGeneratingCode(false)
    setActiveTab("code")
    toast({
      title: "Code Generated!",
      description: "Your application code has been generated successfully.",
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
    })
  }

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)

    toast({
      title: "File Downloaded",
      description: `${filename} has been saved to your device.`,
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
          <div className="max-w-5xl mx-auto px-6 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-8 w-8 text-purple-600" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Code Generator
                </h1>
              </div>
              <p className={cn("text-lg max-w-3xl", darkMode ? "text-gray-300" : "text-gray-600")}>
                Generate production-ready code from your prompts with intelligent task breakdown and version control.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full my-12 sm:my-6 lg:my-8">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4 gap-2 mt-2 mb-48 sm:mt-2 sm:mb-8">
                <TabsTrigger value="form" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                  <FileText className="h-4 w-4" />
                  Form Builder
                </TabsTrigger>
                <TabsTrigger value="prompt" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                  <Sparkles className="h-4 w-4" />
                  Generated Prompt
                </TabsTrigger>
                <TabsTrigger value="tasks" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                  <ListChecks className="h-4 w-4" />
                  Development Tasks
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                  <Code className="h-4 w-4" />
                  Generated Code
                </TabsTrigger>
              </TabsList>

              <TabsContent value="form" className="space-y-8">
                {/* Prompt Input Window */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bot className="h-5 w-5" />
                      Prompt Input
                    </CardTitle>
                    <CardDescription>Paste your prompt or describe what you want to build</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="Describe the application you want to build in detail. For example: 'Create a to-do app with CRUD operations, user authentication, and the ability to categorize tasks.'"
                      value={promptInput}
                      onChange={(e) => setPromptInput(e.target.value)}
                      rows={8}
                      className="font-mono"
                    />
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        onClick={generateTasks}
                        disabled={!promptInput.trim() || isGeneratingTasks}
                        className="bg-gradient-to-r from-blue-600 to-purple-600"
                      >
                        {isGeneratingTasks ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing Prompt...
                          </>
                        ) : (
                          <>
                            <ListChecks className="mr-2 h-4 w-4" />
                            Generate Development Tasks
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          navigator.clipboard.readText().then((text) => {
                            setPromptInput(text)
                          })
                        }}
                      >
                        Paste from Clipboard
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Library Version Selection */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Library Version
                    </CardTitle>
                    <CardDescription>Select which version of libraries and frameworks to use</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div
                        className={cn(
                          "p-4 border rounded-lg flex flex-col items-center text-center cursor-pointer transition-all",
                          formData.libraryVersion === "latest"
                            ? darkMode
                              ? "bg-blue-900/30 border-blue-700"
                              : "bg-blue-50 border-blue-200"
                            : darkMode
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-50 border-gray-200",
                        )}
                        onClick={() => setFormData((prev) => ({ ...prev, libraryVersion: "latest" }))}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                          <Sparkles className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="font-medium">Latest Version</h3>
                        <p className="text-sm text-gray-500 mt-1">Newest features and updates</p>
                      </div>

                      <div
                        className={cn(
                          "p-4 border rounded-lg flex flex-col items-center text-center cursor-pointer transition-all",
                          formData.libraryVersion === "stable"
                            ? darkMode
                              ? "bg-blue-900/30 border-blue-700"
                              : "bg-blue-50 border-blue-200"
                            : darkMode
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-50 border-gray-200",
                        )}
                        onClick={() => setFormData((prev) => ({ ...prev, libraryVersion: "stable" }))}
                      >
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                          <Shield className="h-5 w-5 text-green-600" />
                        </div>
                        <h3 className="font-medium">Stable Version</h3>
                        <p className="text-sm text-gray-500 mt-1">Recommended for production</p>
                      </div>

                      <div
                        className={cn(
                          "p-4 border rounded-lg flex flex-col items-center text-center cursor-pointer transition-all",
                          formData.libraryVersion === "older"
                            ? darkMode
                              ? "bg-blue-900/30 border-blue-700"
                              : "bg-blue-50 border-blue-200"
                            : darkMode
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-50 border-gray-200",
                        )}
                        onClick={() => setFormData((prev) => ({ ...prev, libraryVersion: "older" }))}
                      >
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                          <Layers className="h-5 w-5 text-amber-600" />
                        </div>
                        <h3 className="font-medium">Older Version</h3>
                        <p className="text-sm text-gray-500 mt-1">For legacy compatibility</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Basic Information */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">1</span>
                      </div>
                      Basic Information
                    </CardTitle>
                    <CardDescription>Tell us about your app's core identity and purpose</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="appName">App Name</Label>
                        <Input
                          id="appName"
                          placeholder="Enter your app's name"
                          value={formData.appName}
                          onChange={(e) => setFormData((prev) => ({ ...prev, appName: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="targetUsers">Target Users</Label>
                        <Input
                          id="targetUsers"
                          placeholder="e.g., students, businesses, developers"
                          value={formData.targetUsers}
                          onChange={(e) => setFormData((prev) => ({ ...prev, targetUsers: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="appDescription">App Description</Label>
                      <Textarea
                        id="appDescription"
                        placeholder="Describe what your app does in detail"
                        rows={4}
                        value={formData.appDescription}
                        onChange={(e) => setFormData((prev) => ({ ...prev, appDescription: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="summary">Brief Summary</Label>
                      <Textarea
                        id="summary"
                        placeholder="A brief summary of your app (1-2 sentences)"
                        rows={2}
                        value={formData.summary}
                        onChange={(e) => setFormData((prev) => ({ ...prev, summary: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instructions">Specific Instructions</Label>
                      <Textarea
                        id="instructions"
                        placeholder="Any specific steps, rules, or requests for the AI"
                        rows={3}
                        value={formData.instructions}
                        onChange={(e) => setFormData((prev) => ({ ...prev, instructions: e.target.value }))}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Key Features */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold">2</span>
                      </div>
                      Key Features
                    </CardTitle>
                    <CardDescription>List the main features your app should have</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formData.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          placeholder={`Feature ${index + 1}`}
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          className="flex-1"
                        />
                        {formData.keyFeatures.length > 1 && (
                          <Button variant="outline" size="icon" onClick={() => removeFeature(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button variant="outline" onClick={addFeature} className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Feature
                    </Button>
                  </CardContent>
                </Card>

                {/* Technical Configuration */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">3</span>
                      </div>
                      Technical Configuration
                    </CardTitle>
                    <CardDescription>Specify your technical preferences and requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="platform">Platform / Device</Label>
                        <Select
                          value={formData.platform}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, platform: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web">Web</SelectItem>
                            <SelectItem value="mobile">Mobile</SelectItem>
                            <SelectItem value="desktop">Desktop</SelectItem>
                            <SelectItem value="multiple">Multiple Platforms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="techStack">Tech Stack Preferences</Label>
                        <Input
                          id="techStack"
                          placeholder="e.g., React, Next.js, Tailwind CSS, Node.js"
                          value={formData.techStack}
                          onChange={(e) => setFormData((prev) => ({ ...prev, techStack: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="designStyle">Design and Style</Label>
                      <Input
                        id="designStyle"
                        placeholder="e.g., minimal, corporate, playful, colorful, dark mode"
                        value={formData.designStyle}
                        onChange={(e) => setFormData((prev) => ({ ...prev, designStyle: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="integrationNeeds">Integration Needs</Label>
                      <Textarea
                        id="integrationNeeds"
                        placeholder="e.g., payment gateway, maps, auth providers, external APIs"
                        rows={3}
                        value={formData.integrationNeeds}
                        onChange={(e) => setFormData((prev) => ({ ...prev, integrationNeeds: e.target.value }))}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Project Settings */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-semibold">4</span>
                      </div>
                      Project Settings
                    </CardTitle>
                    <CardDescription>Configure how the AI should approach your project</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <Label htmlFor="professionalImplementation">Professional Implementation</Label>
                          <p className="text-sm text-gray-500">Use best practices and high-quality code</p>
                        </div>
                        <Switch
                          id="professionalImplementation"
                          checked={formData.professionalImplementation}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, professionalImplementation: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <Label htmlFor="avoidErrors">Avoid Errors</Label>
                          <p className="text-sm text-gray-500">Prioritize bug-free, robust code</p>
                        </div>
                        <Switch
                          id="avoidErrors"
                          checked={formData.avoidErrors}
                          onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, avoidErrors: checked }))}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <Label htmlFor="hasProjectStructure">Existing Project Structure</Label>
                          <p className="text-sm text-gray-500">Do you have an existing project?</p>
                        </div>
                        <Switch
                          id="hasProjectStructure"
                          checked={formData.hasProjectStructure}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, hasProjectStructure: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <Label htmlFor="avoidBreakingCode">Avoid Breaking Existing Code</Label>
                          <p className="text-sm text-gray-500">Preserve compatibility with existing code</p>
                        </div>
                        <Switch
                          id="avoidBreakingCode"
                          checked={formData.avoidBreakingCode}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, avoidBreakingCode: checked }))
                          }
                        />
                      </div>
                    </div>

                    {formData.hasProjectStructure && (
                      <div className="space-y-2">
                        <Label htmlFor="projectStructureDetails">Project Structure Details</Label>
                        <Textarea
                          id="projectStructureDetails"
                          placeholder="Describe your existing project structure"
                          rows={4}
                          value={formData.projectStructureDetails}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, projectStructureDetails: e.target.value }))
                          }
                        />
                      </div>
                    )}

                    {formData.avoidBreakingCode && (
                      <div className="space-y-2">
                        <Label htmlFor="existingCodeContext">Existing Code Context</Label>
                        <Textarea
                          id="existingCodeContext"
                          placeholder="Provide context about your existing codebase"
                          rows={4}
                          value={formData.existingCodeContext}
                          onChange={(e) => setFormData((prev) => ({ ...prev, existingCodeContext: e.target.value }))}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Output Goals */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-semibold">5</span>
                      </div>
                      Output Goals
                    </CardTitle>
                    <CardDescription>What do you want the AI to generate?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Project Setup",
                        "Individual Components",
                        "Backend Routes",
                        "Full-Stack App",
                        "Database Schema",
                        "API Documentation",
                      ].map((goal) => (
                        <div key={goal} className="flex items-center space-x-2 p-3 border rounded-lg">
                          <Checkbox
                            id={goal}
                            checked={formData.outputGoals.includes(goal)}
                            onCheckedChange={(checked) => handleOutputGoalChange(goal, checked as boolean)}
                          />
                          <Label htmlFor={goal} className="flex-1 cursor-pointer">
                            {goal}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={generatePrompt}
                    disabled={(!promptInput.trim() && !formData.appName) || isGeneratingPrompt}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isGeneratingPrompt ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Prompt...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Detailed Prompt
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={generateCode}
                    disabled={(!generatedPrompt && !promptInput.trim()) || isGeneratingCode}
                    size="lg"
                    variant="outline"
                  >
                    {isGeneratingCode ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Code...
                      </>
                    ) : (
                      <>
                        <Code className="mr-2 h-4 w-4" />
                        Generate Code
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="tasks" className="space-y-6">
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ListChecks className="h-5 w-5" />
                      Development Tasks
                    </CardTitle>
                    <CardDescription>
                      Select which features to build or toggle "Build All" to generate everything
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {generatedTasks.length > 0 ? (
                      <>
                        <div className="flex items-center justify-between p-3 border rounded-lg bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="build-all"
                              checked={buildAllSelected}
                              onCheckedChange={(checked) => toggleAllTasks(checked as boolean)}
                            />
                            <Label htmlFor="build-all" className="font-medium">
                              Build All Features
                            </Label>
                          </div>
                          <Badge variant="outline" className="ml-auto">
                            {generatedTasks.length} tasks
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          {generatedTasks.map((task) => (
                            <div
                              key={task.id}
                              className={cn(
                                "p-3 border rounded-lg transition-colors",
                                task.selected || buildAllSelected
                                  ? darkMode
                                    ? "bg-blue-900/30 border-blue-700"
                                    : "bg-blue-50 border-blue-200"
                                  : darkMode
                                    ? "bg-gray-700 border-gray-600"
                                    : "bg-white border-gray-200",
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <Checkbox
                                  id={`task-${task.id}`}
                                  checked={task.selected || buildAllSelected}
                                  onCheckedChange={() => toggleTaskSelection(task.id)}
                                  disabled={buildAllSelected}
                                />
                                <div className="flex-1">
                                  <Label htmlFor={`task-${task.id}`} className="font-medium block">
                                    {task.name}
                                  </Label>
                                  <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                                </div>
                                <Badge variant="outline">Task {task.order}</Badge>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button
                            onClick={generatePrompt}
                            disabled={isGeneratingPrompt}
                            className="bg-gradient-to-r from-blue-600 to-purple-600"
                          >
                            {isGeneratingPrompt ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating...
                              </>
                            ) : (
                              <>
                                <Sparkles className="mr-2 h-4 w-4" />
                                Generate Prompt with Selected Tasks
                              </>
                            )}
                          </Button>

                          <Button onClick={generateCode} disabled={isGeneratingCode} variant="outline">
                            {isGeneratingCode ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating...
                              </>
                            ) : (
                              <>
                                <Code className="mr-2 h-4 w-4" />
                                Generate Code Directly
                              </>
                            )}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <ListChecks className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                        <p className="text-gray-500 mb-6">
                          No tasks generated yet. Enter a prompt and click "Generate Development Tasks" to begin.
                        </p>
                        <Button onClick={() => setActiveTab("form")} variant="outline">
                          Go to Form Builder
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="prompt" className="space-y-6">
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <span>Generated Prompt</span>
                      <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard(generatedPrompt)}>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadFile(generatedPrompt, "generated-prompt.txt")}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    {generatedPrompt ? (
                      <pre
                        className={cn(
                          "whitespace-pre-wrap p-4 rounded-lg border text-sm overflow-auto max-h-96",
                          darkMode ? "bg-gray-900 border-gray-600 text-gray-100" : "bg-gray-50 text-gray-800",
                        )}
                      >
                        {generatedPrompt}
                      </pre>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No prompt generated yet. Fill out the form and click "Generate Detailed Prompt".</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="code" className="space-y-6">
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <span>Generated Code</span>
                      <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard(generatedCode)}>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy All
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadFile(generatedCode, "generated-code.txt")}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    {generatedCode ? (
                      <div className="space-y-4">
                        {/* User Input */}
                        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                          <h3 className="text-sm font-medium mb-2 text-purple-700 dark:text-purple-300">Your Prompt</h3>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{promptInput.substring(0, 200)}...</p>
                        </div>

                        {/* AI Feedback */}
                        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                          <h3 className="text-sm font-medium mb-2">AI Feedback</h3>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            I've analyzed your requirements and generated a Todo application with the core CRUD
                            functionality. The code includes React components for adding and listing tasks, with proper
                            state management.
                          </p>
                        </div>

                        {/* Generated Code */}
                        <div>
                          <h3 className="text-sm font-medium mb-2">Generated Code</h3>
                          <div className="p-4 rounded-lg bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 overflow-auto">
                            <pre className="text-sm font-mono">
                              <code>{generatedCode}</code>
                            </pre>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h3
                            className={cn("text-lg font-semibold mb-4", darkMode ? "text-gray-200" : "text-gray-900")}
                          >
                            Project Structure
                          </h3>
                          <div
                            className={cn(
                              "p-4 rounded-lg border",
                              darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200",
                            )}
                          >
                            <pre className={cn("text-sm", darkMode ? "text-gray-300" : "text-gray-700")}>
                              {`${formData.appName?.toLowerCase().replace(/\s+/g, "-") || "todo-app"}/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── AddTaskForm.tsx
│   │   └── TaskList.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
├── tailwind.config.js
└── next.config.js`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No code generated yet. Generate a prompt first, then click "Generate Code".</p>
                      </div>
                    )}
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
