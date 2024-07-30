"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Nav } from "@/types";
import { ModeToggle } from "../ui/mode-toggle";

interface Props {
  navs: Nav[];
}

export function MainHeader({ navs }: Props) {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);

  return (
    <>
      <nav className="w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href={"/"}
            className="flex items-center justify-center mr-auto space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="hidden md:block self-center text-2xl font-semibold whitespace-nowrap ">
              FutureHealthDesign
            </span>
          </Link>
          {/* Desktop */}
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            <ul className="flex gap-8 p-4 md:p-0 mt-4 text-xl">
              {navs.map((nav) => (
                <li key={nav.link} className="hover:text-blue-400 relative">
                  <Link
                    href={nav.link}
                    className="block relative rounded md:bg-transparent p-0 z-10"
                    aria-current="page"
                    onMouseEnter={() => setHoveredNavItem(nav.name)}
                  >
                    {hoveredNavItem === nav.name && (
                      <motion.div
                        layoutId="hovered-backdrop"
                        className="absolute left-8"
                      >
                        <img
                          className="w-full h-full translate-y-6 object-fill"
                          alt="logo placeholder"
                          src="https://flowbite.com/docs/images/logo.svg"
                        />
                      </motion.div>
                    )}
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile */}
          <Sheet>
            <SheetTrigger className="block md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetDescription>
                  <ul className=" text-xl mt-24 flex flex-col gap-8">
                    {navs.map((nav) => (
                      <li key={nav.link}>
                        <Link href={nav.link}>{nav.name}</Link>
                      </li>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          {/* mode */}
          <div className=" ml-8">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
