import Image from "next/image"

export default function JourneyProgress() {

    const r = 45
    const circ = 2 * Math.PI * r
    const filled = circ * 0.35

    return (
        <div className="border border-[#E8E8E8] rounded-2xl p-5 bg-white">

            <div className="flex items-center gap-2 mb-4">
                <Image src="/assets/icons/progress.png" alt="" width={20} height={20} />
                <h3 className="font-bold text-[#1C1C1C] text-base">Journey Progress</h3>
            </div>

            <div className="flex justify-center mb-4">
                <div className="relative w-28 h-28">
                    <svg viewBox="0 0 110 110" className="w-full h-full -rotate-90">
                        <circle cx="55" cy="55" r={r} fill="none" stroke="#F0F0F0" strokeWidth="8" />
                        <circle
                            cx="55" cy="55" r={r}
                            fill="none"
                            stroke="#F59E0B"
                            strokeWidth="8"
                            strokeDasharray={`${filled} ${circ}`}
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-[#F59E0B]">35%</span>
                        <span className="text-xs text-[#888888]">Completed</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-around border-t border-[#EEEEEE] pt-4">
                <div className="text-center">
                    <p className="text-xl font-bold text-[#1C1C1C]">3</p>
                    <p className="text-xs text-[#888888]">Tasks Done</p>
                </div>
                <div className="w-px bg-[#EEEEEE]" />
                <div className="text-center">
                    <p className="text-xl font-bold text-[#1C1C1C]">1</p>
                    <p className="text-xs text-[#888888]">Milestones</p>
                </div>
            </div>

        </div>
    )
}
