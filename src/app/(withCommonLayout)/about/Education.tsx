import Title from "@/components/ui/Title";
import { educations } from "./aboutData";
import Link from "next/link";
import ListItem from "@/components/ui/ListItem";

const Education = () => {
  return (
    <section className="py-8 ">
      <Title title="Early Life and Education" />

      <p className="text-justify">
        Abdullah al-Ahsan was born in East Pakistan (Bangladesh), and from a
        young age, he exhibited a keen interest in history and international
        affairs. He completed his educations from:
      </p>

      <div>
        {educations.map((edu, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-lg font-semibold text-cyan-600">
              {edu.degree}
            </h3>
            <div className=" mt-2">
              <Link
                href={edu.url}
                className="hover:text-blue-400 hover:underline"
              >
                <ListItem item={`${edu.institution}, ${edu.location}`} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
