"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Circle, CheckCircle2 } from "lucide-react"

const focusAreas = [
  {
    id: "mind",
    label: "Mind",
    subtitle: "(feeling overwhelmed)",
  },
  {
    id: "body",
    label: "Body",
    subtitle: "(low energy/sedentary)",
  },
  {
    id: "rest",
    label: "Rest",
    subtitle: "(poor sleep/exhausted)",
  },
  {
    id: "connect",
    label: "Connect",
    subtitle: "(lonely/isolated)",
  },
]

interface FocusAreaScreenProps {
  onContinue: (area: string) => void
  onCancel: () => void
}

export function FocusAreaScreen({ onContinue, onCancel }: FocusAreaScreenProps) {
  const [selectedArea, setSelectedArea] = useState<string>("")

  const handleContinue = () => {
    if (selectedArea) {
      onContinue(selectedArea)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Modal content */}
      <div className="max-w-md mx-auto px-6 pt-32 pb-12 flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-3xl p-8 shadow-2xl w-full relative">
          <button
            onClick={onCancel}
            className="absolute top-6 right-6 text-[#525252] hover:text-[#000000] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-bold text-center mb-8 text-[#000000] pr-8">Which area needs most attention?</h2>

          {/* Focus areas list */}
          <div className="space-y-3 mb-8">
            {focusAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left ${
                  selectedArea === area.id
                    ? "border-[#06b6d4] bg-[#ecfeff]"
                    : "border-[#e9eaeb] bg-white hover:border-[#06b6d4]/50"
                }`}
              >
                {selectedArea === area.id ? (
                  <CheckCircle2 className="w-6 h-6 text-[#06b6d4] flex-shrink-0" />
                ) : (
                  <Circle className="w-6 h-6 text-[#525252] flex-shrink-0" />
                )}
                <div className="flex-1">
                  <span className="text-base font-semibold text-[#000000]">{area.label}</span>
                  <span className="text-sm text-[#525252] ml-1">{area.subtitle}</span>
                </div>
              </button>
            ))}
          </div>

          <Button
            onClick={handleContinue}
            disabled={!selectedArea}
            className="w-full h-14 rounded-full bg-[#06b6d4] hover:bg-[#0891b2] text-white font-semibold text-base mb-3 shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
