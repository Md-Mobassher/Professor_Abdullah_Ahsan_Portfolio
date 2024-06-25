import PageTitle from "@/components/ui/PageTitle";
import ArticleDetails from "../components/ArticleDetails";

type TArticleParams = {
  params: {
    articleId: string[];
  };
};

const ArticleDetailsPage = ({ params }: TArticleParams) => {
  const category = params.articleId[0];
  const articleTitle = params.articleId[1];
  return (
    <div className="">
      <PageTitle title="Article Details" />

      <ArticleDetails category={category} articleTitle={articleTitle} />
    </div>
  );
};

export default ArticleDetailsPage;
