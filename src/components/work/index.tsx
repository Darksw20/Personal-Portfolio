import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Card from "./card";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const gameFont = localFont({
  src: "../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
  src: "../../../public/fonts/futura medium bt.ttf",
});

const ROLES = [
  { name: "All Roles", value: "all" },
  { name: "Web Developer", value: "web" },
  { name: "Mobile Developer", value: "mobile" },
  { name: "UX/UI Designer", value: "uiux" },
  { name: "Project Manager", value: "pm" },
  { name: "Game Developer", value: "games" },
  { name: "Devops", value: "devops" },
  { name: "Photography", value: "photo" },
];

const PROJECTS = [
  {
    name: "Huaro Web System",
    src: "/img/Huaro.JPG",
    description:
      "Web system for organizers to automate scoring process in sports championship.",
    categories: ["web", "mobile", "uiux", "pm"],
  },
  {
    name: "Port1",
    src: "/img/HuaroM.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    categories: ["photo"],
  },
];

const getProjects = () => {
  return PROJECTS;
};

export default function Work() {
  const [select, setSelectState] = useState("all");

  const handleSelect = (e: any) => {
    console.log("target: ", e.target.value);
    setSelectState(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col m-10">
        <div className={"flex flex-row " + gameFont.className}>
          <h1 className="text-6xl">{"> My Work As"}</h1>
          <div className="self-center m-4">
            <select defaultValue={select} onChange={handleSelect}>
              {ROLES.map((role, idx) => {
                return (
                  <option key={role.name + idx} value={role.value}>
                    {role.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="rows subtitles">
          {PROJECTS.filter(
            (project) => select === "all" || project.categories.includes(select)
          ).map((project: any, idx: any) => {
            return (
              <Card
                key={project + idx}
                name={project.name}
                src={project.src}
                description={project.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
