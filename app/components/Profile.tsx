import Image from "next/image";

export default function Profile() {
  return (
    <div
      id="picture-bg"
      className="flex justify-center  p-5 lg:sticky lg:top-0 lg:pl-10"
    >
      <div
        id="picture-box"
        className="relative flex h-[456px] w-screen flex-col items-center rounded-2xl bg-white px-5 py-8 md:h-[540] md:w-[750] lg:h-[640px] lg:w-[344px]"
      >
        <div
          id="picture"
          className="absolute h-[210px] w-[260px] rounded-2xl bg-orange-500 md:h-[284px] md:w-[240px]"
        >
          <Image
            className="rounded-2xl object-cover"
            src="/img/profilebg-orange.png"
            fill
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
