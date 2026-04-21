import { Check, Lock } from "lucide-react"
import ActiveCard from "./ActiveCard"
import ClosedStep from "./ClosedStep"

const rest = [
  { title: "Strengthen Concepts", desc: "Dive deeper into advanced topics to prepare for your board exams." },
  { title: "Score in Boards", desc: "Achieve target scores in preliminary and final board examinations." },
  { title: "PCM Stream Selection", desc: "Finalize stream choice based on aptitude and board results." },
]

export default function StepsList() {
  return (
    <div className="relative">

      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-[#DDDDDD] z-0" />

      <div className="flex gap-4 mb-5 relative">
        <div className="z-10 shrink-0 mt-1">
          <div className="w-8 h-8 rounded-full bg-[#1A9BA1] flex items-center justify-center">
            <Check size={14} color="white" strokeWidth={3} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <ActiveCard />
        </div>
      </div>

      {rest.map((s, i) => (
        <div key={i} className="flex gap-4 mb-4 relative">
          <div className="z-10 shrink-0 mt-1">
            <div className="w-8 h-8 rounded-full border-2 border-[#DDDDDD] bg-white flex items-center justify-center">
              <Lock size={13} className="text-[#AAAAAA]" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <ClosedStep title={s.title} desc={s.desc} />
          </div>
        </div>
      ))}

    </div>
  )
}
