import AdditionalExperience from "./components/AdditionalExperience";
import Affiliations from "./components/Affiliation";
import Languages from "./components/Language";
import ProfessionalExperience from "./components/ProfessionalExperience";

const ExperiencePage = () => {
  return (
    <>
      <ProfessionalExperience />
      <AdditionalExperience />
      <Affiliations />
      <Languages />
    </>
  );
};

export default ExperiencePage;
