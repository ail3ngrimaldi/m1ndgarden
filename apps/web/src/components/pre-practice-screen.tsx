"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PrePracticeScreenProps {
  onStartPractice: () => void
  onMaybeLater: () => void
  onBack: () => void
}

export function PrePracticeScreen({ onStartPractice, onMaybeLater, onBack }: PrePracticeScreenProps) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Main content container */}
      <div className="relative z-10 max-w-md mx-auto px-4 py-6 pb-24">

        {/* Header */}
        <div className="flex items-center mb-8">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold flex-1 text-center -ml-10">Morning Meditation</h1>
        </div>

        {/* Duration badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#d946ef] text-white px-4 py-2 rounded-lg text-sm font-semibold">1 minute • Guided</div>
        </div>

        {/* Plant illustration */}
        <div className="flex justify-center mb-8">
          <img
            src="/plant-shape.svg"
            alt="Plant illustration"
            className="w-64 h-64"
          />
        </div>

        {/* Benefits section */}
        <div className="bg-gradient-to-r from-[#fae8ff] via-[#ecfccb] to-[#d9f99d] rounded-3xl p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">Benefits</h3>
          <ul className="space-y-2 text-[#1a1a1a]">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Reduces anxiety</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Improves focus</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Builds emotional awareness</span>
            </li>
          </ul>
        </div>

        {/* Start button */}
        <Button
          onClick={onStartPractice}
          className="w-full bg-[#06b6d4] text-white rounded-2xl py-4 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-[#0891b2] transition-colors mb-3"
        >
          Start Practice <ArrowRight className="w-5 h-5" />
        </Button>

        {/* Maybe Later link */}
        <Button
          onClick={onMaybeLater}
          variant="ghost"
          className="w-full text-[#1a1a1a] py-3 font-medium hover:text-[#525252] transition-colors"
        >
          Maybe Later
        </Button>
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
