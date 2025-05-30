
// app/dashboard/page.tsx

"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Code, MessageSquare, FileText } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">AI Builder Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Landing Page Card */}
          <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <Home className="w-10 h-10 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Home</h2>
            <p className="text-gray-600 mb-4">Return to the landing page</p>
            <Link href="/" className="w-full">
              <Button variant="outline" className="w-full">
                Go to Home
              </Button>
            </Link>
          </Card>

          {/* Prompt Builder Card */}
          <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <MessageSquare className="w-10 h-10 text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Prompt Builder</h2>
            <p className="text-gray-600 mb-4">Create and manage AI prompts</p>
            <Link href="/#prompt-builder" className="w-full">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Open App
              </Button>
            </Link>
          </Card>

          {/* CodeMap Studio Card */}
          <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <Code className="w-10 h-10 text-green-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">CodeMap Studio</h2>
            <p className="text-gray-600 mb-4">Visualize and analyze code</p>
            <Link href="/#codemap-studio" className="w-full">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Open App
              </Button>
            </Link>
          </Card>

          {/* TextExtract Pro Card */}
          <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <FileText className="w-10 h-10 text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">TextExtract Pro</h2>
            <p className="text-gray-600 mb-4">Advanced text extraction tools</p>
            <Link href="/#textextract-pro" className="w-full">
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Open App
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}