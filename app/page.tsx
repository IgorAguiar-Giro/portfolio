import { PanelsTopLeft, Layers } from "lucide-react";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      <div
        id="content"
        className="relative flex flex-col p-5 pr-5 text-center text-6xl md:py-5 md:text-7xl lg:pr-10 lg:text-start lg:text-8xl"
      >
        <div id="Header" className="gap-3 md:max-w-[740px] lg:max-w-[622px] ">
          <h1 className="font-bold text-white">SOFTWARE</h1>
          <h1 className="font-bold text-[#B6B4BD33]">ENGINEER</h1>
          <span className="text-center text-base font-light text-[#998f8f] lg:text-justify">
            <p className="mb-20">
              &quot;Being a software engineer is more than just a career to me,
              it&apos;s a passion. I love solving problems, building solutions,
              and constantly learning new things in a field that never stops
              evolving.&quot;
            </p>
          </span>

          {/* Cards */}
          <div
            id="cards"
            className="my-5 flex flex-col items-center justify-center gap-8 md:flex-row"
          >
            <div className="flex h-[260px] w-full flex-col justify-between rounded-2xl bg-green-500   p-8 text-2xl font-medium text-black transition-all duration-300 ease-in-out hover:bg-green-400 md:w-[260px]">
              <div>
                <PanelsTopLeft size={48} />
              </div>
              <div>
                <p>DYNAMIC,</p>
                <p>FRONTEND,</p>
                <p>BACKEND API</p>
              </div>
            </div>
            <div className="flex h-[260px] w-full flex-col justify-between rounded-2xl bg-orange-500 p-8 text-2xl font-medium text-white/[0.8]  transition-all duration-300 ease-in-out hover:bg-orange-400 md:max-w-[330px]">
              <div>
                <Layers size={48} />
              </div>
              <div>
                <p>
                  JavaScript, TypeScript, React, Tailwind, Node.JS, PostgreSQL,
                  Docker
                </p>
              </div>
            </div>
          </div>
          {/* Recent projects*/}
          <div className="mb-10 mt-20">
            <h2 className="font-bold text-white">RECENT</h2>
            <h2 className="font-bold text-[#B6B4BD33]">PROJECTS</h2>
          </div>
          <div>
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
