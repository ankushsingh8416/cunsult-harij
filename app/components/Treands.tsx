"use client";

import { Activity, TriangleAlert, Star, ArrowRight } from "lucide-react";


const days = [
    { label: "Mon", fillClass: "mood-fill-purple", faceImg: "/assets/treands/icon-1.png" },
    { label: "Tue", fillClass: "mood-fill-green", faceImg: "/assets/treands/icon-2.png" },
    { label: "Wed", fillClass: "mood-fill-pink", faceImg: "/assets/treands/icon-3.png" },
    { label: "Thu", fillClass: "mood-fill-teal", faceImg: "/assets/treands/icon-4.png" },
    { label: "Fri", fillClass: "mood-fill-red", faceImg: "/assets/treands/icon-5.png" },
    { label: "Sat", fillClass: "mood-fill-sat", faceImg: null, fillHeight: "h-[50px]" },
    { label: "Sun", fillClass: null, faceImg: null },
];

const BAR_HEIGHT = "h-[220px]";
const DEFAULT_FILL = "h-full";


export default function Trends({ therapistImg }) {
    return (
        <div className="w-full bg-white rounded-xl px-5 pt-6 pb-8 border border-[#dadada]">


            <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-2">
                    <Activity size={20} color="#F0317A" strokeWidth={2.5} />
                    <h2 className="text-[20px] font-bold text-[#1C1C1C] m-0">
                        Mood & Activity Trends
                    </h2>
                </div>
                <button className="text-sm font-semibold text-[#1C1C1C] border border-[#DDDDDD] rounded-xl px-4 py-[7px] bg-white whitespace-nowrap shrink-0">
                    This Week
                </button>
            </div>

            <p className="text-sm text-[#AAAAAA] mt-1 mb-6 leading-snug">
                Emotional wellbeing & platform engagement<br />
                based on your daily check-ins.
            </p>


            <div className="flex items-end justify-between gap-[10px] mb-3">
                {days.map((day) => (
                    <div key={day.label} className="flex flex-col items-center flex-1 gap-2">

                        {day.faceImg ? (
                            <img
                                src={day.faceImg}
                                alt={day.label}
                                className="w-10 h-10 object-contain shrink-0"
                            />
                        ) : (
                            <div className="w-10 h-10 shrink-0" />
                        )}

                        <div className={`relative w-full ${BAR_HEIGHT} rounded-[8px] bg-[#F3F4F6] overflow-hidden`}>
                            {day.fillClass && (
                                <div
                                    className={`absolute bottom-0 left-0 w-full rounded-[8px] ${day.fillHeight ?? DEFAULT_FILL} ${day.fillClass}`}
                                />
                            )}
                        </div>

                    </div>
                ))}
            </div>


            <div className="flex justify-between gap-[10px] border-t border-[#EEEEEE] pt-2 mb-6">
                {days.map((day) => (
                    <div key={day.label} className="flex-1 text-center text-[12px] text-[#AAAAAA] font-medium">
                        {day.label}
                    </div>
                ))}
            </div>


            <div className="flex items-start gap-3 mb-6">
                <TriangleAlert size={18} color="#F5A623" className="shrink-0 mt-[2px]" />
                <p className="text-[15px] font-semibold text-[#1C1C1C] m-0 leading-snug">
                    Your mood this week suggests increased stress related to your future.
                </p>
            </div>

            <hr className="border-[#EEEEEE] mb-8" />


            <div className="flex flex-col items-center text-center">

                <span className="inline-block text-[13px] font-semibold text-[#EC4899] bg-[#FCE6F3] px-5 py-[7px] rounded-full mb-3">
                    Based on mood log
                </span>

                <h3 className="text-[22px] font-bold text-[#EC4899] m-0 mb-6">
                    Recommended for You
                </h3>

                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-[3px] border-[#F0317A]">
                    <img
                        src={therapistImg}
                        alt="Mukund Tyagi"
                        className="w-full h-full object-cover"
                    />
                </div>

                <h4 className="text-[18px] font-bold text-[#1C1C1C] m-0">
                    Mukund Tyagi
                </h4>

                <p className="text-sm text-[#666666] mt-[2px] mb-3">
                    (Student Wellbeing Therapist)
                </p>

                <div className="flex items-center gap-2">
                    <Star size={18} color="#F59E0B" fill="#F59E0B" />
                    <span className="text-[15px] font-bold text-[#F59E0B]">4.9</span>
                    <span className="text-sm text-[#888888]">(120+ Sessions)</span>
                </div>

            </div>


            <button className="mt-8 cursor-pointer w-full flex items-center justify-center gap-2 bg-[#EC4899] text-white text-[15px] font-bold py-4 rounded-2xl">
                Book a Therapy Session
                <ArrowRight size={18} color="white" strokeWidth={2.5} />
            </button>

        </div>
    );
}