import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, TrendingUp, Users, Star } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header Section */}
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-8 bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium"
          >
            ✨ DIY Marketing Strategy Builder
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ">
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              Build Your Marketing Plan That Actually Works
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-1xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get a custom marketing strategy in 2 minutes. No fluff, no generic advice.
            <br />
            Just data-driven insights that grow your business.
          </p>

          {/* CTA Button */}
          <Link href="/builder/step-1">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Building My Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          {/* Trust Indicator */}
          <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
            <Star className="h-4 w-4 text-orange-400 mr-1" />
            <span>Trusted by 2,847+ businesses • Average ROI: 340%</span>
          </div>
        </div>
      </section>

      {/* Hero Illustration */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <Image
              src="/hero-illustration.png"
              alt="DIY Marketing Strategy Builder Illustration"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">Why Our DIY Marketing Plans Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We analyze your specific situation and create a custom strategy based on real data, not generic templates.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Strategic Analysis */}
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Strategic Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deep dive into your market, competitors, and opportunities
                </p>
              </CardContent>
            </Card>

            {/* Growth Roadmap */}
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Growth Roadmap</h3>
                <p className="text-gray-600 leading-relaxed">Step-by-step plan to scale your business effectively</p>
              </CardContent>
            </Card>

            {/* Customer Insights */}
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Customer Insights</h3>
                <p className="text-gray-600 leading-relaxed">Understand your audience and optimize conversion paths</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Marketing Strategy?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who've transformed their growth with our DIY marketing plans.
          </p>
          <Link href="/builder/step-1">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Star className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
