"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Loader2 } from "lucide-react"

export default function ResultsPage() {
  const [marketingPlan, setMarketingPlan] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get the marketing plan response from localStorage
    const storedResponse = localStorage.getItem("marketing-plan-response")
    if (storedResponse) {
      try {
        const parsedResponse = JSON.parse(storedResponse)
        setMarketingPlan(parsedResponse)
      } catch (error) {
        console.error("Error parsing stored response:", error)
      }
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your marketing plan...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <section className="pt-10 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight text-purple-600">
            Your DIY Marketing Strategy Is Ready! 🎉
          </h1>
          <p className="text-sm text-gray-600 mb-2">
            We analyzed your business and created a custom marketing plan just for you.
          </p>
          <p className="text-sm text-gray-600 mb-6">Here's your personalized strategy:</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {marketingPlan ? (
          <div className="space-y-6">
            {/* Marketing Plan Content */}
            <Card className="border-0 shadow-lg rounded-3xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600 text-center">Your Custom Marketing Plan</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose prose-sm max-w-none">
                  <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                    {marketingPlan.marketing_plan ||
                      marketingPlan.strategy ||
                      "Your marketing plan will appear here..."}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-sm rounded-2xl bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-purple-600 mb-3">Download Your Plan</h3>
                  <p className="text-sm text-gray-600 mb-4">Get a PDF copy of your complete marketing strategy</p>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-4 py-2 rounded-full font-medium text-sm">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm rounded-2xl bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-green-600 mb-3">Get Expert Help</h3>
                  <p className="text-sm text-gray-600 mb-4">Need help implementing your strategy?</p>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full font-medium text-sm bg-transparent"
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <Card className="border-0 shadow-lg rounded-3xl bg-white">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">No Marketing Plan Found</h2>
                <p className="text-gray-600 mb-6">It looks like there was an issue generating your marketing plan.</p>
                <Link href="/builder/step-1">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium">
                    Start Over
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/">
            <Button variant="outline" className="px-6 py-2 rounded-full font-medium text-sm bg-transparent">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
