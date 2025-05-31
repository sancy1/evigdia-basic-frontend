
// components/auth/PasswordStrengthMeter

"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface PasswordStrengthMeterProps {
  password: string
  className?: string
}

export const PasswordStrengthMeter = ({ password, className }: PasswordStrengthMeterProps) => {
  const [strength, setStrength] = useState<{
    score: number
    label: string
    color: string
  }>({ score: 0, label: "Weak", color: "bg-red-500" })

  useEffect(() => {
    const calculateStrength = () => {
      let score = 0
      
      // Length check
      if (password.length >= 8) score++
      if (password.length >= 12) score++
      
      // Complexity checks
      if (/[A-Z]/.test(password)) score++
      if (/[0-9]/.test(password)) score++
      if (/[^A-Za-z0-9]/.test(password)) score++
      
      // Determine strength level
      let label = "Weak"
      let color = "bg-red-500"
      
      if (score >= 4) {
        label = "Strong"
        color = "bg-green-500"
      } else if (score >= 2) {
        label = "Medium"
        color = "bg-yellow-500"
      }
      
      return { score, label, color }
    }

    setStrength(calculateStrength())
  }, [password])

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Password strength:</span>
        <span className="font-medium">{strength.label}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${strength.color}`}
          style={{ width: `${(strength.score / 5) * 100}%` }}
        ></div>
      </div>
      {password.length > 0 && (
        <ul className="text-xs text-gray-500 space-y-1 mt-2">
          <li className={cn(password.length >= 8 ? "text-green-500" : "")}>
            {password.length >= 8 ? "✓" : "•"} At least 8 characters
          </li>
          <li className={cn(/[A-Z]/.test(password) ? "text-green-500" : "")}>
            {/[A-Z]/.test(password) ? "✓" : "•"} Uppercase letter
          </li>
          <li className={cn(/[0-9]/.test(password) ? "text-green-500" : "")}>
            {/[0-9]/.test(password) ? "✓" : "•"} Number
          </li>
          <li className={cn(/[^A-Za-z0-9]/.test(password) ? "text-green-500" : "")}>
            {/[^A-Za-z0-9]/.test(password) ? "✓" : "•"} Special character
          </li>
        </ul>
      )}
    </div>
  )
}