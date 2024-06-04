import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ahsan from "@/assets/images/NoamChomsky.jpg";
import Link from "next/link";
import MobileMenu from "@/components/shared/Navbar/MobileMenu";
import Footer from "@/components/shared/Footer/Footer";
import HomeNavbar from "@/components/shared/Navbar/HomeNavbar";

const HomePageComponent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-2">
      {/* header */}
      <HomeNavbar />
      {/* mobile menu */}
      <MobileMenu />

      <div className="flex justify-center items-center lg:mt-20 mt-16 gap-10 ">
        <div className="flex-1 hidden lg:flex md:flex flex-col items-end">
          <Link
            href="/books"
            className="lg:text-xl text-md font-semibold uppercase mb-3 hidden lg:flex md:flex"
          >
            Books
          </Link>
          <Link
            href="/articles"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            ARTICLES
          </Link>
          <Link
            href="/audio-video"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            AUDIO AND VIDEO
          </Link>
          <Link
            href="/bios"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            BIOS
          </Link>
        </div>

        <div className="flex-1">
          <div className="flex  flex-col justify-center items-center">
            <div className="hidden lg:flex md:flex">
              <Link
                href="/recent-update"
                className="lg:text-xl text-md font-semibold uppercase mb-3"
              >
                Recent Update
              </Link>
            </div>
            <Image src={ahsan} alt="Abdullah Ahsan" />
          </div>
        </div>

        <div className="flex-1 flex-col hidden lg:flex md:flex">
          <Link
            href="/talks"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            TALKS
          </Link>
          <Link
            href="/debates"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            DEBATES
          </Link>
          <Link
            href="/letters"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            LETTERS
          </Link>
          <Link
            href="/about"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            ABOUT
          </Link>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomePageComponent;
