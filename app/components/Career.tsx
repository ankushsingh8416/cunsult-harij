import React from "react";
import { Map, Lock, Target, Check } from "lucide-react";

const Career = () => {
  return (
    <>
      <div className="mx-6 mt-4 border border-[#dadada] overflow-hidden rounded-xl p-5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Map size={18} className="text-[#1A9BA1]  " />
            <span className="font-semibold text-gray-800">Career Roadmap</span>
          </div>
          <button className="text-sm text-[#1A9BA1] hover:underline">
            View Full Roadmap
          </button>
        </div>

        <div className="border border-gray-100 rounded-xl p-5 mb-3">
          <div className="flex items-center w-full mb-3">
            <div className="flex items-center flex-1">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-[#1A9BA1]">
                <Check size={14} className="text-white" strokeWidth={3} />
              </div>
              <div className="flex-1 h-0.5 bg-[#1A9BA1]"></div>
            </div>

            <div className="flex items-center flex-1">
              <div className="w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 border-gray-300 bg-white">
                <Lock size={13} className="text-gray-400" />
              </div>
              <div className="flex-1 h-0.5 bg-gray-200"></div>
            </div>

            <div className="flex items-center flex-1">
              <div className="w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 border-gray-300 bg-white">
                <Lock size={13} className="text-gray-400" />
              </div>
              <div className="flex-1 h-0.5 bg-gray-200"></div>
            </div>

            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 border-gray-300 bg-white">
                <Lock size={13} className="text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex-1">
              <span className="text-xs font-bold text-gray-800">
                Build Basics
              </span>
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-400">Strengthen Concepts</span>
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-400">Score in Boards</span>
            </div>
            <div className="">
              <span className="text-xs text-gray-400">PCM Stream</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#EBEBEB] bg-opacity-10 rounded-lg px-4 py-3">
          <div className="flex items-center gap-2">
            <Target size={16} className="text-[#1A9BA1]" />
            <span className="text-[#1A9BA1] text-sm font-medium">
              Next Milestone: Strengthen Concepts
            </span>
          </div>
          <span className="text-[#1A9BA1] font-semibold text-sm">65%</span>
        </div>
      </div>
    </>
  );
};

export default Career;
