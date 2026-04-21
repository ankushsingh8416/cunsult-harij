"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MoreVertical } from "lucide-react"
import {
  LayoutDashboard,
  Map,
  Clock,
  Heart,
  Users,
  Bot,
  CreditCard,
  Wallet,
  Settings,
  LogOut,
} from "lucide-react"


const link1 = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Career Roadmap", href: "/career-roadmap", icon: Map },
  { name: "Session", href: "/session", icon: Clock },
  { name: "Mental Wellness", href: "/mental-wellness", icon: Heart },
  { name: "Consultant Marketplace", href: "/consultant-marketplace", icon: Users },
  { name: "ConsulTOpen AI", href: "/ai", icon: Bot },
]

const link2 = [
  { name: "Subscription", href: "/subscription", icon: CreditCard },
  { name: "Wallet & Payments", href: "/wallet", icon: Wallet },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Logout", href: "/logout", icon: LogOut },
]


export default function Sidebar({ userImg }) {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 h-screen w-[280px] bg-white border-r border-gray-200 flex flex-col shrink-0">

      <div className="h-16 flex items-center px-4 border-b border-gray-200">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt=""
            width={144}
            height={40}
            className="w-36 object-contain"
          />
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto">

        <div className="flex flex-col gap-1 px-3 mt-4">
          {link1.map((link) => {
            const active = pathname === link.href
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active
                    ? "bg-[#1A9BA1] text-white"
                    : "text-gray-700 hover:bg-[#1A9BA1] hover:text-white"
                  }`}
              >
                <Icon size={18} />
                {link.name}
              </Link>
            )
          })}
        </div>

        <div className="border-t border-gray-200 mx-3 mt-6" />

        <div className="flex flex-col gap-1 px-3 mt-4">
          {link2.map((link) => {
            const active = pathname === link.href
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active
                    ? "bg-[#1A9BA1] text-white"
                    : "text-gray-700 hover:bg-[#1A9BA1] hover:text-white"
                  }`}
              >
                <Icon size={18} />
                {link.name}
              </Link>
            )
          })}
        </div>

      </div>

      <div className="px-3 py-4">
        <div className="flex items-center gap-3 bg-[#F7FAFA] rounded-2xl px-3 py-3">

          <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
            <Image
              src={userImg}
              alt=""
              width={44}
              height={44}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-bold text-[#1C1C1C] leading-tight">
              Alex Miller
            </p>
            <span className="text-[11px] bg-[#F59E0B1A] px-4 py-2 rounded-2xl font-bold text-[#E8A020] tracking-wide">
              ELITE
            </span>
          </div>

          <button className="text-gray-400 hover:text-gray-600 shrink-0 p-1">
            <MoreVertical size={16} />
          </button>

        </div>
      </div>

    </div>
  )
}
