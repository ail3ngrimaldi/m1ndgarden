"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DuringPracticeScreenProps {
  onPause: () => void
  onEndEarly: () => void
  onComplete: () => void
  onBack: () => void
  duration?: number // in seconds
}

export function DuringPracticeScreen({
  onPause,
  onEndEarly,
  onComplete,
  onBack,
  duration = 60, // 1 minute default
}: DuringPracticeScreenProps) {
  const [timeRemaining, setTimeRemaining] = useState(duration)
  const [breathePhase, setBreathePhase] = useState<"in" | "out">("in")
  const [isPaused, setIsPaused] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          // Stop audio when meditation completes
          if (audioRef.current) {
            audioRef.current.pause()
          }
          onComplete()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isPaused, onComplete])

  useEffect(() => {
    if (isPaused) return

    // Breathing cycle: 4s in, 4s out
    const breatheInterval = setInterval(() => {
      setBreathePhase((prev) => (prev === "in" ? "out" : "in"))
    }, 4000)

    return () => clearInterval(breatheInterval)
  }, [isPaused])

  // Initialize audio on component mount
  useEffect(() => {
    const audioElement = audioRef.current
    if (audioElement) {
      // Set volume to 30% (soft background music)
      audioElement.volume = 0.3

      // Try to play audio (may be blocked by browser autoplay policy)
      audioElement.play().catch((error) => {
        console.log("Audio autoplay blocked by browser. Audio will start on user interaction.", error)
      })
    }
  }, [])

  // Cleanup audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handlePause = () => {
    setIsPaused(!isPaused)
    if (audioRef.current) {
      if (!isPaused) {
        audioRef.current.pause()
      } else {
        // Try to resume audio (handles autoplay policy)
        audioRef.current.play().catch((error) => {
          console.log("Audio play blocked by browser autoplay policy:", error)
        })
      }
    }
    onPause()
  }

  // Handle user interaction to start audio if autoplay was blocked
  const handleUserInteraction = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        console.log("Audio play blocked:", error)
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fae8ff] via-[#ecfccb] to-[#d9f99d] relative overflow-hidden flex flex-col">
      {/* Meditation Audio */}
      <audio
        ref={audioRef}
        autoPlay
        loop
        preload="auto"
        className="hidden"
        onError={(e) => console.log("Audio loading error:", e)}
        onLoadStart={() => console.log("Audio loading started")}
        onCanPlay={() => console.log("Audio can play")}
      >
        <source src="/meditation.mp3" type="audio/mpeg" />
      </audio>

      {/* Main content container */}
      <div className="relative z-10 max-w-md mx-auto px-4 py-6 flex-1 flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-lg font-bold text-center">Take a Moment for Yourself</h1>
        </div>

        {/* Breathing animation - centered */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-16" onClick={handleUserInteraction}>

          {/* Plant illustration */}
          <div className="relative mb-12">
            <img
              src="/plant-shape.svg"
              alt="Plant illustration"
              className={`w-72 h-72 ${!isPaused ? 'animate-breathe' : ''}`}
            />

            {/* Breathing ring animation */}
            <div
              className={`absolute inset-0 rounded-full border-4 border-white/40 ${!isPaused ? 'animate-breathing-ring' : ''}`}
            />
          </div>

          {/* Breathing text */}
          <p className={`text-2xl font-semibold text-[#1a1a1a] mb-8 ${!isPaused ? 'animate-fade-in' : ''}`}>
            {breathePhase === "in" ? "Breathe in..." : "Breathe out..."}
          </p>

          {/* Timer */}
          <div className="text-center">
            <div className="text-6xl font-bold text-[#1a1a1a] mb-2">{formatTime(timeRemaining)}</div>
            <p className="text-sm text-[#525252]">remaining</p>
          </div>
        </div>

        {/* Control buttons */}
        <div className="space-y-3 mb-6">
          <Button
            onClick={handlePause}
            className="w-full bg-[#06b6d4] text-white rounded-2xl py-4 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-[#0891b2] transition-colors"
          >
            {isPaused ? "Resume" : "Pause"} <ArrowRight className="w-5 h-5" />
          </Button>

          <Button
            onClick={onEndEarly}
            variant="ghost"
            className="w-full text-[#1a1a1a] py-3 font-medium hover:text-[#525252] transition-colors"
          >
            End Early
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e1e1e2] z-20">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-around">
            <Button variant="ghost" className="flex flex-col items-center gap-1 p-0">
              <svg
                className="w-6 h-6 text-[#9ea2ad]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span className="text-xs text-[#9ea2ad]">Garden</span>
            </Button>

            <Button variant="ghost" className="flex flex-col items-center gap-1 group p-0">
              <svg
                className="w-6 h-6 text-[#06b6d4]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 12v8H4v-8M12 16v-8m0 0L8 12m4-4l4 4M2 5h20" />
              </svg>
              <span className="text-xs font-medium text-[#06b6d4]">Rewards</span>
              <div className="w-12 h-0.5 bg-[#06b6d4] rounded-full" />
            </Button>

            <Button variant="ghost" className="flex flex-col items-center gap-1 p-0">
              <svg
                className="w-6 h-6 text-[#9ea2ad]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5H6.5A2.5 2.5 0 0 0 4 19.5zM20 17V5a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 5.5v9" />
              </svg>
              <span className="text-xs text-[#9ea2ad]">Journal</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
