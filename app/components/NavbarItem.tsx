"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  Icon: React.ElementType;
  label: string;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ Icon, label, href }) => {
  const pathname = usePathname(); // Get the current pathname

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathname === href) {
      e.preventDefault(); // Prevent navigation if already on the target route
    }
  };

  return (
    <li className="relative group cursor-pointer flex flex-col items-center">
      <Link
        href={href}
        onClick={handleClick}
        className="flex flex-col items-center"
      >
        <Icon className="text-xl" />
        <span className="absolute bg-white/[0.04] rounded-lg p-1 mt-2 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-9 transition-all duration-500 ease-in-out">
          {label}
        </span>
      </Link>
    </li>
  );
};

export default NavbarItem;
