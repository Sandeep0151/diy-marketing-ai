"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Target } from "lucide-react"
import { useFormStore } from "@/lib/store"

export default function Step5Page() {
  const { formData, updateStep5, isStepComplete } = useFormStore()
  const selectedChallenge = formData.step5.goal

  const challenges = [
    "I want people to know we exist",
    "I want more leads",
    "We get traffic but no one contacts us",
    "We get leads but no one buys",
    "Something else",
  ]

  const handleChallengeSelect = (challenge: string) => {
    updateStep5({ goal: challenge })
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
              <span className="text-sm font-medium text-gray-600">Step 5 of 6</span>
              <span className="text-sm text-gray-500">83% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full transition-all duration-300"
                style={{ width: "83%" }}
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
              <Target className="h-5 w-5 text-purple-600 mr-2" />
              <CardTitle className="text-lg text-purple-600">
                What's Your Biggest Marketing Challenge Right Now?
              </CardTitle>
            </div>
            <CardDescription className="text-sm text-gray-600">
              Let's focus on what matters most. What's the real challenge you want solved?
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="space-y-2">
              {challenges.map((challenge) => (
                <button
                  key={challenge}
                  onClick={() => handleChallengeSelect(challenge)}
                  className={`w-full p-3 text-left rounded-xl border-2 transition-all duration-200 ${
                    selectedChallenge === challenge
                      ? "border-purple-300 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <span className="text-sm text-gray-700">{challenge}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/builder/step-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800 text-sm">
              Back
            </Button>
          </Link>
          <Link href="/builder/step-6">
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-2.5 rounded-full font-medium text-sm"
              disabled={!isStepComplete(5)}
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
