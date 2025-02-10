import Image from "next/image";
import { Mail } from "lucide-react";

export default function Profile() {
  return (
    <div
      id="picture-bg"
      className="flex justify-center p-5 lg:sticky lg:top-0 lg:pl-10"
    >
      <div
        id="picture-box"
        className="s relative flex h-[456px] w-screen flex-col items-center overflow-hidden rounded-2xl bg-white px-5 py-8 text-black md:h-[540] md:w-[750] lg:h-[640px] lg:w-[344px]"
      >
        <div
          id="dots"
          className="absolute left-28 top-[-25] z-10  h-[100px] w-[194px] bg-[url('/img/dots.png')] bg-cover lg:left-0"
        ></div>
        <div
          id="dotsfire"
          className="absolute bottom-[150] left-[-100]   z-10 h-[166px] w-[270px] bg-[url('/img/dotsfire.png')] bg-cover"
        ></div>
        <div
          id="picture"
          className="relative h-[210px] w-[260px] rounded-2xl bg-[#F46C38] md:h-[284px] md:w-[240px]"
        >
          <Image
            className="rounded-2xl object-cover"
            src="/img/igoraguiar.jpg"
            fill
            alt="Picture of the author"
          />
        </div>

        <div className=" text-center ">
          <p className="my-4 text-4xl font-semibold">Igor Aguiar</p>
        </div>

        <div className="absolute bottom-16 max-w-[300px]  text-center font-medium">
          <p className=" text[18px] text-[#6A6B6E] ">
            A driven developer with a passion for building innovative and
            effective solutions.
          </p>
        </div>

        {/* Icons */}
        <div className="absolute bottom-0 mb-4 flex w-full max-w-[200px] items-center justify-between">
          <a
            className="cursor-pointer rounded-lg bg-[#0a66c2] px-1 text-2xl font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-200"
            href="https://www.linkedin.com/in/igoraguiar000/"
            target="_blank"
          >
            in
          </a>
          <a
            className="cursor-pointer rounded-lg bg-white p-1 transition-all duration-300 ease-in-out hover:bg-gray-200"
            href="https://github.com/IgorAguiar-Giro/"
            target="_blank"
          >
            <Image src="/img/github.png" alt="github" width={24} height={24} />
          </a>
          <a
            className="cursor-pointer rounded-lg  bg-white p-1 text-[#F46C38] transition-all duration-300 ease-in-out hover:bg-gray-200"
            href="mailto:igoraguiar000@gmail.com"
            target="_blank"
          >
            <Mail />
          </a>
        </div>
      </div>
    </div>
  );
}
