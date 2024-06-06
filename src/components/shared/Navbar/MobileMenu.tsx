"use client";

import { PlusIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItemsData } from "./navItemsData";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Mobile Menu Button (visible on small screens) */}
      <div className=" flex md:hidden px-2 relative justify-center items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className=" text-slate-700  rounded"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {isOpen ? (
            <div className="p-1 border border-cyan-500 rounded-md hover:bg-cyan-500 hover:text-white">
              <X className="size-8" />
            </div>
          ) : (
            <div className="p-1 flex justify-center items-center gap-2">
              <span className="text-xl font-semibold">[</span>
              <p className="text-xl font-semibold"> Menu</p>
              <PlusIcon className="size-6" />
              <span className="text-xl font-semibold">]</span>
            </div>
          )}
          {isOpen && (
            <div className=" mt-3 w-full top-8 right-0 left-0 shadow-lg rounded-lg absolute transition-all duration-500 z-50 bg-gray-300 border border-cyan-500">
              <nav className="w-full flex flex-col rounded-lg">
                {navItemsData.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="lg:text-xl text-md font-semibold uppercase py-2 border-b  hover:text-white hover:bg-cyan-500 border-cyan-500 rounded-lg"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
