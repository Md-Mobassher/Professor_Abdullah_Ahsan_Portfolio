import Link from "next/link";
import { articlesData } from "./articleData";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/ui/PageTitle";
import Title from "@/components/ui/Title";

const ArticlePages = () => {
  return (
    <div className="">
      <PageTitle title="Articles / Oped" />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        {articlesData.map((article, index) => (
          <div
            key={index}
            className="lg:p-6 md:p-5 p-4 border rounded-lg shadow-lg hover:shadow-gray-500 hover:shadow-lg border-gray-300 hover:border-gray-500 hover:text-black flex flex-col justify-between"
          >
            <div>
              <div>
                <Title title={article.title} />
              </div>
              <p className="mb-2">
                by
                <strong className="text-blue-400 ml-2">
                  Abdullah al-Ahsan{" "}
                </strong>
              </p>
              <p>
                <strong>Publication:</strong> {article.publication}
              </p>
              <p>
                <strong>Publication Date:</strong> {article.publication_date}
              </p>

              {article.pages && (
                <p>
                  <strong>Pages:</strong> {article.pages}
                </p>
              )}
            </div>
            <div className="flex gap-5 lg:mt-5 mt-4">
              <Link
                href={`/articles/${encodeURIComponent(
                  article.title.split(" ").join("-")
                )}`}
              >
                <Button className="text-white px-4 py-2 rounded bg-cyan-400 hover:bg-cyan-600 transition duration-300 ">
                  Details
                </Button>
              </Link>
              {article.url && (
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-white px-4 py-2 rounded bg-blue-400 hover:bg-blue-600 transition duration-300">
                    View Article
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlePages;
