"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const moods = [
  { emoji: "😫", label: "Exhausted" },
  { emoji: "🥵", label: "Burned" },
  { emoji: "😢", label: "Sad" },
  { emoji: "🤔", label: "Thoughtful" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😊", label: "Happy" },
  { emoji: "😄", label: "Energetic" },
  { emoji: "🤩", label: "Excited" },
]

interface MoodSelectionScreenProps {
  onContinue: (mood: string) => void
  onCancel: () => void
}

export function MoodSelectionScreen({ onContinue, onCancel }: MoodSelectionScreenProps) {
  const [selectedMood, setSelectedMood] = useState<string>("Happy")

  const handleContinue = () => {
    onContinue(selectedMood)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Modal content */}
      <div className="max-w-md mx-auto px-6 pt-32 pb-12 flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-3xl p-8 shadow-2xl w-full relative">
          <Button
            onClick={onCancel}
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-[#525252] hover:text-[#000000] transition-colors h-8 w-8"
          >
            <X className="w-6 h-6" />
          </Button>

          <h2 className="text-2xl font-bold text-center mb-6 text-[#000000] pr-8">
            Hows your mental wellness right now?
          </h2>

          {/* Current mood display */}
          <div className="bg-[#ecfeff] border-2 border-[#06b6d4] rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">😊</span>
              <div>
                <p className="text-base font-semibold text-[#000000]">{selectedMood}</p>
                <p className="text-sm text-[#525252]">Current Mood</p>
              </div>
            </div>
          </div>

          {/* Mood grid */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {moods.map((mood) => (
              <Button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                variant="ghost"
                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                  selectedMood === mood.label
                    ? "border-[#06b6d4] bg-[#ecfeff]"
                    : "border-[#e9eaeb] bg-white hover:border-[#06b6d4]/50"
                }`}
              >
                <span className="text-3xl mb-1">{mood.emoji}</span>
                <span className="text-xs text-[#525252] text-center leading-tight">{mood.label}</span>
              </Button>
            ))}
          </div>

          <Button
            onClick={handleContinue}
            className="w-full h-14 rounded-full bg-[#06b6d4] hover:bg-[#0891b2] text-white font-semibold text-base mb-3 shadow-md transition-colors"
          >
            Continue →
          </Button>

          <Button
            onClick={onCancel}
            variant="ghost"
            className="w-full h-12 rounded-full text-[#525252] hover:text-[#000000] hover:bg-transparent font-medium"
          >
            Cancel
          </Button>
        </div>
      </div>

      {/* Home indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#000000] rounded-full opacity-80" />
    </div>
  )
}
