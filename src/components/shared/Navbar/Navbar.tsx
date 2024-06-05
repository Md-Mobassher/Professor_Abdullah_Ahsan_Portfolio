import { Separator } from "@/components/ui/separator";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-center my-3">
      <Link href="/">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold my-3 text-center font-serif">
          Professor Abdullah Al-Ahsan
        </h1>
      </Link>
      <Separator className="bg-black lg:max-w-xl md:max-w-md max-w-sm px-10  mx-auto " />
      <MobileMenu />
      <DesktopMenu />
    </div>
  );
};

export default Navbar;
