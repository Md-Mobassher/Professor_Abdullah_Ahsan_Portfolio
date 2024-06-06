import Link from "next/link";
import { navItemsData } from "./navItemsData";

const DesktopMenu = () => {
  return (
    <div className="lg:flex md:flex flex-wrap hidden   text-center justify-center items rounded-lg">
      <nav className="flex flex-wrap">
        {navItemsData.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-cyan-500 rounded-lg"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DesktopMenu;
