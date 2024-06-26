export type TArticle = {
  title: string;
  publication: string;
  editor: string;
  publisher: string;
  publication_date: string;
  pages: string;
  url: string;
  volume: string;
  issue: string;
  doi: string;
  language: string;
  abstract: string;
  keywords: string[];
  category: string;
};

export type TPresentation = {
  title: string;
  link: string;
  location: string;
  year: number | string;
  category: string;
};
