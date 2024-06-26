import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { socialData } from "./SocialData";

const Footer = () => {
  return (
    <div className=" lg:mt-14 md:mt-12 mt-10 mb-5">
      <Separator className="bg-black " />
      <div className="flex flex-wrap lg:justify-between md:justify-between justify-center  lg:gap-10 gap-2 items-center py-3">
        <div>
          <Link href="/">
            <h1 className="lg:text-2xl md:text-2xl text-xl font-bold my-3 hover:text-cyan-500">
              Abdullah al-Ahsan
            </h1>
          </Link>
        </div>
        <div className="flex flex-wrap">
          {socialData.map((item) => (
            <a
              href={item.link}
              key={item.title}
              target={item.link.startsWith("http") ? "_blank" : ""}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover filter grayscale transition duration-500 ease-in-out p-1 hover:grayscale-0"
                width={50}
                height={50}
              />
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="text-center text-md">
          Design & Developed By{" "}
          <Link
            href="https://dev-mobassher.web.app"
            target="_blank"
            className="text-gray-600 hover:text-blue-500"
          >
            Md Mobassher Hossain
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
