import { ArrowUpRight, Send } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  return (
    <>
      <div className="top-section p-6  ">
        <h1 className="text-3xl font-bold text-[#1A9BA1] mb-4">
          Good morning, Alex! 👋
        </h1>
        <div
          className="bg-gradient-to-r from-[#E6F7F5] via-[#F9FFF9] to-[#EDFBE9] border-l-4 border-[#1A9BA1] rounded-xl px-5 py-4     
        rounded-r-lg"
        >
          <p className="text-gray-800 text-base mb-1 ">
            "The future belongs to those who believe in the beauty of their
            dreams."
          </p>
          <i className="text-gray-500 text-sm">— Eleanor Roosevelt</i>
        </div>
      </div>

      <section className="shadow-md border border-[#dadada] rounded-xl mx-6 p-5" id="ai-search">
        <div className="logo flex items-center gap-3 mb-16">
          <Image
            src="/assets/icons/logo.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-semibold text-gray-800">
            ConsulTOpen AI
          </span>
        </div>

        <div className="search-bar ">
          <div className="suggestions-box flex gap-3 justify-end mb-4">
            <ul className="flex gap-3  list-none">
              <li>
                <button className="flex cursor-pointer items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  What are the future benefits of choosing PCM in 11th?
                  <ArrowUpRight size={14} />
                </button>
              </li>
              <li>
                <button className="flex cursor-pointer items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  How to balance board exams and competitive prep?
                  <ArrowUpRight size={14} />
                </button>
              </li>
            </ul>
          </div>

          <div className="search-box flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-white">
            <input
              type="text"
              placeholder="Type your specific question here"
              className="flex-1 outline-none text-gray-500 text-sm bg-transparent"
            />
            <div className="send">
              <button
                id="button"
                className=" w-10 cursor-pointer h-10 rounded-lg flex items-center justify-center"
              >
                <Send size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
