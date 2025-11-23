"use client"

import { ArrowLeft, ArrowRight, Brain, Moon, User, Heart } from "lucide-react"
import Image from "next/image"

interface HomeScreenProps {
  onPracticeClick?: () => void
  level?: number
  xp?: number
  completedPractices?: string[]
}

export function HomeScreen({ onPracticeClick, level = 1, xp = 0, completedPractices = [] }: HomeScreenProps) {
  const plantImage = "/garden1.jpg"

  const isMeditationCompleted = completedPractices.includes("5-minute morning meditation")

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Main content container */}
      <div className="relative z-10 max-w-md mx-auto px-4 py-6 pb-24">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold tracking-wider font-display">
            MINDGARDEN
          </h1>
          <div className="w-10" />
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold leading-tight text-[#1a1a1a]">
            Grow your plant
            <br />
            with healthy actions
          </h2>
        </div>

        {/* Plant illustration card */}
        <div className="bg-white rounded-3xl p-6 mb-4 relative shadow-lg">
          <div className="relative aspect-square mb-4">
            <Image
              src={plantImage || "/garden1.jpg"}
              alt="garden"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-8 right-8 bg-[#ecfccb] text-[#129c52] px-3 py-1 rounded-full text-sm font-medium">
            Lotus Sprout
          </div>
        </div>

        {/* Garden Level */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-[#1a1a1a]">Garden Level</span>
            <span className="text-[#9ea2ad]">{xp}/100XP</span>
          </div>
          {xp > 0 && (
            <div className="w-full bg-[#e5e7eb] rounded-full h-2">
              <div className="bg-[#06b6d4] h-2 rounded-full transition-all duration-500" style={{ width: `${xp}%` }} />
            </div>
          )}
        </div>

        {/* Garden suggests section */}
        <div className="bg-[#ecfccb] rounded-3xl p-6 mb-4 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Your garden suggests</h3>
          <p className="text-[#1a1a1a] mb-6 leading-relaxed">
            Based on how you're feeling today, your garden has some personalized suggestions to help you flourish:
          </p>
          <div className="space-y-3">
            <button
              onClick={onPracticeClick}
              className="w-full bg-white rounded-2xl p-4 flex items-center justify-between hover:bg-[#f0fdf4] transition-colors"
              disabled={isMeditationCompleted}
            >
              <span className={`font-medium text-[#1a1a1a] ${isMeditationCompleted ? "line-through opacity-60" : ""}`}>
                5-minute morning meditation
              </span>
              <ArrowRight className="w-5 h-5 text-[#1a1a1a]" />
            </button>
            <button className="w-full bg-white rounded-2xl p-4 flex items-center justify-between hover:bg-[#f0fdf4] transition-colors">
              <span className="font-medium text-[#1a1a1a]">Tackle a creative project</span>
              <ArrowRight className="w-5 h-5 text-[#1a1a1a]" />
            </button>
          </div>
        </div>

        {/* My garden section */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">My garden</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="border-2 border-[#06b6d4] rounded-2xl p-6 flex flex-col items-start gap-4 hover:bg-[#ecfccb] transition-colors">
              <Brain className="w-8 h-8 text-[#06b6d4]" strokeWidth={1.5} />
              <span className="font-semibold text-[#1a1a1a] flex items-center gap-1">
                Mind <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button className="border-2 border-[#06b6d4] rounded-2xl p-6 flex flex-col items-start gap-4 hover:bg-[#ecfccb] transition-colors">
              <User className="w-8 h-8 text-[#06b6d4]" strokeWidth={1.5} />
              <span className="font-semibold text-[#1a1a1a] flex items-center gap-1">
                Body <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button className="border-2 border-[#06b6d4] rounded-2xl p-6 flex flex-col items-start gap-4 hover:bg-[#ecfccb] transition-colors">
              <Moon className="w-8 h-8 text-[#06b6d4]" strokeWidth={1.5} />
              <span className="font-semibold text-[#1a1a1a] flex items-center gap-1">
                Rest <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button className="border-2 border-[#06b6d4] rounded-2xl p-6 flex flex-col items-start gap-4 hover:bg-[#ecfccb] transition-colors">
              <Heart className="w-8 h-8 text-[#06b6d4]" strokeWidth={1.5} />
              <span className="font-semibold text-[#1a1a1a] flex items-center gap-1">
                Connect <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e1e1e2] z-20">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center gap-1 group">
              <svg
                className="w-6 h-6 text-[#06b6d4]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span className="text-xs font-medium text-[#06b6d4]">Home</span>
              <div className="w-12 h-0.5 bg-[#06b6d4] rounded-full" />
            </button>

            <button className="flex flex-col items-center gap-1">
              <svg
                className="w-6 h-6 text-[#9ea2ad]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 12v8H4v-8M12 16v-8m0 0L8 12m4-4l4 4M2 5h20" />
              </svg>
              <span className="text-xs text-[#9ea2ad]">Rewards</span>
            </button>

            <button className="flex flex-col items-center gap-1">
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
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
