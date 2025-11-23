"use client"

import { useRouter } from "next/navigation"
import { PrePracticeScreen } from "@/components/pre-practice-screen"

export default function MeditatePage() {
  const router = useRouter()

  const handleStartPractice = () => {
    // Navigate to the active practice screen
    router.push("/meditate/practice")
  }

  const handleMaybeLater = () => {
    router.push("/")
  }

  const handleBack = () => {
    router.push("/")
  }

  return (
    <PrePracticeScreen
      onStartPractice={handleStartPractice}
      onMaybeLater={handleMaybeLater}
      onBack={handleBack}
    />
  )
}
