
"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function VerificationSuccess() {
  const [countdown, setCountdown] = useState(60)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <CardTitle>Email Verified Successfully!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p>Congratulations! Your email has been verified.</p>
          <p>Redirecting to login in {countdown} seconds...</p>
          <Button 
            onClick={() => router.push('/')}
            className="w-full"
          >
            Go to Login Now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}