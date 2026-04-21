import { ExternalLink, Download } from "lucide-react"
import Image from "next/image"

export default function LearnLinks() {
  return (
    <div className="border border-[#E8E8E8] rounded-2xl p-5 bg-white">

      <div className="flex items-center gap-2 mb-4">
        <Image src="/assets/icons/quick/learn.png" alt="" width={20} height={20} />
        <h3 className="font-bold text-[#1C1C1C] text-base">Quick Learning Resources</h3>
      </div>

      <div className="flex flex-col gap-3">

        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F7F7]">
          <Image src="/assets/icons/quick/youtube.png" alt="" width={40} height={40} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#1C1C1C] leading-tight">
              Motion & Energy Explained in 10 Minutes
            </p>
            <p className="text-xs text-[#888888] mt-0.5">Channel: Khan Academy</p>
          </div>
          <ExternalLink size={16} className="text-[#1A9BA1] shrink-0 cursor-pointer" />
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F7F7]">
          <Image src="/assets/icons/quick/pdf.png" alt="" width={40} height={40} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#1C1C1C]">Motion & Energy Pdf</p>
            <p className="text-xs text-[#888888] mt-0.5">NCERT</p>
          </div>
          <Download size={16} className="text-[#F59E0B] shrink-0 cursor-pointer" />
        </div>

      </div>

    </div>
  )
}
