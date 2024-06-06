import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const HomeNavbar = () => {
  return (
    <div className="text-center">
      <Link href="/">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold my-3 text-center font-serif hover:text-cyan-500">
          Professor Abdullah al-Ahsan
        </h1>
      </Link>
      <Separator className="bg-black lg:max-w-xl md:max-w-md max-w-sm px-10  mx-auto " />
      <h5 className="lg:text-xl text-md font-semibold uppercase mt-3 tracking-widest ">
        THE Professor Abdullah al-Ahsan WEBSITE
      </h5>
      {/* mobile menu */}
      <div className="mt-2">
        <MobileMenu />
      </div>
    </div>
  );
};

export default HomeNavbar;
