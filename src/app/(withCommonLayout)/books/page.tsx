import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";
import { booksData } from "./BooksData";
import PageTitle from "@/components/ui/PageTitle";

const BooksPage = () => {
  return (
    <div className="pb-8">
      <PageTitle title="Books by Abdullah Al-Ahsan" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-5">
        {booksData.map((book, index) => (
          <div
            key={index}
            className="relative group border border-gray-300 hover:border-gray-500 hover:shadow-gray-500 hover:shadow-lg rounded-lg shadow-md  overflow-hidden w-full lg:h-[500px] md:h-[450px] h-[450px] flex"
          >
            {book.image ? (
              <Image
                src={book.image}
                alt={book.title}
                className=" rounded-lg transition duration-300 ease-in-out transform group-hover:blur-sm flex mx-auto"
                width={400}
                height={400}
              />
            ) : (
              <Image
                src={assets.image.noImage}
                alt="no image"
                className=" rounded-lg transition duration-300 ease-in-out transform group-hover:blur-sm flex mx-auto"
                width={400}
                height={400}
              />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-slate-50 bg-opacity-60 rounded-b-lg flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-5 border-t border-t-gray-300">
              <h3 className="text-xl font-semibold text-black mb-2 text-justify">
                {book.title}
              </h3>
              <p className="text-gray-900 mb-4 text-justify">
                {book.description.slice(0, 140)}...
              </p>
              <Link href={`/books/${book?.id}`}>
                <Button className="text-white px-4 py-2 rounded bg-cyan-400 hover:bg-cyan-600 transition duration-300 ">
                  Book Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
