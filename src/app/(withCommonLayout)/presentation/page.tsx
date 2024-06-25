import PageTitle from "@/components/ui/PageTitle";
import { presentationsData } from "./presentationData";
import Link from "next/link";
import Title from "@/components/ui/Title";

const PresentationPage = () => {
  return (
    <div>
      <PageTitle title="Presentation" />
      <div className="grid-cols-1 gap-5 grid">
        {presentationsData.map((presentation, index) => (
          <div
            key={index}
            className="lg:p-8 md:p-6 p-4 border rounded-lg shadow-lg hover:shadow-gray-500 hover:shadow-lg border-gray-300 hover:border-gray-500 hover:text-black flex flex-col justify-between"
          >
            <Title title={presentation.title} />
            {presentation.link && (
              <Link
                href={presentation.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Link:</strong>{" "}
                <span className="text-blue-400 hover:text-blue-500 cursor-pointer">
                  {presentation.link}
                </span>
              </Link>
            )}

            {presentation.location && (
              <p className="mt-2">
                <strong>Location: </strong>
                {presentation.location}{" "}
                {presentation.year && <span>in {presentation.year}</span>}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentationPage;
