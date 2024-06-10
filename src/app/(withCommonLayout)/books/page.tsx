import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";
import PageTitle from "@/components/ui/PageTitle";
import { booksData } from "./booksData";

const BooksPage = () => {
  return (
    <div className="">
      <PageTitle title="Books by Abdullah al-Ahsan" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-5">
        {booksData.map((book, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden w-full lg:h-[500px] md:h-[450px] h-[450px] flex"
          >
            {book.image.front ? (
              <Image
                src={book.image.front}
                alt={book.title}
                className=" rounded-lg transition duration-300 ease-in-out transform group-hover:blur-sm  border border-gray-400 hover:border-gray-500 hover:shadow-gray-500 hover:shadow-lg shadow-md "
                width={400}
                height={400}
              />
            ) : (
              <Image
                src={assets.image.noImage}
                alt="no image"
                className=" rounded-lg transition duration-300 ease-in-out transform group-hover:blur-sm  border border-gray-400 hover:border-gray-500 hover:shadow-gray-500 hover:shadow-lg shadow-md "
                width={400}
                height={400}
              />
            )}

            <div className="absolute inset-x-0 bottom-0 bg-slate-50 bg-opacity-60 rounded-b-lg flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-5 border border-gray-400">
              <h3 className="text-xl font-semibold text-black mb-2 text-justify">
                {book.title}
              </h3>
              <p className="text-gray-900 mb-4 text-justify">
                {book.description.slice(0, 140)}...
              </p>
              <Link href={`/books/${book?.id}`}>
                <Button className="text-white px-4 py-2 rounded bg-cyan-400 hover:bg-cyan-600 transition duration-300 mt-2">
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
