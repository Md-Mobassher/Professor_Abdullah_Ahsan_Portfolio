import PageTitle from "@/components/ui/PageTitle";
import { articlesData } from "../articleData";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type TArticleParams = {
  params: {
    articleId: string;
  };
};

const ArticleDetailsPage = ({ params }: TArticleParams) => {
  const article = articlesData.find((a) => a.id === Number(params.articleId));

  if (!article) {
    return <p>article not found</p>;
  }

  return (
    <div className="">
      <PageTitle title="Article Details" />

      <div
        key={article.id}
        className="lg:p-6 md:p-5 p-4 border rounded-lg shadow-lg hover:shadow-gray-500 hover:shadow-lg border-gray-300 hover:border-gray-500 hover:text-black flex flex-col justify-between"
      >
        <div>
          <div>
            <h2 className="text-2xl text-cyan-500 font-semibold mb-2  ">
              {article.title}
            </h2>
          </div>
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
          {article.volume && (
            <p>
              <strong>Volume:</strong> {article.volume}
            </p>
          )}
          {article.issue && (
            <p>
              <strong>Issue:</strong> {article.issue}
            </p>
          )}

          {article.doi && (
            <p>
              <strong>DOI:</strong> {article.doi}
            </p>
          )}
          {article.language && (
            <p>
              <strong>Language:</strong> {article.language}
            </p>
          )}
          {article.abstract && (
            <p>
              <strong>Abstract:</strong> {article.abstract}
            </p>
          )}
          {article.keywords.length > 0 && (
            <p>
              <strong>Keywords:</strong> {article.keywords.join(", ")}
            </p>
          )}
        </div>
        <div className="flex gap-5 lg:mt-5 mt-4">
          {article.url && (
            <Link href={article.url} target="_blank" rel="noopener noreferrer">
              <Button className="text-white px-4 py-2 rounded bg-blue-400 hover:bg-blue-600 transition duration-300">
                View Article
              </Button>
            </Link>
          )}
          <Link href={`/articles`}>
            <Button className="text-white px-4 py-2 rounded bg-cyan-400 hover:bg-cyan-600 transition duration-300 ">
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsPage;
