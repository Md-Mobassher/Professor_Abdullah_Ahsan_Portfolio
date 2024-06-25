import PageTitle from "@/components/ui/PageTitle";
import ArticleDetails from "../components/ArticleDetails";

type TArticleParams = {
  params: {
    articleId: string[];
  };
};

const ArticleDetailsPage = ({ params }: TArticleParams) => {
  const articleTitle = params.articleId[1];
  return (
    <div className="">
      <PageTitle title="Article Details" />

      <ArticleDetails articleTitle={articleTitle} />
    </div>
  );
};

export default ArticleDetailsPage;
