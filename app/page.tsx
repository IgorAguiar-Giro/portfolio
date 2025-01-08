export default function Home() {
  return (
    <div id="main" className="">
      <div
        id="main-section"
        className="flex flex-col h-screen w-screen lg:flex-row lg:justify-center "
      >
        <div
          id="picture-bg"
          className="flex  justify-center lg:h-screen w-screen lg:w-1/3  px-5  "
        >
          <div
            id="picture-box"
            className="flex flex-col items-center  bg-white rounded-2xl h-[456px] w-full md:h-[540] md:w-[750]  lg:h-[640px] lg:w-[344px]  py-8 px-5"
          >
            <div
              id="picture"
              className=" w-[260px] h-[210px] md:h-[284px] md:w-[240px] bg-orange-500 rounded-2xl "
            ></div>
          </div>
        </div>
        <div
          id="content"
          className=" flex flex-col text-center text-6xl lg:text-start lg:text-8xl md:text-7xl px-5 md:py-5"
        >
          <h1 className=" text-white    ">SOFTWARE</h1>

          <h1 className=" text-gray-500    ">ENGINEER</h1>
        </div>
      </div>
    </div>
  );
}
