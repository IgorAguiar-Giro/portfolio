import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/FadeIn";

export default function Projects() {
  return (
    <div className="relative flex flex-col md:max-w-[740px] lg:max-w-[622px]">
      <FadeIn>
        <div className="p-5 pr-5 text-6xl md:py-5 md:text-7xl lg:pr-10 lg:text-start lg:text-8xl">
          <h2 className="font-bold text-white">RECENT</h2>
          <h2 className="font-bold text-[#B6B4BD33]">PROJECTS</h2>
        </div>
      </FadeIn>
      <div className="px-5 flex flex-col gap-4">
        <FadeIn delay={0.2}>
          <ProjectCard
            title="The CutPass - Landing page"
            description="A modern, responsive landing page for CutPass, a barber management platform. Built with Next.js and Tailwind CSS for performance and style."
            imageUrl="/img/cutpass.jpg"
            projectUrl="https://your-link-here.com"
          />
        </FadeIn>
        <FadeIn delay={0.3}>
          <ProjectCard
            title="The CutPass - Landing page"
            description="A modern, responsive landing page for CutPass, a barber management platform. Built with Next.js and Tailwind CSS for performance and style."
            imageUrl="/img/cutpass.jpg"
            projectUrl="https://your-link-here.com"
          />
        </FadeIn>
        <FadeIn delay={0.4}>
          <ProjectCard
            title="The CutPass - Landing page"
            description="A modern, responsive landing page for CutPass, a barber management platform. Built with Next.js and Tailwind CSS for performance and style."
            imageUrl="/img/cutpass.jpg"
            projectUrl="https://your-link-here.com"
          />
        </FadeIn>
      </div>
    </div>
  );
}
