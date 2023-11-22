import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const gameFont = localFont({ src: "../../../public/fonts/upheavtt.ttf" });
const futuraFont = localFont({
  src: "../../../public/fonts/futura medium bt.ttf",
});

const PROJECTS = [
  {
    date: "08-17",
    description:
      "Attended the fourth Campus Party in Guadalajara and worked as Game Designer and programmer in a project to create a game about the experience of beign in the event.",
  },
  {
    date: "09-17",
    description:
      "Developed an App to automate the scoring process at an annual private sports championship (Huaro) with an attendance of about 500 people; making results more reliable to the atendees.",
  },
  {
    date: "08-18",
    description:
      "Participated on the team that developed 100 laterns made of recyclable materials to be sent to the victims of the 19/09 earthquake in Mexico.",
  },
  {
    date: "08-18",
    description:
      "Developed an App to maintain control on the registration process of a national event for the ASMAC (Asociacion de Scouts de Mexico A.C.), with more than 10,000 participants; improving 250 times the speed of such process.",
  },
  {
    date: "09 - 18",
    description:
      "Within the frame of the Distributed Systems className, worked as a project manager of the team responsible of developing an Ecommerce.",
  },
];

export default function About() {
  return (
    <>
      <div className="container mx-auto basis-11/12 flex items-center">
        <div className={gameFont.className}>
          <div className={"align-middle text-center px-10"}>
            <h1 className="text-6xl">{"> About Me_"}</h1>
            <Image src="/img/yo-14.png" alt="yo" width={250} height={250} />
            <h3 className="text-2xl">Who Am I?</h3>
            <div className={futuraFont.className + " card-body"}>
              <p>
                Mobile & web developer from Guadalajara, Jalisco. My passion is
                software interaction and my purpose is solving real life
                problems through it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto basis-11/12 flex flex-col items-center text-justify align-middle p-16">
        <div className="m-4">
          <p>
            Since a young age I loved the way computers were changing our world
            and I wanted to become someone who could make a difference using
            technology.
          </p>
        </div>
        <div className="m-4">
          <h3>Relevant Projects.</h3>
        </div>
        <div className="m-4">
          <p>
            09 - 18 - Within the frame of the Distributed Systems className,
            worked as a project manager of the team responsible of developing an
            Ecommerce.
          </p>
        </div>
      </div>
    </>
  );
}
