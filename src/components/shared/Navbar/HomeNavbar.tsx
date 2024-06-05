import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <div className="text-center">
      <Link href="/">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold my-3 text-center font-serif">
          Professor Abdullah Al-Ahsan
        </h1>
      </Link>
      <Separator className="bg-black lg:max-w-xl md:max-w-md max-w-sm px-10  mx-auto " />
      <h5 className="lg:text-xl text-md font-semibold uppercase mt-3 tracking-widest ">
        THE Professor Abdullah Al-Ahsan WEBSITE
      </h5>
    </div>
  );
};

export default HomeNavbar;
