import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Award, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              PlanCraft Ninja
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600">
                Home
              </Link>
              <Link href="/about" className="text-purple-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About PlanCraft Ninja</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're on a mission to democratize business planning and help entrepreneurs turn their ideas into successful
            ventures.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in making complex business planning simple and accessible to everyone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Supporting entrepreneurs and fostering a community of successful business builders.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Delivering high-quality tools and resources that drive real business results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Continuously improving our platform with cutting-edge features and insights.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                PlanCraft Ninja was born from the frustration of seeing too many great business ideas fail due to poor
                planning. Our founders, experienced entrepreneurs themselves, recognized that while business planning is
                crucial for success, the process was often overwhelming and inaccessible to many aspiring business
                owners.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We set out to create a platform that would guide entrepreneurs through the business planning process
                step-by-step, making it as simple as possible while ensuring no critical elements are missed. Today,
                thousands of entrepreneurs have used our platform to create comprehensive business plans and launch
                successful ventures.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our commitment remains the same: to empower every entrepreneur with the tools and knowledge they need to
                turn their vision into reality.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h3>
          <p className="text-xl text-purple-100 mb-8">
            Join the community of successful entrepreneurs who started with a plan.
          </p>
          <Link href="/planner/step-1">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Create Your Business Plan
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
