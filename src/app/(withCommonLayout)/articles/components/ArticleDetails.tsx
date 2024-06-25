import { articlesData } from "../components/articleData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TArticle } from "@/types";

type TArticleDetailsParams = {
  articleTitle: string;
};

const ArticleDetails = ({ articleTitle }: TArticleDetailsParams) => {
  let article: TArticle | undefined;

  article = articlesData.find(
    (art) => encodeURIComponent(art.title.split(" ").join("-")) === articleTitle
  );

  if (!article) {
    return (
      <div className="h-[400px] flex flex-col justify-center items-center">
        <p className="text-red-500 text-xl font-semibold mb-5">
          Article not found
        </p>
        <Link href={`/articles`}>
          <Button className="text-white px-4 py-2 rounded bg-cyan-400 hover:bg-cyan-600 transition duration-300 ">
            Back to Articles
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div
        key={article?.title}
        className="lg:p-6 md:p-5 p-4 border rounded-lg shadow-lg hover:shadow-gray-500 hover:shadow-lg border-gray-300 hover:border-gray-500 hover:text-black flex flex-col justify-between"
      >
        <div>
          <div>
            <h2 className="lg:text-2xl md:text-2xl text-xl text-cyan-500 font-semibold mb-2  ">
              {article?.title}
            </h2>
          </div>
          <p className="mb-2">
            by
            <strong className="text-blue-500 ml-2">Abdullah al-Ahsan </strong>
          </p>
          <p>
            <strong>Publication:</strong> {article?.publication}
          </p>
          <p>
            <strong>Publication Date:</strong> {article?.publication_date}
          </p>
          <p>
            <strong>Category:</strong>
            <span className="uppercase"> {article?.category}</span>
          </p>

          {article?.pages && (
            <p>
              <strong>Pages:</strong> {article?.pages}
            </p>
          )}
          {article?.volume && (
            <p>
              <strong>Volume:</strong> {article?.volume}
            </p>
          )}
          {article?.issue && (
            <p>
              <strong>Issue:</strong> {article?.issue}
            </p>
          )}
          {article?.doi && (
            <p>
              <strong>DOI:</strong> {article?.doi}
            </p>
          )}
          {article?.language && (
            <p>
              <strong>Language:</strong> {article?.language}
            </p>
          )}
          {article?.abstract && (
            <p>
              <strong>Abstract:</strong> {article?.abstract}
            </p>
          )}
          {article?.keywords.length > 0 && (
            <p>
              <strong>Keywords:</strong> {article?.keywords.join(", ")}
            </p>
          )}
        </div>
        <div className="flex lg:gap-5 md:gap-4 gap-3 lg:mt-5 mt-4">
          {article?.url && (
            <Link href={article?.url} target="_blank" rel="noopener noreferrer">
              <Button className="text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 transition duration-300">
                View Article
              </Button>
            </Link>
          )}
          <Link href={`/articles`}>
            <Button className="text-white px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-700 transition duration-300 ">
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
