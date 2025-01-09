export default function Perfil() {
  return (
    <div
      id="picture-bg"
      className="flex justify-center lg:h-screen w-screen lg:w-1/3 p-5 lg:pl-10 lg:sticky lg:top-0"
    >
      <div
        id="picture-box"
        className="flex flex-col items-center bg-white rounded-2xl h-[456px] w-full md:h-[540] md:w-[750] lg:h-[640px] lg:w-[344px] py-8 px-5"
      >
        <div
          id="picture"
          className="w-[260px] h-[210px] md:h-[284px] md:w-[240px] bg-orange-500 rounded-2xl"
        ></div>
      </div>
    </div>
  );
}
