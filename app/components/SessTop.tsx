import { BookMarked } from "lucide-react"

export default function SessTop() {
  return (
    <div className="mx-6 mt-6 mb-2">

      <div className="flex items-center gap-2 mb-1">
        <BookMarked size={22} className="text-[#1A9BA1]" strokeWidth={2} />
        <h1 className="text-2xl font-bold text-[#1C1C1C]">Sessions</h1>
      </div>

      <p className="text-sm text-[#888888]">
        Track your learning milestones and prepare for the PCM stream selection.
      </p>

    </div>
  )
}
