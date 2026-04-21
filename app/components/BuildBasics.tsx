"use client";

import { Check, Lock } from "lucide-react";


export default function BuildBasics() {
  return (
    <div className="w-full bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden font-sans">


      <div className="flex items-center gap-2 px-4 py-[14px] border-b border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] bg-[#4ABFAA] flex items-center justify-center shrink-0">
          <Check size={12} color="white" strokeWidth={3} />
        </div>
        <span className="text-[15px] font-semibold text-[#1C1C1C]">
          Build Basics
        </span>
      </div>


      <div className="flex items-center gap-3 px-4 py-[14px] bg-[#F7F7F7] border-b border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] border-[1.5px] border-[#DDDDDD] bg-[#F0F0F0] shrink-0" />

        <div className="flex-1">
          <p className="text-sm font-medium text-[#BBBBBB] m-0 blur-text select-none">
            Math Fundamentals
          </p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-purple blur-tag select-none">
            Test
          </span>
        </div>

        <div className="flex flex-col items-center gap-[2px] min-w-[50px]">
          <Lock size={16} color="#AAAAAA" />
          <span className="text-[11px] text-[#AAAAAA]">Locked</span>
        </div>

        <button className="text-xs text-[#AAAAAA] border border-[#DDDDDD] rounded-full px-[14px] py-1 bg-white cursor-not-allowed whitespace-nowrap">
          Start
        </button>
      </div>


      <div className="flex items-center gap-3 px-4 py-[14px] bg-[#F7F7F7] border-b border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] border-[1.5px] border-[#DDDDDD] bg-[#F0F0F0] shrink-0" />

        <div className="flex-1">
          <p className="text-sm font-medium text-[#BBBBBB] m-0 blur-text select-none">
            Practice Algebra Problems Daily
          </p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-red blur-tag select-none">
            Math · 5 videos
          </span>
        </div>

        <div className="flex flex-col items-center gap-[2px] min-w-[50px]">
          <Lock size={16} color="#AAAAAA" />
          <span className="text-[11px] text-[#AAAAAA]">Locked</span>
        </div>

        <button className="text-xs text-[#AAAAAA] border border-[#DDDDDD] rounded-full px-[14px] py-1 bg-white cursor-not-allowed whitespace-nowrap">
          Start
        </button>
      </div>


      <div className="flex items-center gap-3 px-4 py-[14px] bg-white border-b border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] border-[1.5px] border-[#CCCCCC] bg-white shrink-0" />

        <div className="flex-1">
          <p className="text-sm font-medium text-[#2C2C2C] m-0">
            Study Motion and Energy Concepts
          </p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-orange">
            Science
          </span>
        </div>

        <button className="text-[13px] text-[#3B9EE8] font-medium bg-transparent border-none cursor-pointer whitespace-nowrap p-0">
          Continue
        </button>
      </div>


      <div className="flex items-center gap-3 px-4 py-[14px] bg-white border-b border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] bg-[#4ABFAA] flex items-center justify-center shrink-0">
          <Check size={12} color="white" strokeWidth={3} />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-[#AAAAAA] m-0 line-through">
            Solve 20 Maths Question Daily
          </p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-green">
            Maths
          </span>
        </div>
      </div>


      <div className="flex items-center gap-3 px-4 py-[14px] bg-white border-b border-[#EEEEEE]">
        <div className="w-5 h-5 rounded-[5px] bg-[#4ABFAA] flex items-center justify-center shrink-0">
          <Check size={12} color="white" strokeWidth={3} />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-[#AAAAAA] m-0 line-through">
            Watch a Science Concept Video
          </p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-green">
            Exploration
          </span>
        </div>
      </div>


      <div className="flex items-center gap-3 px-4 py-[14px] bg-white">
        <div className="w-5 h-5 rounded-[5px] bg-[#4ABFAA] flex items-center justify-center shrink-0">
          <Check size={12} color="white" strokeWidth={3} />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-[#AAAAAA] m-0 line-through">
            Follow a Weekly Study Plan
          </p>
          <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-[2px] rounded-full tag-pink">
            Habbit
          </span>
        </div>
      </div>


    </div>
  );
}