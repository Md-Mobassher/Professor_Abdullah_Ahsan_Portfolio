import PageTitle from "@/components/ui/PageTitle";
import ListItem from "@/components/ui/ListItem";
import { additionalExperienceData } from "./experienceData";

const AdditionalExperience = () => {
  return (
    <div className="lg:mt-16  md:mt-14 mt-10">
      <PageTitle title="Additional Experiences" />
      <div className="lg:p-8 md:p-6 p-4 border rounded-lg shadow-lg hover:shadow-gray-500 hover:shadow-lg border-gray-300 hover:border-gray-500 hover:text-black flex flex-col justify-between">
        {additionalExperienceData.map((experience, index) => (
          <ListItem
            key={index}
            item={`${experience.title}, ${experience.institution}, ${experience.location}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdditionalExperience;
