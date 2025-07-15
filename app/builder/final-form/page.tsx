"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Zap, CheckCircle, Loader2 } from "lucide-react"
import { useFormStore } from "@/lib/store"
import { submitMarketingPlan } from "@/lib/api"

export default function FinalFormPage() {
  const router = useRouter()
  const { formData, updateFinalForm } = useFormStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const finalFormData = formData.finalForm

  const handleInputChange = (field: string, value: string) => {
    updateFinalForm({
      ...finalFormData,
      [field]: value,
    })
  }

  const handleSubmit = async () => {
    const formData = useFormStore.getState().formData
    const result = await submitMarketingPlan(formData)
    if (!finalFormData.name || !finalFormData.email) {
      setError("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      // Prepare complete form data for API
      const completeFormData = {
        ...formData,
        finalForm: finalFormData,
        timestamp: new Date().toISOString(),
      }

      console.log("Submitting form data:", completeFormData)

      const response = await submitMarketingPlan(completeFormData)

      if (response.success) {
        // Store the response for the results page
        localStorage.setItem("marketing-plan-response", JSON.stringify(response.data))
        router.push("/builder/results")
      } else {
        setError(response.error || "Failed to generate marketing plan. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Cooking Up Your Plan ✨
          </span>
        </h1>

        <Card className="border-0 shadow-lg rounded-3xl mb-6 bg-white">
          <CardContent className="p-6">
            {/* Lightning Icon */}
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <Zap className="h-8 w-8 text-white" />
            </div>

            {/* Progress Bar */}
            <div className="mb-5">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full w-full"></div>
              </div>
            </div>

            <p className="text-base text-gray-600 mb-2">100% Complete</p>

            <div className="flex items-center justify-center mb-5">
              <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
              <h2 className="text-lg font-semibold text-purple-600">Your DIY Marketing Plan Is Ready</h2>
            </div>

            <p className="text-sm text-gray-600 mb-1">Built from real data. Tailored to your brand.</p>
            <p className="text-sm text-gray-600 mb-6">We'll send a copy straight to your inbox.</p>

            {/* Form */}
            <div className="space-y-3 mb-5">
              <div className="text-left">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={finalFormData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-1 text-sm py-2.5 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200"
                  disabled={isSubmitting}
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
                  value={finalFormData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1 text-sm py-2.5 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-3 rounded-xl font-medium text-base mb-3"
              disabled={!finalFormData.name || !finalFormData.email || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Your Plan...
                </>
              ) : (
                "Get My Plan"
              )}
            </Button>

            <div className="flex items-center justify-center text-xs text-green-600">
              <CheckCircle className="h-3 w-3 mr-1" />
              <span>No spam. Just insights that grow your business.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
