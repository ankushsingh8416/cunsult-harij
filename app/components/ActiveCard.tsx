"use client"

import { Check, Lock, Clock } from "lucide-react"

export default function ActiveCard() {
  return (
    <div className="border-2 border-[#1A9BA1] rounded-2xl overflow-hidden bg-white">

      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-lg font-bold text-[#1C1C1C]">Build Basics</h2>
        <div className="flex items-center gap-1.5 border border-[#1A9BA1] rounded-full px-3 py-1">
          <Clock size={13} className="text-[#1A9BA1]" />
          <span className="text-xs font-semibold text-[#1A9BA1]">In Progress</span>
        </div>
      </div>

      <p className="text-sm text-[#888888] px-5 -mt-2 pb-4">
        You&apos;ll built a strong foundation in foundational math and science principles.
      </p>

      <div className="px-5 pb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-[#888888]">3 of 6 tasks completed</span>
          <span className="text-xs font-bold text-[#1A9BA1]">60%</span>
        </div>
        <div className="w-full h-2 bg-[#E0F4F4] rounded-full overflow-hidden">
          <div className="h-full w-[60%] bg-[#1A9BA1] rounded-full" />
        </div>
      </div>

      <div className="flex items-center gap-3 px-5 py-3.5 bg-[#F7F7F7] border-t border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] border-[1.5px] border-[#DDDDDD] bg-[#F0F0F0] shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-medium text-[#BBBBBB] blur-text select-none">Study Motion and Energy Concepts</p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-orange blur-tag select-none">Science</span>
        </div>
        <Lock size={15} color="#AAAAAA" className="shrink-0" />
        <button className="text-xs text-[#AAAAAA] border border-[#DDDDDD] rounded-full px-3 py-1 bg-white cursor-not-allowed">
          Start
        </button>
      </div>

      <div className="flex items-center gap-3 px-5 py-3.5 bg-[#F7F7F7] border-t border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] border-[1.5px] border-[#DDDDDD] bg-[#F0F0F0] shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-medium text-[#BBBBBB] blur-text select-none">Practice Algebra Problems Daily</p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-red blur-tag select-none">Math · 5 videos</span>
        </div>
        <Lock size={15} color="#AAAAAA" className="shrink-0" />
        <button className="text-xs text-[#AAAAAA] border border-[#DDDDDD] rounded-full px-3 py-1 bg-white cursor-not-allowed">
          Start
        </button>
      </div>

      <div className="flex items-center gap-3 px-5 py-3.5 bg-white border-t border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] border-[1.5px] border-[#CCCCCC] bg-white shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-medium text-[#2C2C2C]">Study Motion and Energy Concepts</p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-orange">Science</span>
        </div>
        <button className="text-sm font-semibold text-[#1A9BA1] whitespace-nowrap">
          Continue
        </button>
      </div>

      <div className="flex items-center gap-3 px-5 py-3.5 bg-white border-t border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] bg-[#4ABFAA] flex items-center justify-center shrink-0">
          <Check size={11} color="white" strokeWidth={3} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-[#AAAAAA] line-through">Solve 20 Maths Question Daily</p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-green">Maths</span>
        </div>
        <div className="relative w-12 h-12 shrink-0">
          <svg viewBox="0 0 44 44" className="w-full h-full -rotate-90">
            <circle cx="22" cy="22" r="18" fill="none" stroke="#E0F4F4" strokeWidth="3.5" />
            <circle cx="22" cy="22" r="18" fill="none" stroke="#1A9BA1"
              strokeWidth="3.5" strokeDasharray="110.8 113.1" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold text-[#1A9BA1] leading-none">98%</span>
            <span className="text-[8px] text-[#888888] leading-none mt-[1px]">Score</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 px-5 py-3.5 bg-white border-t border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] bg-[#4ABFAA] flex items-center justify-center shrink-0">
          <Check size={11} color="white" strokeWidth={3} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-[#AAAAAA] line-through">Watch a Science Concept Video</p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-pink">Video • 10 Mins</span>
        </div>
        <button className="text-xs text-[#888888] border border-[#DDDDDD] rounded-full px-3 py-1 bg-white">
          Completed
        </button>
      </div>

    </div>
  )
}
