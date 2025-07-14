import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Zap, Users, Search, MapPin, DollarSign, Shield, Clock } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              You're One Click Away From Strategy That Actually Works
            </span>
          </h1>
          <p className="text-base text-gray-600 mb-8">Turn those insights into a complete marketing playbook</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Pricing Card */}
        <Card className="border-0 shadow-xl rounded-3xl bg-white mb-8">
          <CardContent className="p-8">
            {/* Limited Time Offer Badge */}
            <div className="text-center mb-6">
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm font-bold rounded-full">
                LIMITED TIME OFFER
              </Badge>
            </div>

            {/* Pricing Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Complete Marketing Strategy</h2>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-gray-900">$97</span>
                <span className="text-xl text-gray-500 line-through ml-3">$297</span>
                <Badge className="bg-red-500 text-white ml-3 px-2 py-1 text-sm font-bold">67% OFF</Badge>
              </div>
            </div>

            {/* What You Get */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What You Get:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Full SEO & Ads Diagnosis</h4>
                    <p className="text-sm text-gray-600">
                      Complete audit of your current digital presence with actionable recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Demand Map & Keyword Breakdown</h4>
                    <p className="text-sm text-gray-600">
                      Detailed analysis of search demand and keyword opportunities in your market
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Buyer Persona Blueprint + Platform Targeting</h4>
                    <p className="text-sm text-gray-600">
                      Deep-dive into your ideal customers and where to find them online
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Search className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Competitor Deep Dive</h4>
                    <p className="text-sm text-gray-600">
                      Strategic analysis of what your competitors are doing right (and wrong)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Conversion Journey Map</h4>
                    <p className="text-sm text-gray-600">
                      Step-by-step customer journey with optimization points identified
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Budget Simulator for Your Exact Goal</h4>
                    <p className="text-sm text-gray-600">
                      Custom budget allocation and ROI projections based on your specific objectives
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plus These Bonuses */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-purple-600 mb-4">Plus These Bonuses:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-700">30-day email support for implementation questions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-700">Access to our private marketing community</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-700">Monthly strategy update sessions (optional)</span>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-8">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>2,847 businesses have used our strategies this month</span>
                </div>
              </div>
              <div className="flex items-center justify-center mt-2">
                <Clock className="h-4 w-4 mr-1 text-green-600" />
                <span className="text-sm text-gray-600">Average time to see results: 14 days</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-6">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-4 rounded-xl font-medium text-lg">
                Unlock My Marketing Plan →
              </Button>
            </div>

            {/* Guarantee */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-sm text-gray-600">One-time access. Zero fluff. Pure strategy.</span>
              </div>
              <Link href="/builder/results" className="text-sm text-purple-600 hover:text-purple-700">
                ← Back to Preview
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Money Back Guarantee */}
        <Card className="border-0 shadow-sm rounded-2xl bg-green-50 border-green-200 mb-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-green-800 mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-sm text-green-700">
              If you don't see actionable insights that could grow your business, we'll refund every penny.
            </p>
          </CardContent>
        </Card>

        {/* Urgency Banner */}
        <Card className="border-0 shadow-sm rounded-2xl bg-orange-50 border-orange-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center">
              <Clock className="h-4 w-4 text-orange-600 mr-2" />
              <span className="text-sm font-medium text-orange-800">
                This offer expires in 24 hours or when we reach 100 new members (currently at 87)
              </span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
