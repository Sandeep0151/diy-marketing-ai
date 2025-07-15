"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Globe } from "lucide-react"
import { useFormStore } from "@/lib/store"

export default function Step1Page() {
  const { formData, updateStep1, isStepComplete } = useFormStore()
  const { website, businessName } = formData.step1
  

  const handleSubmit = () => {
    updateStep1({ website , businessName})
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <section className="pt-10 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Let's Craft Your DIY Marketing Plan
            </span>
          </h1>
          <p className="text-base text-orange-500 font-medium mb-6">Built on Data from 1,000+ Businesses</p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Card className="border-0 shadow-sm rounded-2xl">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Step 1 of 6</span>
              <span className="text-sm text-gray-500">17% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full transition-all duration-300"
                style={{ width: "17%" }}
              ></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <Card className="border-0 shadow-lg rounded-3xl mb-6">
          <CardHeader className="text-center pb-3">
            <div className="flex items-center justify-center mb-3">
              <Globe className="h-5 w-5 text-purple-600 mr-2" />
              <CardTitle className="text-lg text-purple-600">What's your website?</CardTitle>
            </div>
            <CardDescription className="text-sm text-gray-600">
              Drop the link – we'll start our digital detective work there.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="space-y-2">
              <Label htmlFor="websiteUrl" className="text-sm font-medium text-gray-700">
                Website URL
              </Label>
              <Input
                id="websiteUrl"
                placeholder="https://yourwebsite.com"
                value={website}
                onChange={(e) => updateStep1({ website: e.target.value, businessName })}
                className="text-sm py-2.5 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200"
              />
            </div>
            <div className="space-y-2">
    <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
      Business Name
    </Label>
    <Input
      id="businessName"
      placeholder="Enter your business name"
      value={businessName}
      onChange={(e) => updateStep1({ website, businessName: e.target.value })}
      className="text-sm py-2.5 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200"
    />
  </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800 text-sm">
              Back
            </Button>
          </Link>
          <Link href="/builder/step-2">
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-2.5 rounded-full font-medium text-sm"
              disabled={!isStepComplete(1)}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
