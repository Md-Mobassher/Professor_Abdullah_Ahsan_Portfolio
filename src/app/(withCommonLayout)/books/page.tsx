import { Button } from "@/components/ui/button";
import { booksData } from "./BooksData";
import Image from "next/image";
import Link from "next/link";

const BooksPage = () => {
  return (
    <div className="pb-8">
      <h2 className="text-3xl font-bold pt-5 pb-8">
        Books by Abdullah Al-Ahsan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-5">
        {booksData.map((book, index) => (
          <div
            key={index}
            className="relative group border rounded-lg p-5 shadow-xl overflow-hidden w-full lg:h-[500px] md:h-[450px] h-[450px] flex"
          >
            <Image
              src={book.image}
              alt={book.title}
              className=" rounded-lg transition duration-300 ease-in-out transform group-hover:blur-sm flex mx-auto"
              width={400}
              height={400}
            />
            <div className="absolute inset-x-0 bottom-0 bg-slate-200 bg-opacity-60 rounded-b-lg flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-5">
              <h3 className="text-xl font-semibold text-black mb-2 text-justify">
                {book.title}
              </h3>
              <p className="text-gray-900 mb-4 text-justify">
                {book.description}
              </p>
              <Link href={`/books/${book?.id}`}>
                <Button className=" text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300">
                  Details
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
