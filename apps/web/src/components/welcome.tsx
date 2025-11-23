import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#22c55e] p-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center p-8 space-y-2">
          {/* Image placeholder */}
          <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Image Placeholder (PNG)</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-center">MINDGARDEN</h1>

          {/* Subtitle */}
          <h2 className="text-xl text-muted-foreground text-center">Your mind is a garden</h2>

          {/* Paragraph */}
          <p className="text-center text-muted-foreground">Lets cultivate it together</p>

          {/* Button */}
          <Button className="rounded-full px-8">Start your journey</Button>
        </CardContent>
      </Card>
    </main>
  )
}