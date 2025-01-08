export default function Home() {
  return (
    <div id="main" className="">
      <div
        id="main-section"
        className="flex h-screen w-screen absolute md:flex-col lg:flex-row"
      >
        <div
          id="picture-bg"
          className="flex  justify-end h-2/3 w-1/3  sticky m-10"
        >
          <div
            id="picture-box"
            className="flex flex-col items-center bg-white rounded-2xl h-full w-2/3 px-5 max-h-[640px] max-w-[344px] py-8"
          >
            <div id="picture" className="h-[40%] w-[90%] bg-orange-500 "></div>
          </div>
        </div>
        <div id="content" className="w-2/3 flex flex-col ">
          <h1 className="text-9xl text-white">SOFTWARE</h1>

          <h1 className="text-9xl text-gray-500">ENGINEER</h1>
        </div>
      </div>
    </div>
  );
}
