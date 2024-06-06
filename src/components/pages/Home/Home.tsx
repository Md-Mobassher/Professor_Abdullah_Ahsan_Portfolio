import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/shared/Navbar/MobileMenu";
import Footer from "@/components/shared/Footer/Footer";
import HomeNavbar from "@/components/shared/Navbar/HomeNavbar";
import ahsan from "@/assets/images/Abdullah-Ahsan.png";
import { navItemsData } from "@/components/shared/Navbar/navItemsData";

const HomePageComponent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-2">
      {/* header */}
      <HomeNavbar />

      <div className="flex justify-center items-center lg:mt-14 mt-10 gap-10 ">
        <div className="flex-1 hidden lg:flex md:flex flex-col items-end">
          {navItemsData.slice(1, 5).map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-cyan-500 rounded-lg"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex-1">
          <div className="flex  flex-col justify-center items-center">
            {/* <div className="hidden lg:flex md:flex">
              <Link
                href="/recent-update"
                className="lg:text-xl text-md font-semibold uppercase mb-3"
              >
                Recent Update
              </Link>
            </div> */}
            <div>
              <Image
                src={ahsan}
                alt="Abdullah Ahsan"
                className=" object-cover filter grayscale transition duration-500 ease-in-out p-1 hover:grayscale-0  border-4 border-gray-400 hover:border-black"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex-col hidden lg:flex md:flex items-start">
          {navItemsData.slice(5, 10).map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="lg:text-xl text-md font-semibold uppercase py-2 px-4 hover:text-white hover:bg-cyan-500 rounded-lg"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomePageComponent;
