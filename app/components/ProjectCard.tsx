"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div
      className="flex flex-row items-center gap-4 bg-[#B6B4BD33] p-4 rounded-lg md:max-w-[740px] lg:max-w-[622px] 
      transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
      onClick={() => window.open(projectUrl, "_blank")}
    >
      <div className="relative h-[120px] w-[120px] flex-shrink-0">
        <Image
          className="rounded-lg object-cover"
          src={imageUrl}
          fill
          alt={title}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
}
