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
import { Copy, Download, FileText, Code, Loader2, Plus, X, Bot, Sparkles } from "lucide-react"
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
}

export default function PromptBuilder() {
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
  })

  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [generatedCode, setGeneratedCode] = useState("")
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false)
  const [isGeneratingCode, setIsGeneratingCode] = useState(false)
  const [activeTab, setActiveTab] = useState("form")

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

  const generatePrompt = async () => {
    setIsGeneratingPrompt(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const prompt = `
# Professional App Development Prompt

## Project Overview
**App Name:** ${formData.appName}
**Description:** ${formData.appDescription}
**Summary:** ${formData.summary}

## Target Audience
Primary users: ${formData.targetUsers}

## Key Features
${formData.keyFeatures
  .filter((f) => f.trim())
  .map((feature) => `- ${feature}`)
  .join("\n")}

## Technical Requirements
**Platform:** ${formData.platform}
**Tech Stack:** ${formData.techStack}
**Design Style:** ${formData.designStyle}

## Development Context
**What has been tried:** ${formData.whatTried}
**What worked:** ${formData.whatWorked}
**What failed:** ${formData.whatFailed}
**What to avoid:** ${formData.whatToAvoid}
**Areas for improvement:** ${formData.whatToImprove}

## Implementation Guidelines
- Professional implementation: ${formData.professionalImplementation ? "Yes" : "No"}
- Avoid errors: ${formData.avoidErrors ? "Yes" : "No"}
- Preserve existing code: ${formData.avoidBreakingCode ? "Yes" : "No"}

## Expected Output
${formData.expectedResult}

## Output Goals
${formData.outputGoals.join(", ")}

## Additional Instructions
${formData.instructions}
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

    const code = `
// src/app/page.tsx
import React from 'react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        ${formData.appName}
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        ${formData.summary}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${formData.keyFeatures
          .filter((f) => f.trim())
          .map(
            (feature) => `
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">${feature}</h3>
          <p className="text-gray-600">Feature implementation here</p>
        </div>`,
          )
          .join("")}
      </div>
    </div>
  )
}

// src/components/ui/feature-card.tsx
interface FeatureCardProps {
  title: string
  description: string
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
                <Bot className="h-8 w-8 text-purple-600" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Prompt Builder
                </h1>
              </div>
              <p className={cn("text-lg max-w-3xl", darkMode ? "text-gray-300" : "text-gray-600")}>
                Help the AI understand the scope, purpose, features, design, and tech stack to generate the right code
                file by file.
              </p>
            </div>

          <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full my-12 sm:my-6 lg:my-8" // This controls the overall container's margin
        >
          {/* <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mt-1 mb-28 sm:mt-2 sm:mb-8"> */}
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mt-2 mb-40 sm:mt-2 sm:mb-8">
            <TabsTrigger value="form" className="flex items-center justify-center gap-2 py-3 sm:py-2">
              <FileText className="h-4 w-4" />
              Form Builder
            </TabsTrigger>
            <TabsTrigger value="prompt" className="flex items-center justify-center gap-2 py-3 sm:py-2">
              <Sparkles className="h-4 w-4" />
              Generated Prompt
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center justify-center gap-2 py-3 sm:py-2">
              <Code className="h-4 w-4" />
              Generated Code
            </TabsTrigger>
          </TabsList>




              <TabsContent value="form" className="space-y-8">
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
                        <Label htmlFor="appName">App Name *</Label>
                        <Input
                          id="appName"
                          placeholder="Enter your app's name"
                          value={formData.appName}
                          onChange={(e) => setFormData((prev) => ({ ...prev, appName: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="targetUsers">Target Users *</Label>
                        <Input
                          id="targetUsers"
                          placeholder="e.g., students, businesses, developers"
                          value={formData.targetUsers}
                          onChange={(e) => setFormData((prev) => ({ ...prev, targetUsers: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="appDescription">App Description *</Label>
                      <Textarea
                        id="appDescription"
                        placeholder="Describe what your app does in detail"
                        rows={4}
                        value={formData.appDescription}
                        onChange={(e) => setFormData((prev) => ({ ...prev, appDescription: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="summary">Brief Summary *</Label>
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

                {/* Experience & Context */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">3</span>
                      </div>
                      Experience & Context
                    </CardTitle>
                    <CardDescription>Share your past experiences and what you want to achieve</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="whatTried">What Have You Tried?</Label>
                        <Textarea
                          id="whatTried"
                          placeholder="Describe your past attempts"
                          rows={3}
                          value={formData.whatTried}
                          onChange={(e) => setFormData((prev) => ({ ...prev, whatTried: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatWorked">What Worked?</Label>
                        <Textarea
                          id="whatWorked"
                          placeholder="Describe your successes"
                          rows={3}
                          value={formData.whatWorked}
                          onChange={(e) => setFormData((prev) => ({ ...prev, whatWorked: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatFailed">What Failed?</Label>
                        <Textarea
                          id="whatFailed"
                          placeholder="Describe what didn't work"
                          rows={3}
                          value={formData.whatFailed}
                          onChange={(e) => setFormData((prev) => ({ ...prev, whatFailed: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatToAvoid">What to Avoid?</Label>
                        <Textarea
                          id="whatToAvoid"
                          placeholder="List potential pitfalls"
                          rows={3}
                          value={formData.whatToAvoid}
                          onChange={(e) => setFormData((prev) => ({ ...prev, whatToAvoid: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="whatToImprove">What to Improve?</Label>
                        <Textarea
                          id="whatToImprove"
                          placeholder="Areas needing improvement"
                          rows={3}
                          value={formData.whatToImprove}
                          onChange={(e) => setFormData((prev) => ({ ...prev, whatToImprove: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expectedResult">Expected Result</Label>
                        <Textarea
                          id="expectedResult"
                          placeholder="Describe your ideal outcome"
                          rows={3}
                          value={formData.expectedResult}
                          onChange={(e) => setFormData((prev) => ({ ...prev, expectedResult: e.target.value }))}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technical Configuration */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">4</span>
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
                        <span className="text-red-600 font-semibold">5</span>
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

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <Label htmlFor="hasUserRoles">User Roles & Permissions</Label>
                          <p className="text-sm text-gray-500">Different user access levels</p>
                        </div>
                        <Switch
                          id="hasUserRoles"
                          checked={formData.hasUserRoles}
                          onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, hasUserRoles: checked }))}
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

                    {formData.hasUserRoles && (
                      <div className="space-y-2">
                        <Label htmlFor="userRoles">User Roles</Label>
                        <Textarea
                          id="userRoles"
                          placeholder="e.g., admin, regular user, seller, buyer"
                          rows={3}
                          value={formData.userRoles}
                          onChange={(e) => setFormData((prev) => ({ ...prev, userRoles: e.target.value }))}
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
                        <span className="text-indigo-600 font-semibold">6</span>
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
                    disabled={!formData.appName || !formData.appDescription || isGeneratingPrompt}
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
                    disabled={!generatedPrompt || isGeneratingCode}
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
                        Generate Code for App
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="prompt" className="space-y-6">
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>

                  <CardHeader>
                  {/* <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between"> */}
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
                        onClick={() => {
                          const blob = new Blob([generatedPrompt], { type: "text/plain" })
                          const url = URL.createObjectURL(blob)
                          const a = document.createElement("a")
                          a.href = url
                          a.download = "generated-prompt.txt"
                          a.click()
                        }}
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
                    {/* This div should be a flex container that changes direction */}
                    <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard(generatedCode)}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy All
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const blob = new Blob([generatedCode], { type: "text/plain" });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement("a");
                          a.href = url;
                          a.download = "generated-code.txt";
                          a.click();
                        }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>

                  <CardContent>
                    {generatedCode ? (
                      <div className="space-y-4">
                        <div
                          className={cn(
                            "p-4 rounded-lg overflow-auto max-h-96",
                            darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-900 text-gray-100",
                          )}
                        >
                          <pre className="text-sm">
                            <code>{generatedCode}</code>
                          </pre>
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
                              {`${formData.appName?.toLowerCase().replace(/\s+/g, "-") || "my-app"}/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   └── feature-card.tsx
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
                        <p>No code generated yet. Generate a prompt first, then click "Generate Code for App".</p>
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
