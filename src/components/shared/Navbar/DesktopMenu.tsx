import Link from "next/link";

const navItem = (
  <>
    <Link
      href="/"
      className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-gray-500 rounded-lg"
    >
      Home
    </Link>

    <Link
      href="/about"
      className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-gray-500 rounded-lg"
    >
      ABOUT
    </Link>

    <Link
      href="/recent-update"
      className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-gray-500 rounded-lg"
    >
      Recent Update
    </Link>

    <Link
      href="/books"
      className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-gray-500 rounded-lg"
    >
      Books
    </Link>

    <Link
      href="/articles"
      className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-gray-500 rounded-lg"
    >
      ARTICLES
    </Link>

    <Link
      href="/audio-video"
      className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-gray-500 rounded-lg"
    >
      AUDIO AND VIDEO
    </Link>

    <Link
      href="/bios"
      className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-gray-500 rounded-lg"
    >
      BIOS
    </Link>

    <Link
      href="/debates"
      className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-gray-500 rounded-lg"
    >
      DEBATES
    </Link>
    <Link
      href="/letters"
      className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-gray-500 rounded-lg"
    >
      LETTERS
    </Link>
  </>
);
const DesktopMenu = () => {
  return (
    <div className="lg:flex md:flex flex-wrap hidden   text-center justify-center items rounded-lg mt-3">
      {navItem}
    </div>
  );
};

export default DesktopMenu;
