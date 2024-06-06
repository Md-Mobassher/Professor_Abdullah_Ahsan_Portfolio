import PageTitle from "@/components/ui/PageTitle";
import ListItem from "@/components/ui/ListItem";
import { affiliationData } from "./experienceData";

const Affiliations = () => {
  return (
    <div className="lg:mt-16  md:mt-14 mt-10">
      <PageTitle title="Affiliations" />
      <div className="lg:p-8 md:p-6 p-4 border rounded-lg shadow-lg hover:shadow-gray-500 hover:shadow-lg border-gray-300 hover:border-gray-500 hover:text-black flex flex-col justify-between">
        {affiliationData.map((affiliation, index) => (
          <ListItem
            key={index}
            item={`${affiliation.organization}, ${affiliation.role}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Affiliations;
