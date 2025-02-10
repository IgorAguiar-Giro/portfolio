import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className=" flex bg-white md:max-w-[740px] lg:max-h-[180px] lg:max-w-[622px]">
          <div>
            <Image
              className="rounded-2xl object-scale-down"
              src="/img/cutpass.jpg"
              fill
              alt="Cutpas - Landing Page"
            />
          </div>
        </div>
        <div className="bg-white md:max-w-[740px] lg:max-h-[180px] lg:max-w-[622px]">
          <p>Teste</p>
        </div>
        <div className="bg-white md:max-w-[740px] lg:max-h-[180px] lg:max-w-[622px]">
          <p>Teste</p>
        </div>
      </div>
    </div>
  );
}
