import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Percentage from "./percentageComponent";

import localFont from "next/font/local";
import Courses from "./courses";
import SoftSkill from "./softSkills";

const inter = Inter({ subsets: ["latin"] });
export const gameFont = localFont({
  src: "../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
  src: "../../../public/fonts/futura medium bt.ttf",
});

const SOFT_SKILLS = [
  {
    src: "/img/Diseños-16.png",
    name: "Teamwork",
  },
  {
    src: "/img/Diseños-17.png",
    name: "Leadership",
  },
  {
    src: "/img/Diseños-18.png",
    name: "Problem Solving",
  },
  {
    src: "/img/Diseños-19.png",
    name: "Critical thinking",
  },
];
const COURSES = [
  {
    name: "Diseño de Aplicaciones Digitales",
    place: "CETI Guadalajara, México",
    date: "05/17",
  },
  {
    name: "Diseño de Productos Digitales",
    place: "CETI Guadalajara, México",
    date: "09/17",
  },
];
const LANGS = [
  {
    name: "Español",
    percentage: 100,
  },
  {
    name: "Ingles",
    percentage: 80,
  },
];
const PROGRAMING_LANGS = [
  {
    name: "JAVA",
    percentage: 100,
  },
  {
    name: "C/C++",
    percentage: 100,
  },
  {
    name: "PHP",
    percentage: 100,
  },
  {
    name: "HTML/CSS",
    percentage: 100,
  },
];
const TOOLS = [
  {
    name: "Git",
    percentage: 100,
  },
  {
    name: "Illustrator",
    percentage: 100,
  },
];

const getSkills = (): any => {
  return {
    softSkill: SOFT_SKILLS,
    courses: COURSES,
    languages: LANGS,
    programingLanguages: PROGRAMING_LANGS,
    tools: TOOLS,
  };
};

export default function Skills() {
  const [state, setState] = useState(getSkills());
  return (
    <>
      <div className="flex flex-col m-10">
        <div className={gameFont.className}>
          <h1 className="text-6xl">{"> Skills_"}</h1>
        </div>
        <div className="flex flex-row m-4">
          <div className="flex-col m-4">
            <div className="flex flex-row m-2">
              {state.softSkill.map((skill: any, idx: any) => {
                return (
                  <SoftSkill
                    key={skill.name + idx}
                    src={skill.src}
                    name={skill.name}
                  />
                );
              })}
            </div>
            <div className="flex-col m-4">
              <div className={gameFont.className}>
                <h2 className="text-2xl">Courses</h2>
              </div>
              {state.courses.map((course: any, idx: any) => {
                console.log(course.name);
                return (
                  <Courses
                    key={course.name + idx}
                    name={course.name}
                    place={course.place}
                    date={course.date}
                  />
                );
              })}
            </div>
            <div className="flex-col m-4">
              <div className={gameFont.className}>
                <h2 className="text-2xl">Languages</h2>
              </div>
              {state.languages.map((lang: any, idx: any) => {
                return (
                  <Percentage
                    key={lang.name + idx}
                    name={lang.name}
                    percentage={lang.percentage}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex-col m-4">
            <div className="m-4">
              <div className={gameFont.className}>
                <h2 className="text-2xl">Programming languages</h2>
              </div>
              <div>
                <ul className="list-inline">
                  {state.programingLanguages.map((lang: any, idx: any) => {
                    return (
                      <Percentage
                        key={lang.name + idx}
                        name={lang.name}
                        percentage={lang.percentage}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="m-4">
              <div className={gameFont.className}>
                <h2 className="text-2xl">Tools</h2>
              </div>
              <ul className="list-inline">
                {state.tools.map((tool: any, idx: any) => {
                  return (
                    <Percentage
                      key={tool.name + idx}
                      name={tool.name}
                      percentage={tool.percentage}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
