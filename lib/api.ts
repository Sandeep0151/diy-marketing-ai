const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"

export interface ApiResponse {
  success: boolean
  data?: any
  message?: string
  error?: string
}

function transformFormData(formData: any) {
  const {
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    finalForm,
  } = formData

  return {
    website: step1.website,
    product: step2.product,
    target_locations: [
      step3.target_locations.country,
      step3.target_locations.state,
      step3.target_locations.city,
      step3.target_locations.other,
    ].filter((loc) => loc && loc.trim() !== ""),
    competitors: step4.competitors,
    goal: step5.goal,
    budget: step6.budget,
    name: finalForm.name,
    email: finalForm.email,
    phone: null // Update if phone is part of your UI
  }
}

export async function submitMarketingPlan(formData: any): Promise<ApiResponse> {
  try {
    const transformedData = transformFormData(formData)

    const response = await fetch(`${API_BASE_URL}/form/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transformedData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return {
      success: true,
      data: data,
    }
  } catch (error) {
    console.error("API Error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}
