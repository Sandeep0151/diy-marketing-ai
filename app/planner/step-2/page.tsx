"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function Step2Page() {
  const [formData, setFormData] = useState({
    marketSize: "",
    competitors: "",
    competitiveAdvantage: "",
    marketTrends: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              PlanCraft Ninja
            </Link>
            <div className="text-sm text-gray-600">Step 2 of 5</div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-purple-600">Market Analysis</span>
            <span className="text-sm text-gray-500">40% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "40%" }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Market Analysis</CardTitle>
            <CardDescription>
              Understanding your market is crucial for success. Let's analyze your competitive landscape and
              opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="marketSize">Market Size & Opportunity *</Label>
              <Textarea
                id="marketSize"
                placeholder="Describe the size of your target market and the opportunity you see"
                value={formData.marketSize}
                onChange={(e) => handleInputChange("marketSize", e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="competitors">Main Competitors *</Label>
              <Textarea
                id="competitors"
                placeholder="List your main competitors and what they offer"
                value={formData.competitors}
                onChange={(e) => handleInputChange("competitors", e.target.value)}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="competitiveAdvantage">Your Competitive Advantage *</Label>
              <Textarea
                id="competitiveAdvantage"
                placeholder="What makes your business different and better than competitors?"
                value={formData.competitiveAdvantage}
                onChange={(e) => handleInputChange("competitiveAdvantage", e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="marketTrends">Market Trends</Label>
              <Textarea
                id="marketTrends"
                placeholder="What trends are affecting your industry? (Optional)"
                value={formData.marketTrends}
                onChange={(e) => handleInputChange("marketTrends", e.target.value)}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/planner/step-1">
            <Button variant="outline" className="flex items-center bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous Step
            </Button>
          </Link>
          <Link href="/planner/step-3">
            <Button
              className="bg-purple-600 hover:bg-purple-700 flex items-center"
              disabled={!formData.marketSize || !formData.competitors || !formData.competitiveAdvantage}
            >
              Next: Products & Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
