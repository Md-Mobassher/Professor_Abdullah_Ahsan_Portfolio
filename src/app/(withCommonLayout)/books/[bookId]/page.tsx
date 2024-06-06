import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ListItem from "@/components/ui/ListItem";
import assets from "@/assets";
import { booksData } from "../booksData";
import PageTitle from "@/components/ui/PageTitle";

type BookParams = {
  params: {
    bookId: string;
  };
};

const BookDetailsPage = ({ params }: BookParams) => {
  const book = booksData.find((b) => b.id === params.bookId);

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="">
      <PageTitle title="Book Details" />
      <div className="flex flex-col lg:flex-row md:flex-row items-center lg:items-start lg:gap-10 gap-5 md:gap-8">
        <div className="lg:w-1/3 md:w-1/3 ">
          {book.image ? (
            <Image
              src={book.image}
              alt={book.title}
              className="rounded-lg shadow-xl border border-gray-300"
              width={400}
              height={500}
            />
          ) : (
            <Image
              src={assets.image.noImage}
              alt="no image"
              className="rounded-lg shadow-xl border border-gray-300"
              width={400}
              height={400}
            />
          )}
        </div>
        <div className="lg:ml-8 mt-6 lg:mt-0 lg:w-2/3 md:w-2/3">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 text-cyan-500">
            {book.title}{" "}
            {book?.edition && (
              <span className="text-cyan-300 lg:text-3xl md:text-2xl text-xl font-semibold">
                {book.edition}
              </span>
            )}
          </h1>
          {book.author && (
            <p className="text-lg mb-5">
              by{" "}
              <span className="text-blue-400 font-semibold text-md">
                {book.author}
              </span>
            </p>
          )}
          <p className="lg:text-lg text-md text-justify text-gray-700 mb-4">
            {book.description}
          </p>
          {book.list &&
            book.list.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          <div className="flex gap-5 lg:mt-5 mt-4">
            {book?.url && (
              <Link href={book.url} target="_blank">
                <Button className="text-white px-4 py-2 rounded bg-teal-400 hover:bg-teal-600 transition duration-300">
                  View Book
                </Button>
              </Link>
            )}
            {book?.buy && (
              <Link href={book.buy} target="_blank">
                <Button className="text-white px-4 py-2 rounded bg-blue-400 hover:bg-blue-600 transition duration-300">
                  Buy This Book
                </Button>
              </Link>
            )}
            <Link href="/books">
              <Button className="text-white px-4 py-2 rounded bg-cyan-400 hover:bg-cyan-600 transition duration-300 ">
                Back to Books
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
