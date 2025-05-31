
"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  FileText,
  Upload,
  ImageIcon,
  FileVideo,
  File,
  QrCode,
  Unlock,
  Copy,
  Download,
  Trash2,
  Edit3,
  RefreshCw,
  Loader2,
  X,
  Plus,
  Camera,
  Lock,
  Zap,
  Target,
  Globe,
  TrendingUp,
  Hash,
  AlertCircle,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"

interface UploadedFile {
  id: string
  name: string
  type: string
  size: number
  category: "image" | "document" | "media" | "other"
}

interface ExtractionSettings {
  professionalFormatting: boolean
  errorMinimization: boolean
  languageDetection: boolean
  textSummarization: boolean
  summaryLength: number
  keywordExtraction: boolean
  sentimentAnalysis: boolean
  preserveFormatting: boolean
  qrCodeDetection: boolean
}

export default function TextExtractPro() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("upload")
  const [isExtracting, setIsExtracting] = useState(false)
  const [extractionProgress, setExtractionProgress] = useState(0)

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [extractedText, setExtractedText] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [qrContent, setQrContent] = useState("")
  const [detectedLanguage, setDetectedLanguage] = useState("")
  const [extractedKeywords, setExtractedKeywords] = useState<string[]>([])
  const [sentimentResult, setSentimentResult] = useState("")
  const [unlockPassword, setUnlockPassword] = useState("")
  const [exportFormat, setExportFormat] = useState("txt")

  const fileInputRef = useRef<HTMLInputElement>(null)
  const qrInputRef = useRef<HTMLInputElement>(null)
  const lockedFileInputRef = useRef<HTMLInputElement>(null)

  const [settings, setSettings] = useState<ExtractionSettings>({
    professionalFormatting: true,
    errorMinimization: true,
    languageDetection: false,
    textSummarization: false,
    summaryLength: 50,
    keywordExtraction: false,
    sentimentAnalysis: false,
    preserveFormatting: true,
    qrCodeDetection: true,
  })

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const categorizeFile = (file: File): "image" | "document" | "media" | "other" => {
    const imageTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp", "image/bmp", "image/svg+xml"]
    const documentTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "text/plain",
    ]
    const mediaTypes = ["video/mp4", "video/avi", "video/mov", "audio/mp3", "audio/wav", "audio/ogg"]

    if (imageTypes.includes(file.type)) return "image"
    if (documentTypes.includes(file.type)) return "document"
    if (mediaTypes.includes(file.type)) return "media"
    return "other"
  }

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return

    const newFiles: UploadedFile[] = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type,
      size: file.size,
      category: categorizeFile(file),
    }))

    setUploadedFiles((prev) => [...prev, ...newFiles])

    toast({
      title: "Files Uploaded",
      description: `Added ${newFiles.length} file(s) for processing`,
    })
  }

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id))
  }

  const clearAllFiles = () => {
    setUploadedFiles([])
    toast({
      title: "Files Cleared",
      description: "All uploaded files have been removed",
    })
  }

  const handleQrUpload = () => {
    // Simulate QR code detection
    setTimeout(() => {
      setQrContent("https://example.com/qr-detected-content")
      toast({
        title: "QR Code Detected",
        description: "QR code content has been extracted",
      })
    }, 1000)
  }

  const handleUnlockFile = () => {
    // Simulate file unlocking
    toast({
      title: "File Unlock Attempted",
      description: unlockPassword ? "Attempting with provided password..." : "Attempting force unlock...",
    })
  }

  const extractText = async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No Files Selected",
        description: "Please upload files before extracting text",
        variant: "destructive",
      })
      return
    }

    setIsExtracting(true)
    setExtractionProgress(0)

    // Simulate extraction process
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200))
      setExtractionProgress(i)
    }

    // Generate mock extracted text based on uploaded files
    const mockText = `# Extracted Text Results

## Document Analysis Summary
Total files processed: ${uploadedFiles.length}
- Images: ${uploadedFiles.filter((f) => f.category === "image").length}
- Documents: ${uploadedFiles.filter((f) => f.category === "document").length}
- Media files: ${uploadedFiles.filter((f) => f.category === "media").length}

## Extracted Content

### Sample Document Text
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

### Image OCR Results
Text detected in uploaded images:
- "Welcome to our company"
- "Product specifications: Model XYZ-123"
- "Contact us at info@example.com"

### Media Transcription
Audio/Video transcription results:
"Hello and welcome to this presentation. Today we'll be discussing the latest developments in artificial intelligence and machine learning technologies."

### Professional Formatting Applied
${settings.professionalFormatting ? "✓ Professional formatting has been applied to ensure clean, readable output." : ""}

### Additional Analysis
${settings.languageDetection ? "Language detected: English" : ""}
${settings.keywordExtraction ? "Keywords: technology, AI, machine learning, development, presentation" : ""}
${settings.sentimentAnalysis ? "Sentiment: Positive (confidence: 85%)" : ""}
${settings.textSummarization ? "Summary: This content discusses AI and ML technologies in a professional presentation format." : ""}

---
Generated by TextExtract Pro - AI Builder Suite`

    setExtractedText(mockText)

    // Set additional analysis results
    if (settings.languageDetection) {
      setDetectedLanguage("English")
    }
    if (settings.keywordExtraction) {
      setExtractedKeywords(["technology", "AI", "machine learning", "development", "presentation"])
    }
    if (settings.sentimentAnalysis) {
      setSentimentResult("Positive (85%)")
    }

    setIsExtracting(false)
    setActiveTab("results")

    toast({
      title: "Extraction Complete!",
      description: "Text has been successfully extracted from all files",
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    })
  }

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setExtractedText((prev) => prev + "\n\n" + text)
      toast({
        title: "Pasted!",
        description: "Text pasted from clipboard",
      })
    } catch (error) {
      toast({
        title: "Paste Failed",
        description: "Unable to paste from clipboard",
        variant: "destructive",
      })
    }
  }

  const downloadFile = () => {
    const blob = new Blob([extractedText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `extracted-text.${exportFormat}`
    a.click()
    URL.revokeObjectURL(url)

    toast({
      title: "File Downloaded",
      description: `Text saved as ${exportFormat.toUpperCase()} file`,
    })
  }

  const clearOutput = () => {
    setExtractedText("")
    setQrContent("")
    setDetectedLanguage("")
    setExtractedKeywords([])
    setSentimentResult("")
    toast({
      title: "Output Cleared",
      description: "All extracted text has been cleared",
    })
  }

  const resetAll = () => {
    setUploadedFiles([])
    setExtractedText("")
    setQrContent("")
    setDetectedLanguage("")
    setExtractedKeywords([])
    setSentimentResult("")
    setUnlockPassword("")
    setSettings({
      professionalFormatting: true,
      errorMinimization: true,
      languageDetection: false,
      textSummarization: false,
      summaryLength: 50,
      keywordExtraction: false,
      sentimentAnalysis: false,
      preserveFormatting: true,
      qrCodeDetection: true,
    })

    toast({
      title: "Reset Complete",
      description: "All data has been reset to defaults",
    })
  }

  const getFileIcon = (category: string) => {
    switch (category) {
      case "image":
        return <ImageIcon className="h-4 w-4" />
      case "document":
        return <File className="h-4 w-4" />
      case "media":
        return <FileVideo className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
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
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-8 w-8 text-purple-600" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TextExtract Pro
                </h1>
              </div>
              <p className={cn("text-lg max-w-4xl", darkMode ? "text-gray-300" : "text-gray-600")}>
                Extract, convert, and analyze text from images, documents, videos, and audio files with advanced AI
                processing capabilities.
              </p>
            </div>

            {/* <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
                <TabsTrigger value="upload" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Upload & Process
                </TabsTrigger>
                <TabsTrigger value="special" className="flex items-center gap-2">
                  <QrCode className="h-4 w-4" />
                  Special Features
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Advanced Settings
                </TabsTrigger>
                <TabsTrigger value="results" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Results & Export
                </TabsTrigger>
              </TabsList> */}

              
              
              {/* <Tabs 
  value={activeTab} 
  onValueChange={setActiveTab} 
  className="w-full my-12 sm:my-6 lg:my-8"
>
  <TabsList className="flex flex-col sm:flex-row w-full gap-2 mb-24 mt-24">
    <TabsTrigger value="upload" className="flex items-center justify-center gap-2 py-3 sm:py-2">
      <Upload className="h-4 w-4" />
      Upload & Process
    </TabsTrigger>
    <TabsTrigger value="special" className="flex items-center justify-center gap-2 py-3 sm:py-2">
      <QrCode className="h-4 w-4" />
      Special Features
    </TabsTrigger>
    <TabsTrigger value="settings" className="flex items-center justify-center gap-2 py-3 sm:py-2">
      <Zap className="h-4 w-4" />
      Advanced Settings
    </TabsTrigger>
    <TabsTrigger value="results" className="flex items-center justify-center gap-2 py-3 sm:py-2">
      <Target className="h-4 w-4" />
      Results & Export
    </TabsTrigger>
  </TabsList> */}



        <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full my-12 sm:my-6 lg:my-8"
      >
        {/* <TabsList className="flex flex-col sm:flex-row w-full gap-2 mb-24 mt-24 sm:mb-8 sm:mt-8"> */}
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4 gap-2 mt-2 mb-48 sm:mt-2 sm:mb-8">
          <TabsTrigger value="upload" className="flex items-center justify-center gap-2 py-3 sm:py-2">
            <Upload className="h-4 w-4" />
            Upload & Process
          </TabsTrigger>
          <TabsTrigger value="special" className="flex items-center justify-center gap-2 py-3 sm:py-2">
            <QrCode className="h-4 w-4" />
            Special Features
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center justify-center gap-2 py-3 sm:py-2">
            <Zap className="h-4 w-4" />
            Advanced Settings
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center justify-center gap-2 py-3 sm:py-2">
            <Target className="h-4 w-4" />
            Results & Export
          </TabsTrigger>
        </TabsList>


              <TabsContent value="upload" className="space-y-6">
                {/* File Upload Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Images */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ImageIcon className="h-5 w-5" />
                        Images
                      </CardTitle>
                      <CardDescription>JPEG, PNG, GIF, WebP, SVG</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div
                        className={cn(
                          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                          darkMode
                            ? "border-gray-600 hover:border-gray-500 bg-gray-700/50"
                            : "border-gray-300 hover:border-gray-400 bg-gray-50",
                        )}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <ImageIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                        <p className={cn("text-sm", darkMode ? "text-gray-300" : "text-gray-600")}>
                          Click to upload images or drag & drop
                        </p>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e.target.files)}
                      />
                    </CardContent>
                  </Card>

                  {/* Documents */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <File className="h-5 w-5" />
                        Documents
                      </CardTitle>
                      <CardDescription>PDF, DOCX, PPTX, TXT</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div
                        className={cn(
                          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                          darkMode
                            ? "border-gray-600 hover:border-gray-500 bg-gray-700/50"
                            : "border-gray-300 hover:border-gray-400 bg-gray-50",
                        )}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <File className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                        <p className={cn("text-sm", darkMode ? "text-gray-300" : "text-gray-600")}>
                          Click to upload documents or drag & drop
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Media */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileVideo className="h-5 w-5" />
                        Media
                      </CardTitle>
                      <CardDescription>MP4, MP3, WAV, MOV</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div
                        className={cn(
                          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                          darkMode
                            ? "border-gray-600 hover:border-gray-500 bg-gray-700/50"
                            : "border-gray-300 hover:border-gray-400 bg-gray-50",
                        )}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <FileVideo className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                        <p className={cn("text-sm", darkMode ? "text-gray-300" : "text-gray-600")}>
                          Click to upload media or drag & drop
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Uploaded Files */}
                {uploadedFiles.length > 0 && (
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Uploaded Files ({uploadedFiles.length})</span>
                        <Button variant="outline" size="sm" onClick={clearAllFiles}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Clear All
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {uploadedFiles.map((file) => (
                          <div
                            key={file.id}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-lg border",
                              darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200",
                            )}
                          >
                            {getFileIcon(file.category)}
                            <div className="flex-1 min-w-0">
                              <p
                                className={cn(
                                  "text-sm font-medium truncate",
                                  darkMode ? "text-gray-200" : "text-gray-900",
                                )}
                              >
                                {file.name}
                              </p>
                              <p className={cn("text-xs", darkMode ? "text-gray-400" : "text-gray-500")}>
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => removeFile(file.id)} className="h-8 w-8">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Extract Button */}
                <div className="flex justify-center">
                  <Button
                    onClick={extractText}
                    disabled={uploadedFiles.length === 0 || isExtracting}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isExtracting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Extracting Text...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 h-5 w-5" />
                        Extract Text from All Files
                      </>
                    )}
                  </Button>
                </div>

                {/* Progress */}
                {isExtracting && (
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Processing files...</span>
                          <span>{extractionProgress}%</span>
                        </div>
                        <Progress value={extractionProgress} className="w-full" />
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="special" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* QR Code Reader */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <QrCode className="h-5 w-5" />
                        QR Code Reader
                      </CardTitle>
                      <CardDescription>Extract content from QR codes in images</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">

                      {/* <div className="flex gap-2">
                        <Button variant="outline" onClick={() => qrInputRef.current?.click()} className="flex-1">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload QR Image
                        </Button>
                        <Button variant="outline" onClick={handleQrUpload}>
                          <Camera className="h-4 w-4 mr-2" />
                          Scan with Camera
                        </Button>
                      </div> */}

                      <div className="flex flex-col sm:flex-row gap-2 w-full">
                      <Button variant="outline" onClick={() => qrInputRef.current?.click()} className="flex-1 w-full">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload QR Image
                      </Button>
                      <Button variant="outline" onClick={handleQrUpload} className="flex-1 w-full">
                        <Camera className="h-4 w-4 mr-2" />
                        Scan with Camera
                      </Button>
                    </div>
                      <input
                        ref={qrInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleQrUpload}
                      />
                      {qrContent && (
                        <div
                          className={cn(
                            "p-3 rounded-lg border",
                            darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200",
                          )}
                        >
                          <Label className="text-sm font-medium">QR Content:</Label>
                          <p className={cn("text-sm mt-1", darkMode ? "text-gray-300" : "text-gray-600")}>
                            {qrContent}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(qrContent)}
                            className="mt-2"
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Content
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Locked File Processor */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Unlock className="h-5 w-5" />
                        Unlock Protected Files
                      </CardTitle>
                      <CardDescription>Attempt to extract text from password-protected files</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" onClick={() => lockedFileInputRef.current?.click()} className="w-full">
                        <Lock className="h-4 w-4 mr-2" />
                        Upload Locked File
                      </Button>
                      <input ref={lockedFileInputRef} type="file" accept=".pdf,.docx,.pptx" className="hidden" />
                      <div className="space-y-2">
                        <Label htmlFor="password">Password (if known)</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter password..."
                          value={unlockPassword}
                          onChange={(e) => setUnlockPassword(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" onClick={handleUnlockFile} className="w-full">
                        <Unlock className="h-4 w-4 mr-2" />
                        Attempt Unlock
                      </Button>
                      <div className="flex items-center gap-2 text-sm text-amber-600">
                        <AlertCircle className="h-4 w-4" />
                        <span>Use responsibly and only on files you own</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Basic Settings */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Extraction Settings
                      </CardTitle>
                      <CardDescription>Configure how text is extracted and processed</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>Professional Formatting</Label>
                          <p className="text-sm text-gray-500">Apply clean, structured formatting</p>
                        </div>
                        <Switch
                          checked={settings.professionalFormatting}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({ ...prev, professionalFormatting: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>Error Minimization</Label>
                          <p className="text-sm text-gray-500">Reduce OCR and transcription errors</p>
                        </div>
                        <Switch
                          checked={settings.errorMinimization}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({ ...prev, errorMinimization: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>Preserve Formatting</Label>
                          <p className="text-sm text-gray-500">Keep original document structure</p>
                        </div>
                        <Switch
                          checked={settings.preserveFormatting}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({ ...prev, preserveFormatting: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>QR Code Detection</Label>
                          <p className="text-sm text-gray-500">Automatically detect QR codes in images</p>
                        </div>
                        <Switch
                          checked={settings.qrCodeDetection}
                          onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, qrCodeDetection: checked }))}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Advanced Analysis */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Advanced Analysis
                      </CardTitle>
                      <CardDescription>AI-powered text analysis features</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            Language Detection
                          </Label>
                          <p className="text-sm text-gray-500">Identify the language of extracted text</p>
                        </div>
                        <Switch
                          checked={settings.languageDetection}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({ ...prev, languageDetection: checked }))
                          }
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              Text Summarization
                            </Label>
                            <p className="text-sm text-gray-500">Generate automatic summaries</p>
                          </div>
                          <Switch
                            checked={settings.textSummarization}
                            onCheckedChange={(checked) =>
                              setSettings((prev) => ({ ...prev, textSummarization: checked }))
                            }
                          />
                        </div>
                        {settings.textSummarization && (
                          <div className="space-y-2">
                            <Label htmlFor="summaryLength">Summary Length (%)</Label>
                            <Input
                              id="summaryLength"
                              type="number"
                              min="10"
                              max="90"
                              value={settings.summaryLength}
                              onChange={(e) =>
                                setSettings((prev) => ({
                                  ...prev,
                                  summaryLength: Number.parseInt(e.target.value) || 50,
                                }))
                              }
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="flex items-center gap-2">
                            <Hash className="h-4 w-4" />
                            Keyword Extraction
                          </Label>
                          <p className="text-sm text-gray-500">Extract key terms and phrases</p>
                        </div>
                        <Switch
                          checked={settings.keywordExtraction}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({ ...prev, keywordExtraction: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Sentiment Analysis
                          </Label>
                          <p className="text-sm text-gray-500">Analyze emotional tone of text</p>
                        </div>
                        <Switch
                          checked={settings.sentimentAnalysis}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({ ...prev, sentimentAnalysis: checked }))
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="results" className="space-y-6">
                {/* Analysis Results */}
                {(detectedLanguage || extractedKeywords.length > 0 || sentimentResult) && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {detectedLanguage && (
                      <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-2">
                            <Globe className="h-5 w-5 text-blue-500" />
                            <div>
                              <p className="text-sm font-medium">Language</p>
                              <p className={cn("text-lg font-bold", darkMode ? "text-gray-200" : "text-gray-900")}>
                                {detectedLanguage}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {sentimentResult && (
                      <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-500" />
                            <div>
                              <p className="text-sm font-medium">Sentiment</p>
                              <p className={cn("text-lg font-bold", darkMode ? "text-gray-200" : "text-gray-900")}>
                                {sentimentResult}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {extractedKeywords.length > 0 && (
                      <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Hash className="h-5 w-5 text-purple-500" />
                            <p className="text-sm font-medium">Keywords</p>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {extractedKeywords.map((keyword, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {/* Main Results */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>

                    {/* <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Extracted Text
                      </span>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                          <Edit3 className="h-4 w-4 mr-2" />
                          {isEditing ? "View" : "Edit"}
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard(extractedText)}>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm" onClick={pasteFromClipboard}>
                          <Plus className="h-4 w-4 mr-2" />
                          Paste
                        </Button>
                      </div>
                    </CardTitle> */}

                    <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Extracted Text
                    </span>
                    {/* This div needs to be responsive: flex-col on mobile, flex-row on sm+ */}
                    {/* Buttons inside will take full width on mobile, share space on sm+ */}
                    <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0 w-full sm:w-auto">
                      <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)} className="w-full sm:flex-1">
                        <Edit3 className="h-4 w-4 mr-2" />
                        {isEditing ? "View" : "Edit"}
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard(extractedText)} className="w-full sm:flex-1">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" onClick={pasteFromClipboard} className="w-full sm:flex-1">
                        <Plus className="h-4 w-4 mr-2" />
                        Paste
                      </Button>
                    </div>
                  </CardTitle>

                  </CardHeader>
                  <CardContent>
                    {extractedText ? (
                      <Textarea
                        value={extractedText}
                        onChange={(e) => setExtractedText(e.target.value)}
                        readOnly={!isEditing}
                        className={cn(
                          "min-h-96 font-mono text-sm",
                          !isEditing && "cursor-default",
                          darkMode ? "bg-gray-900 border-gray-600" : "bg-gray-50",
                        )}
                        placeholder="Extracted text will appear here..."
                      />
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No text extracted yet. Upload files and click "Extract Text" to begin.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Export Options */}
                {extractedText && (
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Download className="h-5 w-5" />
                        Export & Save
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Label>Export Format:</Label>
                        <Select value={exportFormat} onValueChange={setExportFormat}>
                          <SelectTrigger className="w-48">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="txt">Plain Text (.txt)</SelectItem>
                            <SelectItem value="docx">Word Document (.docx)</SelectItem>
                            <SelectItem value="pdf">PDF Document (.pdf)</SelectItem>
                            <SelectItem value="pptx">PowerPoint (.pptx)</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button onClick={downloadFile} className="bg-green-600 hover:bg-green-700">
                          <Download className="h-4 w-4 mr-2" />
                          Download File
                        </Button>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" onClick={clearOutput}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Clear Output
                        </Button>
                        <Button variant="outline" onClick={resetAll}>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Reset All
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
