"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";
import { articlesData } from "./articleData";
import Title from "@/components/ui/Title";
import { TArticle } from "@/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { space } from "postcss/lib/list";

const Articles = () => {
  const [articles] = useState<TArticle[]>(articlesData);
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [search, setSearch] = useState<string>("");

  const getFilteredArticles = () => {
    let article;

    if (!selectedCategory) {
      article = articles;
    }
    if (!search) {
      article = articles;
    }

    if (selectedCategory) {
      article = articles.filter(
        (item: TArticle) => item.category === selectedCategory
      );
    }
    if (search) {
      article = articles.filter((item: TArticle) =>
        item.title.toLowerCase().includes(search)
      );
    }

    return article;
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const uniqueCategory = Array.from(
    new Set(articles.flatMap((article) => article.category))
  );

  return (
    <>
      <div className="flex justify-between flex-wrap items-center  lg:mb-10 md:mb-8 mb-5 gap-3">
        {/* filter button */}
        <div className="flex gap-1">
          <Button
            onClick={() => setSelectedCategory(undefined)}
            className="border border-cyan-500 text-md py-3 bg-cyan-500 hover:bg-cyan-700 text-white rounded-md transition duration-500 lg:px-6 md:px-5 px-3 uppercase cursor-pointer"
          >
            All
          </Button>
          <Select onValueChange={setSelectedCategory} defaultValue="">
            <SelectTrigger className="lg:w-[180px] md:w-[170px] w-[140px] py-3  text-md hover:bg-cyan-500 bg-white text-cyan-600 border-cyan-500 hover:text-white rounded-md transition duration-500 lg:px-6 md:px-5 pl-3 pr-1 uppercase cursor-pointer text-center">
              <SelectValue className="" placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="w-[200px] ">
              <SelectGroup>
                {uniqueCategory.map((cat) => (
                  <SelectItem
                    key={cat}
                    value={cat}
                    className="py-3 m-0 text-md hover:bg-cyan-500 bg-white text-cyan-600 hover:text-white rounded-md transition duration-300 lg:px-6 md:px-5 pl-4 uppercase cursor-pointer"
                  >
                    {cat}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="hidden md:flex">
          <h4 className="text-lg font-semibold">
            Total:{" "}
            <span className="text-cyan-500">
              {getFilteredArticles()?.length || 0}
            </span>{" "}
            Article Found
          </h4>
        </div>

        {/* Search */}
        <div className="lg:w-[180px] md:w-[170px] w-[120px] ">
          <Input
            type="text"
            className="border-cyan-500 text-center"
            onChange={handleInputChange}
            placeholder="Search Article"
          />
        </div>
      </div>

      <div className="flex md:hidden justify-center mb-5">
        <h4 className="text-md font-semibold">
          Total:{" "}
          <span className="text-cyan-500">
            {getFilteredArticles()?.length || 0}
          </span>{" "}
          Article Found
        </h4>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        {getFilteredArticles()?.map((article, index) => (
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
                <strong className="text-blue-500 ml-2">
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
            <div className="flex lg:gap-5 md:gap-4 gap-4  lg:mt-5 mt-4">
              <Link
                href={`/articles/${article.category}/${encodeURIComponent(
                  article.title.split(" ").join("-")
                )}`}
              >
                <Button className="text-white px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-700 transition duration-300 ">
                  Details
                </Button>
              </Link>
              {article.url && (
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 transition duration-300">
                    View Article
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Articles;
