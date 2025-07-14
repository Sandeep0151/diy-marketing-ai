"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Search } from "lucide-react"

export default function Step4Page() {
  const [selectedCompetitors, setSelectedCompetitors] = useState<string[]>([])

  const competitors = [
    "RocketLawyer",
    "LegalZoom",
    "JustAnswer",
    "Lawyer.com",
    "UpCounsel",
    "Local competitors based on region/service",
  ]

  const handleCompetitorChange = (competitor: string, checked: boolean) => {
    if (checked) {
      setSelectedCompetitors([...selectedCompetitors, competitor])
    } else {
      setSelectedCompetitors(selectedCompetitors.filter((c) => c !== competitor))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Let's Craft Your DIY Marketing Plan
            </span>
          </h1>
          <p className="text-lg text-orange-500 font-medium mb-8">Built on Data from 1,000+ Businesses</p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Card className="border-0 shadow-sm rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Step 4 of 6</span>
              <span className="text-sm text-gray-500">67% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full"
                style={{ width: "67%" }}
              ></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="border-0 shadow-lg rounded-3xl mb-8">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-purple-600 mr-2" />
              <CardTitle className="text-xl text-purple-600">Who are your competitors?</CardTitle>
            </div>
            <CardDescription className="text-base text-gray-600 mb-4">
              We scanned your website and services – here are a few brands you're likely up against.
            </CardDescription>
            <p className="text-sm text-gray-500 flex items-center justify-center">
              <span className="mr-2">👀</span>
              Pick the ones you're watching, comparing, or secretly trying to outperform.
            </p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="space-y-4">
              {competitors.map((competitor) => (
                <div
                  key={competitor}
                  className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 bg-white"
                >
                  <Checkbox
                    id={competitor}
                    checked={selectedCompetitors.includes(competitor)}
                    onCheckedChange={(checked) => handleCompetitorChange(competitor, checked as boolean)}
                  />
                  <label htmlFor={competitor} className="text-base text-gray-700 cursor-pointer flex-1">
                    {competitor}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/builder/step-3">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
              Back
            </Button>
          </Link>
          <Link href="/builder/step-5">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
