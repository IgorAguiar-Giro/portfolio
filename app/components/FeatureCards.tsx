import { PanelsTopLeft, Layers } from "lucide-react";
import FadeIn from "./FadeIn";

export default function FeatureCards() {
  return (
    <div className="my-5 flex flex-col items-center justify-center gap-8 md:flex-row">
      <FadeIn delay={0.2}>
        <div className="flex h-[260px] w-full flex-col justify-between rounded-2xl bg-green-500 p-8 text-2xl font-medium text-black transition-all duration-300 ease-in-out hover:bg-green-400 md:w-[260px]">
          <div>
            <PanelsTopLeft size={48} />
          </div>
          <div>
            <p>DYNAMIC,</p>
            <p>FRONTEND,</p>
            <p>BACKEND API</p>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="flex h-[260px] w-full flex-col justify-between rounded-2xl bg-orange-500 p-8 text-2xl font-medium text-white/[0.8] transition-all duration-300 ease-in-out hover:bg-orange-400 md:max-w-[330px]">
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
      </FadeIn>
    </div>
  );
}
