import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Edit, Share, CheckCircle } from "lucide-react"

export default function SummaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              PlanCraft Ninja
            </Link>
            <div className="text-sm text-gray-600">Plan Complete</div>
          </div>
        </div>
      </header>

      {/* Success Banner */}
      <div className="bg-green-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Business Plan Complete!</h1>
          <p className="text-xl text-green-100">
            Your comprehensive business plan is ready. Here's what you've accomplished:
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Plan Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Your Business Plan Summary</CardTitle>
            <CardDescription>Review the key components of your business plan below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Business Overview</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Market Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Products & Services</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Marketing Strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Financial Projections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Executive Summary</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Download Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Get your complete business plan as a professional PDF document.
              </CardDescription>
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">Download PDF</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Edit className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Edit Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Make changes or updates to any section of your business plan.
              </CardDescription>
              <Link href="/planner/step-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Edit Plan
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Share className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Share Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Share your business plan with investors, partners, or advisors.
              </CardDescription>
              <Button variant="outline" className="w-full bg-transparent">
                Share Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">What's Next?</CardTitle>
            <CardDescription>Here are some recommended next steps to turn your plan into action:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 font-bold">1.</span>
                <span>Review your plan with mentors, advisors, or industry experts</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 font-bold">2.</span>
                <span>Begin implementing your marketing strategy</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 font-bold">3.</span>
                <span>Set up your business legally and financially</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 font-bold">4.</span>
                <span>Start building your minimum viable product or service</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 font-bold">5.</span>
                <span>Track your progress and update your plan regularly</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
