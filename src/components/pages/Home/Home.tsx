import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ahsan from "@/assets/images/NoamChomsky.jpg";
import Link from "next/link";
import MobileMenu from "@/components/shared/Navbar/MobileMenu";

const HomePageComponent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 min-h-screen">
      {/* header */}
      <div className="text-center">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold my-3 text-center font-serif">
          Professor Abdullah Ahsan
        </h1>
        <Separator className="bg-black lg:max-w-xl md:max-w-md max-w-sm px-10  mx-auto " />
        <h5 className="lg:text-xl text-md font-semibold uppercase mt-3 tracking-widest ">
          THE Professor Abdullah Ahsan WEBSITE
        </h5>
      </div>
      {/* mobile menu */}
      <MobileMenu />

      <div className="flex justify-center items-center mt-10 gap-10 ">
        <div className="flex-1 hidden lg:flex md:flex flex-col items-end">
          <Link
            href="recent-update"
            className="lg:text-xl text-md font-semibold uppercase mb-3 hidden lg:flex md:flex"
          >
            Books
          </Link>
          <Link
            href="recent-update"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            ARTICLES
          </Link>
          <Link
            href="recent-update"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            AUDIO AND VIDEO
          </Link>
          <Link
            href="recent-update"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            BIOS
          </Link>
        </div>

        <div className="flex-1">
          <div className="flex  flex-col justify-center items-center">
            <Link
              href="recent-update"
              className="lg:text-xl text-md font-semibold uppercase mb-3"
            >
              Recent Update
            </Link>
            <Image src={ahsan} alt="Abdullah Ahsan" />
          </div>
        </div>

        <div className="flex-1 flex-col hidden lg:flex md:flex">
          <Link
            href="recent-update"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            TALKS
          </Link>
          <Link
            href="recent-update"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            DEBATES
          </Link>
          <Link
            href="recent-update"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            LETTERS
          </Link>
          <Link
            href="recent-update"
            className="lg:text-xl text-md font-semibold uppercase mb-3"
          >
            ABOUT
          </Link>
        </div>
      </div>

      {/* footer */}
      <div className="text-center mt-20">
        <h1 className="lg:text-3xl md:text-3xl text-2xl  font-bold my-3 text-center font-serif">
          Professor Abdullah Ahsan
        </h1>
        <Separator className="bg-black lg:max-w-md md:max-w-sm max-w-xs px-10  mx-auto " />
      </div>
    </div>
  );
};

export default HomePageComponent;
