"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ArrowLeft, Download } from "lucide-react"

export default function Step5Page() {
  const [formData, setFormData] = useState({
    startupCosts: "",
    monthlyRevenue: "",
    monthlyExpenses: "",
    breakEvenPoint: "",
    fundingNeeds: "",
    financialGoals: "",
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
            <div className="text-sm text-gray-600">Step 5 of 5</div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-purple-600">Financial Projections</span>
            <span className="text-sm text-gray-500">100% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Financial Projections</CardTitle>
            <CardDescription>
              Let's outline your financial expectations and requirements to complete your business plan.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="startupCosts">Startup Costs *</Label>
                <Input
                  id="startupCosts"
                  placeholder="$0.00"
                  value={formData.startupCosts}
                  onChange={(e) => handleInputChange("startupCosts", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyRevenue">Projected Monthly Revenue *</Label>
                <Input
                  id="monthlyRevenue"
                  placeholder="$0.00"
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleInputChange("monthlyRevenue", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyExpenses">Monthly Operating Expenses *</Label>
                <Input
                  id="monthlyExpenses"
                  placeholder="$0.00"
                  value={formData.monthlyExpenses}
                  onChange={(e) => handleInputChange("monthlyExpenses", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="breakEvenPoint">Break-even Timeline *</Label>
                <Input
                  id="breakEvenPoint"
                  placeholder="e.g., 12 months"
                  value={formData.breakEvenPoint}
                  onChange={(e) => handleInputChange("breakEvenPoint", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fundingNeeds">Funding Requirements</Label>
              <Textarea
                id="fundingNeeds"
                placeholder="Do you need external funding? If so, how much and what type? (Optional)"
                value={formData.fundingNeeds}
                onChange={(e) => handleInputChange("fundingNeeds", e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="financialGoals">Financial Goals *</Label>
              <Textarea
                id="financialGoals"
                placeholder="What are your financial objectives for the first year and beyond?"
                value={formData.financialGoals}
                onChange={(e) => handleInputChange("financialGoals", e.target.value)}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Completion Card */}
        <Card className="bg-green-50 border-green-200 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-800">🎉 Congratulations!</CardTitle>
            <CardDescription className="text-green-700">
              You've completed all the steps to create your business plan. Your comprehensive plan is ready for
              download.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Your Business Plan
            </Button>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/planner/step-4">
            <Button variant="outline" className="flex items-center bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous Step
            </Button>
          </Link>
          <Link href="/planner/summary">
            <Button
              className="bg-purple-600 hover:bg-purple-700 flex items-center"
              disabled={
                !formData.startupCosts ||
                !formData.monthlyRevenue ||
                !formData.monthlyExpenses ||
                !formData.breakEvenPoint ||
                !formData.financialGoals
              }
            >
              View Summary
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
