import React from "react";
import { Target, CircleArrowRight, Clock } from "lucide-react";
import Image from "next/image";

const Focus = () => {
  return (
    <>
      <div className="flex  gap-4 mx-6 mt-4  ">
        <div className="flex-1 p-5 border border-[#dadada] overflow-hidden rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <Target size={18} className="text-pink-500" />
            <span className="text-gray-800 font-semibold text-sm">
              Today's Focus!
            </span>
          </div>

          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-gray-800 mb-4">
              Study Motion and Energy Concepts
            </h3>

            <div className="flex items-center gap-2 py-3 border-b border-dashed border-gray-200">
              <CircleArrowRight size={16} className="text-teal-500" />
              <span className="text-gray-600 text-sm">
                Understand speed, velocity, and acceleration
              </span>
            </div>

            <div className="flex items-center gap-2 pt-3">
              <Clock size={16} className="text-gray-400" />
              <span className="text-gray-600 text-sm">
                Solve 5–10 basic numerical problems
              </span>
            </div>
          </div>
        </div>

        <div className="w-72 border border-[#dadada] overflow-hidden rounded-xl focus-right-box relative flex flex-col items-center justify-center py-6 px-4 text-center">
          <Image
            src="/assets/icons/leaf1.png"
            alt=""
            className="absolute w-12 h-12 object-cover left-0 bottom-0"
            width={48}
            height={48}
          />
          <Image
            src="/assets/icons/leaf2.png"
            alt=""
            className="absolute w-12 h-12 object-cover right-0 bottom-0"
            width={48}
            height={48}
          />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <Image
              src={"/assets/icons/focus-panda.png"}
              alt="calm"
              width={70}
              height={70}
            />
            <h4 className="text-[#70AD40] font-bold text-lg">
              You Are Calm Today
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Staying calm helps you think clearly and make better decisions.
              Take a deep breath and continue your day with a peaceful mind.
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Focus;
