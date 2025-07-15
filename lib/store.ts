import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface FormData {
  step1: {
    website: string
    businessName: string
  }
  step2: {
    product: string
  }
  step3: {
    target_locations: {
      country: string
      state: string
      city: string
      other: string
    }
  }
  step4: {
    competitors: string[]
  }
  step5: {
    goal: string
  }
  step6: {
    budget: string
  }
  finalForm: {
    name: string
    email: string
  }
}

interface FormStore {
  formData: FormData
  updateStep1: (data: FormData["step1"]) => void
  updateStep2: (data: FormData["step2"]) => void
  updateStep3: (data: FormData["step3"]) => void
  updateStep4: (data: FormData["step4"]) => void
  updateStep5: (data: FormData["step5"]) => void
  updateStep6: (data: FormData["step6"]) => void
  updateFinalForm: (data: FormData["finalForm"]) => void
  resetForm: () => void
  isStepComplete: (step: number) => boolean
}

const initialFormData: FormData = {
  step1: { website: "" , businessName: ""},
  step2: { product: "" },
  step3: {
    target_locations: {
      country: "United States",
      state: "Texas",
      city: "Dallas",
      other: "",
    },
  },
  step4: { competitors: [] },
  step5: { goal: "" },
  step6: { budget: "" },
  finalForm: { name: "", email: "" },
}

export const useFormStore = create<FormStore>()(
  persist(
    (set, get) => ({
      formData: initialFormData,

      updateStep1: (data) =>
        set((state) => ({
          formData: { ...state.formData, step1: data },
        })),

      updateStep2: (data) =>
        set((state) => ({
          formData: { ...state.formData, step2: data },
        })),

      updateStep3: (data) =>
        set((state) => ({
          formData: { ...state.formData, step3: data },
        })),

      updateStep4: (data) =>
        set((state) => ({
          formData: { ...state.formData, step4: data },
        })),

      updateStep5: (data) =>
        set((state) => ({
          formData: { ...state.formData, step5: data },
        })),

      updateStep6: (data) =>
        set((state) => ({
          formData: { ...state.formData, step6: data },
        })),

      updateFinalForm: (data) =>
        set((state) => ({
          formData: { ...state.formData, finalForm: data },
        })),

      resetForm: () => set({ formData: initialFormData }),

      isStepComplete: (step: number) => {
        const { formData } = get()
        switch (step) {
          case 1:
            return !!formData.step1.website
            
          case 2:
            return !!formData.step2.product
          case 3:
            return !!(
              formData.step3.target_locations.country ||
              formData.step3.target_locations.state ||
              formData.step3.target_locations.city
            )
          case 4:
            return formData.step4.competitors.length > 0
          case 5:
            return !!formData.step5.goal
          case 6:
            return !!formData.step6.budget
          default:
            return false
        }
      },
    }),
    {
      name: "marketing-form-storage",
    },
  ),
)
