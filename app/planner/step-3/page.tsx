"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ArrowLeft, Plus, X } from "lucide-react"

export default function Step3Page() {
  const [products, setProducts] = useState([{ name: "", description: "", price: "" }])

  const addProduct = () => {
    setProducts([...products, { name: "", description: "", price: "" }])
  }

  const removeProduct = (index: number) => {
    if (products.length > 1) {
      setProducts(products.filter((_, i) => i !== index))
    }
  }

  const updateProduct = (index: number, field: string, value: string) => {
    const updated = products.map((product, i) => (i === index ? { ...product, [field]: value } : product))
    setProducts(updated)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              PlanCraft Ninja
            </Link>
            <div className="text-sm text-gray-600">Step 3 of 5</div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-purple-600">Products & Services</span>
            <span className="text-sm text-gray-500">60% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Products & Services</CardTitle>
            <CardDescription>
              Detail what you're offering to your customers. You can add multiple products or services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {products.map((product, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Product/Service #{index + 1}</h3>
                  {products.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeProduct(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`product-name-${index}`}>Name *</Label>
                    <Input
                      id={`product-name-${index}`}
                      placeholder="Product/Service name"
                      value={product.name}
                      onChange={(e) => updateProduct(index, "name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`product-price-${index}`}>Price</Label>
                    <Input
                      id={`product-price-${index}`}
                      placeholder="$0.00"
                      value={product.price}
                      onChange={(e) => updateProduct(index, "price", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`product-description-${index}`}>Description *</Label>
                  <Textarea
                    id={`product-description-${index}`}
                    placeholder="Describe this product or service in detail"
                    value={product.description}
                    onChange={(e) => updateProduct(index, "description", e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              onClick={addProduct}
              className="w-full flex items-center justify-center bg-transparent"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Another Product/Service
            </Button>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/planner/step-2">
            <Button variant="outline" className="flex items-center bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous Step
            </Button>
          </Link>
          <Link href="/planner/step-4">
            <Button
              className="bg-purple-600 hover:bg-purple-700 flex items-center"
              disabled={!products.every((p) => p.name && p.description)}
            >
              Next: Marketing Strategy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
