import { FormData } from './store'  // adjust path if needed

export const transformFormDataForBackend = (formData: FormData) => {
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
    ].filter((loc) => loc && loc.trim() !== ""),  // removes empty strings
    competitors: step4.competitors,
    goal: step5.goal,
    budget: step6.budget,
    name: finalForm.name,
    email: finalForm.email,
    phone: null  // Optional: update if you collect phone in form
  }
}
