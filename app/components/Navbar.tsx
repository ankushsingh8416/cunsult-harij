import { Search, Bell, MessageSquare } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-70 right-0 z-50 bg-white border-b border-gray-200 px-6 h-16 flex items-center gap-4">
       
        <div className="search-bar flex items-center gap-2 flex-1 max-w-md bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
          <Search size={14} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search internships, certifications, consultants.."
            className="bg-transparent  border-none outline-none    text-gray-500 text-sm w-full     placeholder-gray-400 "
          />
        </div>

        <div className="flex-1"></div>

        <div className="right-section flex items-center gap-1">
          <button className="w-9 h-9 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 text-gray-500 relative transition-colors">
            <Bell size={18} />
            <span className="absolute    top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
          </button>

          <button className="w-9 h-9 cursor-pointer  flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 text-gray-500 transition-colors">
            <MessageSquare size={18} />
          </button>

          <button className="bg-gray-900  cursor-pointer  text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap ml-1">
            Upgrade Plan
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
