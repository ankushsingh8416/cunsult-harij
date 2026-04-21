import { Lock } from "lucide-react"

type Props = {
    title: string
    description: string
}

export default function LockedStage({ title, description }: Props) {

    return (
        <div className="border border-[#E8E8E8] rounded-2xl px-5 py-4 bg-white">

            <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-[#AAAAAA]">{title}</h3>
                <div className="flex items-center gap-1 text-[#AAAAAA]">
                    <Lock size={13} />
                    <span className="text-xs font-medium">Locked</span>
                </div>
            </div>

            <p className="text-sm text-[#BBBBBB]">{description}</p>

        </div>
    )
}
