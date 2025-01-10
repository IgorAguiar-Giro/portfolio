"use client";
import { House, UserRound, FolderCheck, Wrench } from "lucide-react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="text-white flex items-center justify-center">
      <div>
        <ul className="flex items-center mb-10 mt-5 py-4 px-8 space-x-8 rounded-xl w-fit bg-white/[0.04] gap-3">
          <NavbarItem Icon={House} label="Home" href="/" />
          <NavbarItem Icon={UserRound} label="About" href="/about" />
          <NavbarItem Icon={FolderCheck} label="Projects" href="/projects" />
          <NavbarItem Icon={Wrench} label="Stacks" href="/stacks" />
        </ul>
      </div>
    </nav>
  );
}
