import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, TrendingUp, Users, Search, MapPin, DollarSign, CheckCircle } from "lucide-react"

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-purple-600">
            We Ran the Data. Now Let's Decode It.
          </h1>
          <p className="text-base text-gray-600 mb-2">
            We crunched the data. Your website, your market, your competitors – we connected the dots.
          </p>
          <p className="text-base text-gray-600 mb-8">Here's the top-line insight.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-8">Free Preview Insights</h2>
        </div>

        {/* Insights Cards */}
        <div className="space-y-6 mb-12">
          {/* Website Analysis */}
          <Card className="border-0 shadow-sm rounded-2xl bg-white">
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <BarChart3 className="h-5 w-5 text-pink-500 mr-2" />
                <CardTitle className="text-lg text-pink-500">Website Analysis</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-2">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 mr-2">
                  📊
                </Badge>
                <span className="text-sm font-medium text-gray-700">453 visitors/month | Authority Score: 9</span>
              </div>
              <p className="text-sm text-gray-600">We also found 9 SEO issues, and your AI-readiness for SEO is low.</p>
            </CardContent>
          </Card>

          {/* Demand Analysis */}
          <Card className="border-0 shadow-sm rounded-2xl bg-white">
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                <CardTitle className="text-lg text-blue-500">Demand Analysis</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 mr-2">
                  📈
                </Badge>
                <span className="text-sm font-medium text-gray-700">
                  234K+ people/month are searching for services like "emergency lawyer"
                </span>
              </div>
              <p className="text-sm text-gray-600">— across Google, YouTube, Yelp, and more.</p>
            </CardContent>
          </Card>

          {/* Market Size */}
          <Card className="border-0 shadow-sm rounded-2xl bg-white">
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-500 mr-2" />
                <CardTitle className="text-lg text-purple-500">Market Size</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 mr-2">
                  👥
                </Badge>
                <span className="text-sm font-medium text-gray-700">
                  5M–6M people in your market are interested in legal services across Instagram, Facebook, and LinkedIn.
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Competitor Analysis */}
          <Card className="border-0 shadow-sm rounded-2xl bg-white">
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <Search className="h-5 w-5 text-orange-500 mr-2" />
                <CardTitle className="text-lg text-orange-500">Competitor Analysis</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 mr-2">
                    🎯
                  </Badge>
                  <span className="text-sm font-medium text-gray-700">
                    Top 3 channels they use to drive traffic: SEO, Google Ads, Social
                  </span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 mr-2">
                    💰
                  </Badge>
                  <span className="text-sm font-medium text-gray-700">
                    They're investing $5K/month on average to stay visible.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Journey */}
          <Card className="border-0 shadow-sm rounded-2xl bg-white">
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-500 mr-2" />
                <CardTitle className="text-lg text-green-500">Customer Journey</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="secondary" className="bg-green-100 text-green-700 mr-2">
                    🎯
                  </Badge>
                  <span className="text-sm font-medium text-gray-700">8 touchpoints in Customer Journey</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="bg-green-100 text-green-700 mr-2">
                    ⏱️
                  </Badge>
                  <span className="text-sm font-medium text-gray-700">
                    3 months to convert a stranger into a paying client.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Budget and Projections */}
          <Card className="border-0 shadow-sm rounded-2xl bg-white">
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                <CardTitle className="text-lg text-green-600">Budget and Projections</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-sm text-gray-700">You could get 100 leads for $3.4K–$6.8K.</p>
                <p className="text-sm text-gray-700">Your average cost per consult? Just $34</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Full Strategy CTA */}
        <Card className="border-0 shadow-lg rounded-3xl bg-gray-50 mb-8">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">🔥</span>
              <h3 className="text-xl font-semibold text-purple-600">Want the Full Strategy?</h3>
            </div>
            <p className="text-base text-gray-600 mb-2">What you've seen is just the surface.</p>
            <p className="text-base text-gray-600 mb-6">Here's what the full plan unlocks:</p>

            <div className="text-left space-y-3 mb-8">
              <h4 className="font-medium text-green-600 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                The Full Plan Reveals:
              </h4>
              <div className="space-y-2 text-sm text-gray-700 ml-6">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>In-depth SEO Audit - Get your site AI-ready — from search structure to authority gaps.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Market Demand Breakdown - Discover what your buyers are actually searching across Google, YouTube &
                    more.
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Audience Intelligence - Go beyond demographics — understand their behavior, urgency, and mindset.
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Customer Journey Mapping - Know every stage — from scroll to conversion — and where you lose them.
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Step-by-Step Growth Plan - No fluff. Just the exact moves to reach your goals — platform by
                    platform.
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Ad Copy & Content Angles That Convert - Based on what's worked across thousands of campaigns.
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Smart Budget Blueprint - See where to invest, what to skip, and how to scale without guesswork.
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-600 mb-6">
              <p>Built with BrainBox marketing intelligence. Tested across industries.</p>
              <p>Yours is ready — and built to move.</p>
            </div>

            <Link href="/builder/pricing">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-medium">
                Show Me My Full Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
