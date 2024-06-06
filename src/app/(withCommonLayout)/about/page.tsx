import Image from "next/image";
import ahsan from "@/assets/images/abdullah-al-ahsan-.jpg";
import { ArrowBigRight } from "lucide-react";
import ListItem from "@/components/ui/ListItem";
import { areaOfExpertises, teachingPositions } from "./AboutData";

const About = () => {
  return (
    <div className="">
      <section className="pt-4 pb-8">
        <div className="flex gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6 ">
              About Abdullah al-Ahsan
            </h2>
            <p>
              Abdullah al-Ahsan is a distinguished scholar and professor known
              for his extensive contributions to the fields of history,
              comparative civilization, and international relations. With a
              career spanning over three decades, he has made significant
              impacts through his teaching, research, and published works.
            </p>
          </div>
          <div className="w-[400px]">
            <Image
              src={ahsan}
              alt="Abdullah al-Ahsan"
              width={400}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="py-8 ">
        <div>
          <h2 className="text-2xl font-bold mb-4">Early Life and Education</h2>
          <p>
            Abdullah al-Ahsan was born in Bangladesh, and from a young age, he
            exhibited a keen interest in history and international affairs. He
            completed his Bachelors and Masters in Pakistan from University of
            Punjab and Quaid-i-Azam University in General Studies and History,
            respectively. He continued his studies at McGill University,
            Montreal, Canada, doing a Masters in Islamic Studies, and finally
            gained his Ph.D in History from the University of Michigan, Ann
            Arbor, Michigan, United States.
          </p>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Academic Career</h2>
        <h3 className="font-semibold mb-2 text-xl"> Teaching Positions:</h3>

        <div>
          {teachingPositions.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      </section>

      <section className="py-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
          {areaOfExpertises.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      </section>

      <section className="py-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Research Interests</h2>
          <p>
            Professor Al-Ahsan&apos;s research interests include the
            relationship between Western and Islamic civilizations, governance
            structures within the Muslim world, and the effectiveness of
            international organizations such as the OIC. His work often explores
            the historical contexts and contemporary challenges facing Muslim
            societies.
          </p>
        </div>
      </section>

      <section className="py-8 ">
        <div>
          <h2 className="text-2xl font-bold mb-4">Publications</h2>
          <p>
            Abdullah al-Ahsan has authored several influential books and
            numerous articles. Some of his notable publications include:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Books:</strong> &quot;Ummah or Nation: Identity Crisis in
              Contemporary Muslim Society&quot; and &quot;Qur&apos;anic Guidance
              for Good Governance: A Contemporary Perspective&quot;
            </li>
            <li>
              <strong>Articles:</strong> Published in various academic journals
              and media outlets.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Awards and Recognitions</h2>
          <p>
            Professor Al-Ahsan has received numerous awards for his
            contributions to academia and his scholarly works. His achievements
            are recognized both within and beyond the academic community.
          </p>
        </div>
      </section>

      <section className="py-8 ">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Personal Philosophy and Contributions
          </h2>
          <p>
            Abdullah al-Ahsan believes in the importance of cross-civilizational
            dialogue and understanding. His work aims to bridge gaps between
            different cultural and religious groups, promoting peace and
            cooperation. Through his teachings and writings, he has made
            substantial contributions to the understanding of governance and
            societal issues within the Muslim world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
