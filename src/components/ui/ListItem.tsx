import { ArrowBigRight } from "lucide-react";

const ListItem = ({ item }: { item: string }) => {
  return (
    <div className="flex flex-row mb-1 justify-start items-start gap-2 md:gap-4 lg:gap-5 lg:ml-4 md:ml-3 ml-2">
      <div>
        <ArrowBigRight className=" size-6" />
      </div>
      <div>
        <p className="text-justify">{item}</p>
      </div>
    </div>
  );
};

export default ListItem;
