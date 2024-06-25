"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { articlesData } from "./articleData";
import Title from "@/components/ui/Title";
import { TArticle } from "@/types";

const Articles = () => {
  const articlesName: string[] = Object.keys(articlesData);
  const [selectedArticles, setSelectedArticles] = useState(articlesName[0]);
  const selectedArticle: TArticle[] = (articlesData as any)[selectedArticles];

  return (
    <>
      <div className="w-full lg:mb-10 md:mb-8 mb-6">
        <ul className="flex flex-wrap items-center justify-center  lg:gap-5 md:gap-4 gap-3">
          {articlesName.map((name) => (
            <li
              onClick={() => setSelectedArticles(name)}
              className={
                name === selectedArticles
                  ? "border border-cyan-500 text-md py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition duration-500 lg:px-7 md:px-5 px-4 uppercase cursor-pointer"
                  : "border border-cyan-500 text-md py-2 bg-white  hover:bg-cyan-600 text-cyan-600 hover:text-white rounded-lg transition duration-500 lg:px-7 md:px-5 px-4 uppercase cursor-pointer"
              }
              key={name}
            >
              {name === "academic" && (
                <button className="uppercase font-semibold">
                  Academic Articles & Book Chapters
                </button>
              )}
              {name === "oped" && (
                <button className="uppercase font-semibold">
                  Magazine Articles & Op-eds
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        {selectedArticle.map((article, index) => (
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
                href={`/articles/${selectedArticles}/${encodeURIComponent(
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
    </>
  );
};

export default Articles;
