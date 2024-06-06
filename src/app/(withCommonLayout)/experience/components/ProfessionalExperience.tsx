import PageTitle from "@/components/ui/PageTitle";
import Title from "@/components/ui/Title";
import ListItem from "@/components/ui/ListItem";
import { professionalExperienceData } from "./experienceData";

const ProfessionalExperience = () => {
  return (
    <div>
      <PageTitle title="Professional Experiences" />
      <div className="grid-cols-1 gap-5 grid">
        {professionalExperienceData.map((experience, index) => (
          <div
            key={index}
            className="lg:p-8 md:p-6 p-4 border rounded-lg shadow-lg hover:shadow-gray-500 hover:shadow-lg border-gray-300 hover:border-gray-500 hover:text-black flex flex-col justify-between"
          >
            <Title title={experience.title} />
            <div className="">
              <p className="lg:text-lg text-md text-gray-600">
                {experience.institution}, {experience.location}
              </p>
              <p className="lg:text-lg text-md text-gray-600">
                {experience.start_date} - {experience.end_date}
              </p>
            </div>
            <h3 className="text-xl font-semibold lg:mt-7 md:mt-6 mt-5 text-cyan-400">
              Responsibilities:
            </h3>
            <div className="mt-2">
              {experience.responsibilities.map((responsibility, i) => (
                <ListItem key={i} item={responsibility} />
              ))}
            </div>
            <h3 className="text-xl font-semibold lg:mt-7 md:mt-6 mt-5 text-cyan-400">
              Courses Taught:
            </h3>
            <ul className="mt-2">
              {experience.courses_taught.map((course, i) => (
                <ListItem key={i} item={course} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;
