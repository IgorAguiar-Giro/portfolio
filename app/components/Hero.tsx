import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <FadeIn>
      <div className="gap-3 md:max-w-[740px] lg:max-w-[622px]">
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
      </div>
    </FadeIn>
  );
}
