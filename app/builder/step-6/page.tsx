"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, DollarSign } from "lucide-react"

export default function Step6Page() {
  const [selectedBudget, setSelectedBudget] = useState("")

  const budgetOptions = [
    { label: "💚 $500–$1,000", value: "500-1000" },
    { label: "👑 $1,000–$3,000", value: "1000-3000" },
    { label: "🏢 $3,000–$10,000", value: "3000-10000" },
    { label: "🚀 $10,000+", value: "10000+" },
    { label: "❓ Not sure yet", value: "not-sure" },
  ]

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
              <span className="text-sm font-medium text-gray-600">Step 6 of 6</span>
              <span className="text-sm text-gray-500">100% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full"
                style={{ width: "100%" }}
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
              <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
              <CardTitle className="text-xl text-purple-600">What's your monthly ad budget?</CardTitle>
            </div>
            <CardDescription className="text-base text-gray-600">
              We ask so we don't recommend Ferraris when you're on a bicycle budget. But hey – both can win races.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {budgetOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedBudget(option.value)}
                  className={`p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                    selectedBudget === option.value
                      ? "border-purple-300 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <span className="text-base text-gray-700">{option.label}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/builder/step-5">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
              Back
            </Button>
          </Link>
          <Link href="/builder/processing">
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium"
              disabled={!selectedBudget}
            >
              Generate Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
