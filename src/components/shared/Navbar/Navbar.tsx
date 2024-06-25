import { Separator } from "@/components/ui/separator";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-center mb-2">
      <Link href="/">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold my-3 text-center  hover:text-cyan-500">
          Abdullah al-Ahsan
        </h1>
      </Link>
      <Separator className="bg-black lg:max-w-2xl md:max-w-xl max-w-sm px-10 mx-auto mb-2" />
      <MobileMenu />
      <DesktopMenu />
    </div>
  );
};

export default Navbar;
