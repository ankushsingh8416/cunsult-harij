"use client";

import { Activity } from "lucide-react";
import Image from "next/image";


export default function Skill() {
    return (
        <div className="w-full max-w-[420px] bg-white border-[#5BB8F5] p-5  mt-4 border  border-[#dadada] overflow-hidden rounded-xl">


            <div className="flex items-center gap-2 mb-5">
                <Activity size={18} color="#4ABFAA" strokeWidth={2.5} />
                <h2 className="text-[16px] font-bold text-[#1C1C1C] m-0">
                    Skills Progress
                </h2>
            </div>


            <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EDE0F8] flex items-center justify-center shrink-0">
                                       <Image src="/assets/icons/skills/skill1.png" alt="Science" width={20} height={20} />

                </div>

                <div className="flex-1">
                    <div className="flex items-center justify-between mb-[6px]">
                        <span className="text-[14px] font-semibold text-[#1C1C1C]">
                            Math Problem Solving
                        </span>
                        <span className="text-[14px] font-bold text-[#22C55E]">
                            80%
                        </span>
                    </div>

                    <div className="w-full h-[6px] bg-[#F0F0F0] rounded-full overflow-hidden">
                        <div className="h-full w-[80%] rounded-full bg-[#22C55E]" />
                    </div>
                </div>
            </div>


            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FDE8DE] flex items-center justify-center shrink-0">
                    <Image src="/assets/icons/skills/skill2.png" alt="Science" width={20} height={20} />
                </div>

                <div className="flex-1">
                    <div className="flex items-center justify-between mb-[6px]">
                        <span className="text-[14px] font-semibold text-[#1C1C1C]">
                            Science Concepts
                        </span>
                        <span className="text-[14px] font-bold text-[#22C55E]">
                            70%
                        </span>
                    </div>

                    <div className="w-full h-[6px] bg-[#F0F0F0] rounded-full overflow-hidden">
                        <div className="h-full w-[70%] rounded-full bg-[#22C55E]" />
                    </div>
                </div>
            </div>


        </div>
    );
}