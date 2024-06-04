"use client";

import { PlusIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItem = (
  <>
    <div className="lg:hidden md:hidden flex flex-col bg-gray-300  text-center rounded-lg">
      <Link
        href="/"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500 hover:border-white hover:text-white hover:bg-gray-500 rounded-t-lg"
      >
        Home
      </Link>

      <Link
        href="/about"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500 hover:border-white hover:text-white hover:bg-gray-500 "
      >
        ABOUT
      </Link>

      <Link
        href="/recent-update"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500 hover:border-white hover:text-white hover:bg-gray-500 "
      >
        Recent Update
      </Link>

      <Link
        href="/books"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500 hover:border-white hover:text-white hover:bg-gray-500 "
      >
        Books
      </Link>

      <Link
        href="/articles"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500 hover:border-white hover:text-white hover:bg-gray-500 "
      >
        ARTICLES
      </Link>

      <Link
        href="/audio-video"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500 hover:border-white hover:text-white hover:bg-gray-500 "
      >
        AUDIO AND VIDEO
      </Link>

      <Link
        href="/bios"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500 hover:border-white hover:text-white hover:bg-gray-500 "
      >
        BIOS
      </Link>

      <Link
        href="/debates"
        className="lg:text-xl text-md font-semibold uppercase py-2 border-b border-gray-500 hover:border-white hover:text-white hover:bg-gray-500 "
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
      <div className=" flex md:hidden p-2 relative justify-center items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className=" text-slate-700  rounded"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {isOpen ? (
            <div className="p-1 border rounded-md hover:bg-gray-500 hover:text-white">
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
            <div className="flex flex-col pt-5 w-full top-8 right-0 left-0 shadow-lg rounded-md absolute transition-all duration-500">
              {navItem}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
