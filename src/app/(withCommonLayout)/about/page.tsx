import Image from "next/image";
import ahsan from "@/assets/images/abdullah-al-ahsan-.jpg";
import ListItem from "@/components/ui/ListItem";
import { areaOfExpertises, teachingPositions } from "./aboutData";
import PageTitle from "@/components/ui/PageTitle";
import Title from "@/components/ui/Title";
import { booksData } from "../books/components/booksData";
import Education from "./Education";

const About = () => {
  return (
    <div className="">
      <PageTitle title=" About Abdullah al-Ahsan" />
      <section className="pt-4 pb-8">
        <div className="flex lg:flex-row md:flex-row flex-col-reverse lg:gap-10 md:gap-8 gap-5">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Title title="Abdullah al-Ahsan ( Professor of Comparative Civilization )" />
              <p className="font-semibold text-xl"></p>
            </div>

            <p className="text-justify">
              Abdullah al-Ahsan is a distinguished scholar and professor known
              for his extensive contributions to the fields of history,
              comparative civilization, and international relations. With a
              career spanning over three decades, he has made significant
              impacts through his teaching, research, and published works.
            </p>
          </div>
          <div className="lg:w-[500px] w-full mx-auto flex justify-center">
            <Image
              src={ahsan}
              alt="Abdullah al-Ahsan"
              width={400}
              height={500}
            />
          </div>
        </div>
      </section>

      <Education />

      <section className="py-8">
        <Title title="Academic Career" />
        <Title title="Teaching Positions" />

        <div>
          {teachingPositions.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      </section>

      <section className="py-8">
        <div>
          <Title title="Areas of Expertise" />
          {areaOfExpertises.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      </section>

      <section className="py-8">
        <div>
          <Title title="Research Interests" />
          <p className="text-justify">
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
          <Title title="Publications" />
          <p className="text-justify">
            Abdullah al-Ahsan has authored several influential books and
            numerous articles. Some of his notable publications include:
          </p>
          <div className="list-disc">
            <div className="mt-3 mb-5">
              <strong className="mb-3">Books:</strong>
              {booksData.map((book) => (
                <ListItem key={book.id} item={book.title} />
              ))}
            </div>
            <li>
              <strong>Articles:</strong> Published in various academic journals
              and media outlets.
            </li>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div>
          <Title title="Awards and Recognitions" />
          <p className="text-justify">
            Professor Al-Ahsan has received numerous awards for his
            contributions to academia and his scholarly works. His achievements
            are recognized both within and beyond the academic community.
          </p>
        </div>
      </section>

      <section className="py-8 ">
        <div>
          <Title title="Personal Philosophy and Contributions" />
          <p className="text-justify">
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
