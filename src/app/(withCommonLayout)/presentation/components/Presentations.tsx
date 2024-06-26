"use client";

import Title from "@/components/ui/Title";
import { presentationsData } from "./presentationData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useState } from "react";
import { TPresentation } from "@/types";
import { Input } from "@/components/ui/input";

const Presentations = () => {
  const [presentations] = useState<TPresentation[]>(presentationsData);
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [search, setSearch] = useState<string>("");

  const getFilteredPresentations = () => {
    let presentation;

    if (!selectedCategory) {
      presentation = presentations;
    }
    if (!search) {
      presentation = presentations;
    }

    if (selectedCategory) {
      presentation = presentations.filter(
        (item: TPresentation) => item.category === selectedCategory
      );
    }
    if (search) {
      presentation = presentations.filter((item: TPresentation) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return presentation;
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const uniqueCategory = Array.from(
    new Set(presentations.flatMap((presentaion) => presentaion.category))
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
            <span className="text-cyan-500 px-1">
              {getFilteredPresentations()?.length || 0}
            </span>{" "}
            Presentaion Found
          </h4>
        </div>

        {/* Search */}
        <div className="lg:w-[180px] md:w-[170px] w-[120px] ">
          <Input
            type="text"
            className="border-cyan-500 text-center"
            onChange={handleInputChange}
            placeholder="Search Presentation"
          />
        </div>
      </div>

      <div className="flex md:hidden justify-center mb-5">
        <h4 className="text-md font-semibold">
          Total:{" "}
          <span className="text-cyan-500 px-1">
            {getFilteredPresentations()?.length || 0}
          </span>{" "}
          Presentaion Found
        </h4>
      </div>

      {/* show presentaions */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        {getFilteredPresentations()?.map((presentation, index) => (
          <div
            key={index}
            className="lg:p-8 md:p-6 p-4 border rounded-lg shadow-lg hover:shadow-gray-500 hover:shadow-lg border-gray-300 hover:border-gray-500 hover:text-black flex flex-col justify-between"
          >
            <Title title={presentation?.title} />
            {presentation?.link && (
              <Link
                href={presentation?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Link:</strong>{" "}
                <span className="text-blue-400 hover:text-blue-500 cursor-pointer">
                  {presentation?.link}
                </span>
              </Link>
            )}

            {presentation?.location && (
              <p className="mt-2">
                <strong>Location: </strong>
                {presentation?.location}{" "}
                {presentation?.year && <span>in {presentation?.year}</span>}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Presentations;
