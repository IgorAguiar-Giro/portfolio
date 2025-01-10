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
            <p>
              &quot;Being a software engineer is more than just a career to me,
              it&apos;s a passion. I love solving problems, building solutions,
              and constantly learning new things in a field that never stops
              evolving.&quot;
            </p>
          </span>
          <div
            id="cards"
            className="my-5 flex flex-col items-center gap-8 md:flex-row"
          >
            <div className=" h-[260px] w-full rounded-2xl bg-green-500   md:w-[260px]"></div>
            <div className=" h-[260px] w-full rounded-2xl bg-orange-500  md:max-w-[330px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
