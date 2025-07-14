"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function Step4Page() {
  const [formData, setFormData] = useState({
    marketingBudget: "",
    marketingGoals: "",
    marketingStrategy: "",
  })

  const [marketingChannels, setMarketingChannels] = useState({
    socialMedia: false,
    emailMarketing: false,
    contentMarketing: false,
    paidAdvertising: false,
    seo: false,
    networking: false,
    partnerships: false,
    other: false,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleChannelChange = (channel: string, checked: boolean) => {
    setMarketingChannels((prev) => ({ ...prev, [channel]: checked }))
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
            <div className="text-sm text-gray-600">Step 4 of 5</div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-purple-600">Marketing Strategy</span>
            <span className="text-sm text-gray-500">80% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Marketing Strategy</CardTitle>
            <CardDescription>
              How will you reach and attract your target customers? Let's plan your marketing approach.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="marketingGoals">Marketing Goals *</Label>
              <Textarea
                id="marketingGoals"
                placeholder="What are your main marketing objectives? (e.g., brand awareness, lead generation, sales)"
                value={formData.marketingGoals}
                onChange={(e) => handleInputChange("marketingGoals", e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <Label>Marketing Channels *</Label>
              <p className="text-sm text-gray-600">Select all channels you plan to use:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(marketingChannels).map(([channel, checked]) => (
                  <div key={channel} className="flex items-center space-x-2">
                    <Checkbox
                      id={channel}
                      checked={checked}
                      onCheckedChange={(checked) => handleChannelChange(channel, checked as boolean)}
                    />
                    <Label htmlFor={channel} className="capitalize">
                      {channel.replace(/([A-Z])/g, " $1").trim()}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="marketingStrategy">Marketing Strategy Details *</Label>
              <Textarea
                id="marketingStrategy"
                placeholder="Describe your detailed marketing strategy and tactics"
                value={formData.marketingStrategy}
                onChange={(e) => handleInputChange("marketingStrategy", e.target.value)}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="marketingBudget">Monthly Marketing Budget</Label>
              <Input
                id="marketingBudget"
                placeholder="$0.00"
                value={formData.marketingBudget}
                onChange={(e) => handleInputChange("marketingBudget", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/planner/step-3">
            <Button variant="outline" className="flex items-center bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous Step
            </Button>
          </Link>
          <Link href="/planner/step-5">
            <Button
              className="bg-purple-600 hover:bg-purple-700 flex items-center"
              disabled={
                !formData.marketingGoals ||
                !formData.marketingStrategy ||
                !Object.values(marketingChannels).some(Boolean)
              }
            >
              Next: Financial Projections
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
