

"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Bug,
  AlertTriangle,
  Code,
  FileText,
  Copy,
  Download,
  Loader2,
  Sparkles,
  Shield,
  CheckCircle,
  XCircle,
  RefreshCw,
  Zap,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"

interface DebugFormData {
  errorMessage: string
  errorExperience: string
  relevantCode: string
  projectStructure: string
  avoidBreakingCode: boolean
  avoidNewErrors: boolean
  // Experience & Context from Prompt Builder
  whatTried: string
  whatWorked: string
  whatFailed: string
  whatToAvoid: string
  whatToImprove: string
  expectedResult: string
}

export default function DebugPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("form")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const [formData, setFormData] = useState<DebugFormData>({
    errorMessage: "",
    errorExperience: "",
    relevantCode: "",
    projectStructure: "",
    avoidBreakingCode: true,
    avoidNewErrors: true,
    whatTried: "",
    whatWorked: "",
    whatFailed: "",
    whatToAvoid: "",
    whatToImprove: "",
    expectedResult: "",
  })

  const [analysisResult, setAnalysisResult] = useState("")
  const [suggestedSolution, setSuggestedSolution] = useState("")

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const analyzeError = async () => {
    if (!formData.errorMessage.trim()) {
      toast({
        title: "Error Message Required",
        description: "Please provide the error message to analyze",
        variant: "destructive",
      })
      return
    }

    setIsAnalyzing(true)

    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const mockAnalysis = `
# Error Analysis Report

## Error Classification
**Type:** Runtime Error
**Severity:** High
**Category:** Authentication/API Integration

## Root Cause Analysis
Based on the provided error message and context, the issue appears to be related to:

1. **Authentication Token Expiry**: The error suggests that the authentication token has expired
2. **API Endpoint Configuration**: Possible misconfiguration in the API endpoint URL
3. **Network Connectivity**: Potential network timeout or connection issues

## Identified Issues
- Missing error handling for expired tokens
- Lack of automatic token refresh mechanism
- Insufficient validation of API responses

## Impact Assessment
- **User Experience**: Users cannot complete authentication flow
- **System Stability**: ${formData.avoidBreakingCode ? "✅ Existing code preservation prioritized" : "⚠️ May affect existing functionality"}
- **Error Prevention**: ${formData.avoidNewErrors ? "✅ New error prevention enabled" : "⚠️ Risk of introducing new errors"}

## Recommended Solutions
1. Implement automatic token refresh
2. Add comprehensive error handling
3. Improve API response validation
4. Add retry mechanism for failed requests

## Code Quality Considerations
${formData.avoidBreakingCode ? "- Maintaining backward compatibility with existing codebase" : ""}
${formData.avoidNewErrors ? "- Implementing defensive programming practices" : ""}
- Following error handling best practices
- Adding proper logging and monitoring
    `.trim()

    const mockSolution = `
// Enhanced Error Handling Solution

// 1. Token Management with Auto-Refresh
class TokenManager {
  private static instance: TokenManager;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }
    return TokenManager.instance;
  }

  async getValidToken(): Promise<string> {
    if (this.isTokenExpired(this.accessToken)) {
      await this.refreshAccessToken();
    }
    return this.accessToken!;
  }

  private isTokenExpired(token: string | null): boolean {
    if (!token) return true;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return Date.now() >= payload.exp * 1000;
    } catch {
      return true;
    }
  }

  private async refreshAccessToken(): Promise<void> {
    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken: this.refreshToken })
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const data = await response.json();
      this.accessToken = data.accessToken;
      this.refreshToken = data.refreshToken;
    } catch (error) {
      // Redirect to login if refresh fails
      window.location.href = '/auth/login';
      throw error;
    }
  }
}

// 2. Enhanced API Client with Retry Logic
class ApiClient {
  private tokenManager = TokenManager.getInstance();

  async request<T>(
    url: string, 
    options: RequestInit = {},
    retries: number = 3
  ): Promise<T> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const token = await this.tokenManager.getValidToken();
        
        const response = await fetch(url, {
          ...options,
          headers: {
            'Authorization': \`Bearer \${token}\`,
            'Content-Type': 'application/json',
            ...options.headers,
          },
        });

        if (!response.ok) {
          if (response.status === 401 && attempt < retries) {
            // Token might be invalid, retry with fresh token
            continue;
          }
          throw new Error(\`API Error: \${response.status} \${response.statusText}\`);
        }

        return await response.json();
      } catch (error) {
        if (attempt === retries) {
          console.error('API request failed after retries:', error);
          throw error;
        }
        
        // Wait before retry (exponential backoff)
        await new Promise(resolve => 
          setTimeout(resolve, Math.pow(2, attempt) * 1000)
        );
      }
    }
    
    throw new Error('Max retries exceeded');
  }
}

// 3. Error Boundary Component
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Send error to monitoring service
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // Implementation for error logging service
    fetch('/api/errors/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
      }),
    }).catch(console.error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// 4. Usage Example
const apiClient = new ApiClient();

export const useAuthenticatedRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const makeRequest = async <T,>(url: string, options?: RequestInit): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiClient.request<T>(url, options);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { makeRequest, loading, error };
};
    `.trim()

    setAnalysisResult(mockAnalysis)
    setSuggestedSolution(mockSolution)
    setIsAnalyzing(false)
    setActiveTab("analysis")

    toast({
      title: "Analysis Complete!",
      description: "Error analysis and solution suggestions are ready",
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Content copied to clipboard",
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
      description: `${filename} has been saved to your device`,
    })
  }

  const resetForm = () => {
    setFormData({
      errorMessage: "",
      errorExperience: "",
      relevantCode: "",
      projectStructure: "",
      avoidBreakingCode: true,
      avoidNewErrors: true,
      whatTried: "",
      whatWorked: "",
      whatFailed: "",
      whatToAvoid: "",
      whatToImprove: "",
      expectedResult: "",
    })
    setAnalysisResult("")
    setSuggestedSolution("")
    setActiveTab("form")

    toast({
      title: "Form Reset",
      description: "All fields have been cleared",
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
                <Bug className="h-8 w-8 text-red-600" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Debug Assistant
                </h1>
              </div>
              <p className={cn("text-lg max-w-3xl", darkMode ? "text-gray-300" : "text-gray-600")}>
                Provide detailed error information for AI-powered analysis and get precise solutions that preserve your
                existing code.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full my-12 sm:my-6 lg:my-8">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mt-2 mb-48 sm:mt-2 sm:mb-8">
                <TabsTrigger value="form" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                  <FileText className="h-4 w-4" />
                  Error Details
                </TabsTrigger>
                <TabsTrigger value="analysis" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                  <AlertTriangle className="h-4 w-4" />
                  Analysis Results
                </TabsTrigger>
                <TabsTrigger value="solution" className="flex items-center justify-center gap-2 py-3 sm:py-2">
                  <Code className="h-4 w-4" />
                  Solution Code
                </TabsTrigger>
              </TabsList>

              <TabsContent value="form" className="space-y-8">
                {/* Error Message Entry */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-semibold">1</span>
                      </div>
                      Error Message
                    </CardTitle>
                    <CardDescription>Paste the exact error message from your application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Paste the error message here... (e.g., stack traces, console errors, API responses)"
                      value={formData.errorMessage}
                      onChange={(e) => setFormData((prev) => ({ ...prev, errorMessage: e.target.value }))}
                      rows={6}
                      className="font-mono text-sm"
                    />
                  </CardContent>
                </Card>

                {/* Error Experience */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">2</span>
                      </div>
                      Describe Your Experience
                    </CardTitle>
                    <CardDescription>
                      Explain when the error occurred, what triggered it, and how it's impacting your application
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Describe how the error happened and what it affected... (e.g., 'Error occurs when user tries to login after being idle for 30 minutes')"
                      value={formData.errorExperience}
                      onChange={(e) => setFormData((prev) => ({ ...prev, errorExperience: e.target.value }))}
                      rows={4}
                    />
                  </CardContent>
                </Card>

                {/* Relevant Code */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">3</span>
                      </div>
                      Relevant Code Snippets
                    </CardTitle>
                    <CardDescription>
                      Paste the specific code sections from any files that may be causing the error
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Paste code that may be causing the error... (include file paths as comments)"
                      value={formData.relevantCode}
                      onChange={(e) => setFormData((prev) => ({ ...prev, relevantCode: e.target.value }))}
                      rows={8}
                      className="font-mono text-sm"
                    />
                  </CardContent>
                </Card>

                {/* Project Structure */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">4</span>
                      </div>
                      Project Structure
                    </CardTitle>
                    <CardDescription>
                      Describe how your files and imports are structured across the project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="e.g., pages/, components/, services/, how modules are imported, package.json dependencies, etc."
                      value={formData.projectStructure}
                      onChange={(e) => setFormData((prev) => ({ ...prev, projectStructure: e.target.value }))}
                      rows={5}
                    />
                  </CardContent>
                </Card>

                {/* Experience & Context (from Prompt Builder) */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold">5</span>
                      </div>
                      Experience & Context
                    </CardTitle>
                    <CardDescription>Share your debugging attempts and what you want to achieve</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="whatTried">What Have You Tried?</Label>
                        <Textarea
                          id="whatTried"
                          placeholder="Describe your debugging attempts"
                          rows={3}
                          value={formData.whatTried}
                          onChange={(e) => setFormData((prev) => ({ ...prev, whatTried: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatWorked">What Worked?</Label>
                        <Textarea
                          id="whatWorked"
                          placeholder="Describe any partial successes"
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

                {/* Safety Settings */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-semibold">6</span>
                      </div>
                      Safety Settings
                    </CardTitle>
                    <CardDescription>Configure how the AI should approach your debugging</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <Label htmlFor="avoidBreakingCode" className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            Avoid Breaking Existing Code
                          </Label>
                          <p className="text-sm text-gray-500">Preserve currently working code while debugging</p>
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
                          <Label htmlFor="avoidNewErrors" className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            Avoid Introducing New Errors
                          </Label>
                          <p className="text-sm text-gray-500">Ensure solutions don't create new issues</p>
                        </div>
                        <Switch
                          id="avoidNewErrors"
                          checked={formData.avoidNewErrors}
                          onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, avoidNewErrors: checked }))}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={analyzeError}
                    disabled={!formData.errorMessage.trim() || isAnalyzing}
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing Error...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Analyze Error & Get Solution
                      </>
                    )}
                  </Button>

                  <Button onClick={resetForm} variant="outline" size="lg">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reset Form
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="analysis" className="space-y-6">
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <span className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Error Analysis Report
                      </span>
                      <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard(analysisResult)}>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadFile(analysisResult, "error-analysis.md")}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {analysisResult ? (
                      <pre
                        className={cn(
                          "whitespace-pre-wrap p-4 rounded-lg border text-sm overflow-auto max-h-96",
                          darkMode ? "bg-gray-900 border-gray-600 text-gray-100" : "bg-gray-50 text-gray-800",
                        )}
                      >
                        {analysisResult}
                      </pre>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <AlertTriangle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No analysis available yet. Fill out the error details and click "Analyze Error".</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Safety Status */}
                {analysisResult && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2">
                          {formData.avoidBreakingCode ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                          <div>
                            <p className="text-sm font-medium">Code Preservation</p>
                            <p className={cn("text-lg font-bold", darkMode ? "text-gray-200" : "text-gray-900")}>
                              {formData.avoidBreakingCode ? "Protected" : "Not Protected"}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2">
                          {formData.avoidNewErrors ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                          <div>
                            <p className="text-sm font-medium">Error Prevention</p>
                            <p className={cn("text-lg font-bold", darkMode ? "text-gray-200" : "text-gray-900")}>
                              {formData.avoidNewErrors ? "Enabled" : "Disabled"}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="solution" className="space-y-6">
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        Suggested Solution
                      </span>
                      <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard(suggestedSolution)}>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Code
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadFile(suggestedSolution, "solution-code.ts")}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {suggestedSolution ? (
                      <div className="space-y-4">
                        {/* User Input */}
                        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                          <h3 className="text-sm font-medium mb-2 text-purple-700 dark:text-purple-300">
                            Error Summary
                          </h3>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {formData.errorMessage.substring(0, 150)}
                            {formData.errorMessage.length > 150 ? "..." : ""}
                          </p>
                        </div>

                        {/* AI Feedback */}
                        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                          <h3 className="text-sm font-medium mb-2">AI Feedback</h3>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            I've analyzed your error and identified the root cause. The solution below implements proper
                            error handling,
                            {formData.avoidBreakingCode ? " preserves your existing code functionality," : ""}
                            {formData.avoidNewErrors
                              ? " and includes defensive programming to prevent new errors."
                              : ""}
                          </p>
                        </div>

                        {/* Generated Code */}
                        <div>
                          <h3 className="text-sm font-medium mb-2">Solution Code</h3>
                          <div className="p-4 rounded-lg bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 overflow-auto">
                            <pre className="text-sm font-mono">
                              <code>{suggestedSolution}</code>
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
                              {`your-project/
├── src/
│   ├── lib/
│   │   ├── api/
│   │   │   ├── client.ts     <-- Add enhanced API client
│   │   │   └── auth.ts       <-- Update with token management
│   │   └── errors/
│   │       └── boundary.tsx  <-- Add error boundary component
│   ├── components/
│   │   └── ErrorBoundary.tsx <-- Import and use in layout
│   └── hooks/
│       └── useAuthRequest.ts <-- Add authenticated request hook
└── utils/
    └── token-manager.ts      <-- Add token management utilities`}
                            </pre>
                          </div>
                        </div>

                        {/* Safety Indicators */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {formData.avoidBreakingCode && (
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              <Shield className="h-3 w-3 mr-1" />
                              Code-Safe
                            </Badge>
                          )}
                          {formData.avoidNewErrors && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Error-Safe
                            </Badge>
                          )}
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                            <Sparkles className="h-3 w-3 mr-1" />
                            AI-Generated
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No solution generated yet. Complete the error analysis first.</p>
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
