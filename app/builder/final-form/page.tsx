"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Zap, CheckCircle } from "lucide-react"

export default function FinalFormPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Cooking Up Your Plan ✨
          </span>
        </h1>

        <Card className="border-0 shadow-lg rounded-3xl mb-8 bg-white">
          <CardContent className="p-8">
            {/* Lightning Icon */}
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-10 w-10 text-white" />
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-3 rounded-full w-full"></div>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-2">100% Complete</p>

            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-purple-600">Your DIY Marketing Plan Is Ready</h2>
            </div>

            <p className="text-base text-gray-600 mb-2">Built from real data. Tailored to your brand.</p>
            <p className="text-base text-gray-600 mb-8">We'll send a copy straight to your inbox.</p>

            {/* Form */}
            <div className="space-y-4 mb-6">
              <div className="text-left">
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="mt-1 text-base py-3 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200"
                />
              </div>
              <div className="text-left">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1 text-base py-3 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200"
                />
              </div>
            </div>

            <Link href="/builder/results">
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-4 rounded-xl font-medium text-lg mb-4"
                disabled={!formData.fullName || !formData.email}
              >
                Get My Plan
              </Button>
            </Link>

            <div className="flex items-center justify-center text-sm text-green-600">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span>No spam. Just insights that grow your business.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
