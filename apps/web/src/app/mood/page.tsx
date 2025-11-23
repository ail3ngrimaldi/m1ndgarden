"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MoodSelectionScreen } from "@/components/mood-selection-screen"
import { FocusAreaScreen } from "@/components/focus-area-screen"
import { HomeScreen } from "@/components/home-screen"

export default function MoodPage() {
  const router = useRouter()
  const [currentScreen, setCurrentScreen] = useState<"mood" | "focus" | "home">("mood")
  const [selectedMood, setSelectedMood] = useState<string>("")
  const [selectedArea, setSelectedArea] = useState<string>("")

  const handleMoodContinue = (mood: string) => {
    setSelectedMood(mood)
    setCurrentScreen("focus")
  }

  const handleFocusContinue = (area: string) => {
    setSelectedArea(area)
    setCurrentScreen("home")
  }

  const handleHomeBack = () => {
    router.push("/")
  }

  const handleCancel = () => {
    if (currentScreen === "home") {
      setCurrentScreen("focus")
    } else if (currentScreen === "focus") {
      setCurrentScreen("mood")
    } else {
      router.push("/")
    }
  }

  if (currentScreen === "home") {
    return <HomeScreen onBack={handleHomeBack} level={1} xp={0} completedPractices={[]} />
  }

  if (currentScreen === "focus") {
    return <FocusAreaScreen onContinue={handleFocusContinue} onCancel={handleCancel} />
  }

  return <MoodSelectionScreen onContinue={handleMoodContinue} onCancel={handleCancel} />
}
