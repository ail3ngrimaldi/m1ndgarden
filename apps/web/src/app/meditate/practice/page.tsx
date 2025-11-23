"use client"

import { useRouter } from "next/navigation"
import { DuringPracticeScreen } from "@/components/during-practice-screen"

export default function PracticePage() {
  const router = useRouter()

  const handlePause = () => {
    // For now, just log pause action
    console.log("Practice paused")
  }

  const handleEndEarly = () => {
    router.push("/")
  }

  const handleComplete = () => {
    // For now, just log completion and navigate back to home
    console.log("Practice completed!")
    // You can add more logic here later (e.g., save completion, show success screen)
    router.push("/")
  }

  const handleBack = () => {
    router.push("/meditate")
  }

  return (
    <DuringPracticeScreen
      onPause={handlePause}
      onEndEarly={handleEndEarly}
      onComplete={handleComplete}
      onBack={handleBack}
      duration={60} // 1 minute
    />
  )
}
