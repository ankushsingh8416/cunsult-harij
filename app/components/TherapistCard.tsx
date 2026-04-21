import { Sparkles, ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export default function TherapistCard() {
  return (
    <div className="rounded-2xl p-5 recommend border border-[#D1FAE5]">

      <div className="flex items-center gap-1.5 mb-3">
        <Sparkles size={15} className="text-[#10B981]" />
        <span className="font-bold text-[#10B981] text-sm">Special Recommendation</span>
      </div>

      <h4 className="text-base font-bold text-[#1C1C1C] mb-1">Need Help Planning?</h4>

      <p className="text-sm text-[#666666] mb-4">
        Discuss your current progress and board preparation strategy.
      </p>

      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="flex flex-col items-center text-center">

          <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-[#E8E8E8]">
            <Image
              src="/assets/treands/counselor.png"
              alt=""
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="font-bold text-[#1C1C1C] text-sm">Mukund Tyagi</p>
          <p className="text-xs text-[#888888] mt-0.5 mb-2">(Academic Planner & Counsellor)</p>

          <div className="flex items-center gap-1">
            <span className="text-xs text-[#888888]">Rating</span>
            <Star size={13} color="#F59E0B" fill="#F59E0B" />
            <span className="text-sm font-bold text-[#F59E0B]">4.2</span>
          </div>

        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-[#10B981] text-white text-sm font-bold py-3 rounded-xl cursor-pointer">
        Book a Session
        <ArrowRight size={15} color="white" strokeWidth={2.5} />
      </button>

    </div>
  )
}
