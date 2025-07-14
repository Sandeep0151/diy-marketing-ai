"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, MapPin } from "lucide-react"

export default function Step3Page() {
  const [locations, setLocations] = useState({
    country: "United States",
    state: "Texas",
    city: "Dallas",
    other: "",
  })

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
              <span className="text-sm font-medium text-gray-600">Step 3 of 6</span>
              <span className="text-sm text-gray-500">50% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full"
                style={{ width: "50%" }}
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
              <MapPin className="h-6 w-6 text-purple-600 mr-2" />
              <CardTitle className="text-xl text-purple-600">Where should we make noise?</CardTitle>
            </div>
            <CardDescription className="text-base text-gray-600">
              Based on your website analysis, we suggest these locations. Pick where your audience lives, shops, or
              scrolls.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="space-y-4">
              <Input
                placeholder="United States"
                value={locations.country}
                onChange={(e) => setLocations({ ...locations, country: e.target.value })}
                className="text-base py-3 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200"
              />
              <Input
                placeholder="Texas"
                value={locations.state}
                onChange={(e) => setLocations({ ...locations, state: e.target.value })}
                className="text-base py-3 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200"
              />
              <Input
                placeholder="Dallas"
                value={locations.city}
                onChange={(e) => setLocations({ ...locations, city: e.target.value })}
                className="text-base py-3 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200"
              />
              <Input
                placeholder="Something else"
                value={locations.other}
                onChange={(e) => setLocations({ ...locations, other: e.target.value })}
                className="text-base py-3 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200"
              />
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/builder/step-2">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
              Back
            </Button>
          </Link>
          <Link href="/builder/step-4">
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
