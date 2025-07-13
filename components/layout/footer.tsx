
"use client"

import { Sparkles } from "lucide-react"
import LastUpdatedDisplay from '@/components/LastUpdatedDisplay';
import { UniqueLogo } from "@/components/unique-logo" 

export function LandingFooter() {
  return (
    <footer className="mt-24 border-t bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div> */}
               <UniqueLogo /> 
              <span className="font-bold text-lg">AI Builder</span>
            </div>
            <p className="text-gray-600">
              Transform your ideas into production-ready code with intelligent AI assistance.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Features</li>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Help Center</li>
              <li>Community</li>
              <li>Status</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 AI Builder. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}