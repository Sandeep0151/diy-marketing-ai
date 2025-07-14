"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Zap } from "lucide-react"

export default function ProcessingPage() {
  const [progress, setProgress] = useState(96)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/builder/final-form")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Cooking Up Your Plan ✨
          </span>
        </h1>

        <Card className="border-0 shadow-lg rounded-3xl mb-8 bg-white">
          <CardContent className="p-12">
            {/* Lightning Icon */}
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Zap className="h-10 w-10 text-white" />
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-600 to-purple-700 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-4">{progress}% Complete</p>
            <p className="text-base text-gray-500">Plotting your ad domination journey. Cape not included 🦸</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
