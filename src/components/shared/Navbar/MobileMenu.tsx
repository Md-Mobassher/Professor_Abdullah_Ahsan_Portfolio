"use client";

import { PlusIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "./navData";

const navItem = (
  <>
    <div className="lg:hidden md:hidden flex flex-col bg-gray-300  text-center rounded-lg">
      <Link
        href="/"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500  hover:text-white hover:bg-gray-500 rounded-t-lg"
      >
        Home
      </Link>

      <Link
        href="/about"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500  hover:text-white hover:bg-gray-500 "
      >
        ABOUT
      </Link>

      {/* <Link
        href="/recent-update"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500  hover:text-white hover:bg-gray-500 "
      >
        Recent Update
      </Link> */}

      <Link
        href="/books"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500  hover:text-white hover:bg-gray-500 "
      >
        Books
      </Link>

      <Link
        href="/articles"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500  hover:text-white hover:bg-gray-500 "
      >
        ARTICLES
      </Link>

      <Link
        href="/audio-video"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500  hover:text-white hover:bg-gray-500 "
      >
        AUDIO AND VIDEO
      </Link>

      <Link
        href="/bios"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500  hover:text-white hover:bg-gray-500 "
      >
        BIOS
      </Link>

      <Link
        href="/debates"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500  hover:text-white hover:bg-gray-500 "
      >
        DEBATES
      </Link>
      <Link
        href="/letters"
        className="lg:text-xl text-md font-semibold uppercase py-2 rounded-b-lg hover:text-white hover:bg-gray-500 "
      >
        LETTERS
      </Link>
    </div>
  </>
);

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
                {navItems.map((item, index) => (
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
