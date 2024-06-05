import { ArrowBigRight } from "lucide-react";

const ListItem = ({ item }: { item: string }) => {
  return (
    <div className="flex mb-1 justify-start items-start">
      <ArrowBigRight className="w-10 mr-2" />
      {item}
    </div>
  );
};

export default ListItem;
