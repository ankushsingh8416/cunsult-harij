"use client";

import { Wind, Zap, Bone, Brain, Clock } from "lucide-react";


export default function Gym() {
  return (
    <div className="w-full bg-white rounded-2xl border border-[#E0EEFF] p-6 font-sans">


      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#FFF3E8] flex items-center justify-center shrink-0">
          <span className="text-2xl">🧡</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#1C1C1C] m-0">Mind Gym</h2>
          <p className="text-sm text-[#888888] m-0 mt-[2px]">
            Suggests mindfulness and focus activities to keep your mind sharp and calm.
          </p>
        </div>
      </div>


      <div className="grid grid-cols-2 gap-4">


        <div className="rounded-2xl p-5 flex flex-col justify-between min-h-[160px] mind-card-blue">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
              <Wind size={18} color="#3BAEE8" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#1C1C1C] m-0">Breathing Exercises</h3>
              <p className="text-sm text-[#555555] m-0 mt-[2px]">Calm and relax</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-[6px] text-[#555555] text-sm">
              <Clock size={14} strokeWidth={2} />
              <span>3-5 minutes</span>
            </div>
            <button className="flex items-center gap-1 bg-white text-[#1C1C1C] text-sm font-semibold px-4 py-[7px] rounded-full">
              Start <span className="text-[#1C1C1C]">›</span>
            </button>
          </div>
        </div>


        <div className="rounded-2xl p-5 flex flex-col justify-between min-h-[160px] mind-card-yellow">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
              <Zap size={18} color="#E8C000" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#1C1C1C] m-0">Focus Exercises</h3>
              <p className="text-sm text-[#555555] m-0 mt-[2px]">Boost concentration</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-[6px] text-[#555555] text-sm">
              <Clock size={14} strokeWidth={2} />
              <span>5-10 minutes</span>
            </div>
            <button className="flex items-center gap-1 bg-white text-[#1C1C1C] text-sm font-semibold px-4 py-[7px] rounded-full">
              Start <span className="text-[#1C1C1C]">›</span>
            </button>
          </div>
        </div>


        <div className="rounded-2xl p-5 flex flex-col justify-between min-h-[160px] mind-card-purple">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
              <Bone size={18} color="#8B6FE8" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#1C1C1C] m-0">Muscle Relaxation</h3>
              <p className="text-sm text-[#555555] m-0 mt-[2px]">Release body tension</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-[6px] text-[#555555] text-sm">
              <Clock size={14} strokeWidth={2} />
              <span>25-30 minutes</span>
            </div>
            <button className="flex items-center gap-1 bg-white text-[#1C1C1C] text-sm font-semibold px-4 py-[7px] rounded-full">
              Start <span className="text-[#1C1C1C]">›</span>
            </button>
          </div>
        </div>


        <div className="rounded-2xl p-5 flex flex-col justify-between min-h-[160px] mind-card-pink">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
              <Brain size={18} color="#D63FAA" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#1C1C1C] m-0">Study Focus Reset</h3>
              <p className="text-sm text-[#555555] m-0 mt-[2px]">Sharpen your mind</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-[6px] text-[#555555] text-sm">
              <Clock size={14} strokeWidth={2} />
              <span>3 minutes</span>
            </div>
            <button className="flex items-center gap-1 bg-white text-[#1C1C1C] text-sm font-semibold px-4 py-[7px] rounded-full">
              Start <span className="text-[#1C1C1C]">›</span>
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}