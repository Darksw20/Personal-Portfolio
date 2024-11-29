import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import localFont from "next/font/local";
import { Didact_Gothic } from "next/font/google";

export const gameFont = localFont({
  src: "../../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
  src: "../../../../public/fonts/futura medium bt.ttf",
});

const ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

export default function Profile() {
  const router = useRouter();
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [skillsList, setSkillsList] = useState(null);
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillPercentage, setNewSkillPercentage] = useState("");
  const [newSkillType, setNewSkillType] = useState("");

  const user = router.query?.user as string | undefined;

  useEffect(() => {
    fetch(`${ENDPOINT}/skills?user=${user}`)
      .then((response) => response.json())
      .then((res) => {
        setDataIsLoading(false);
        setUserData(res);
        console.log(res);
      });
  }, [user]);

  useEffect(() => {
    fetch(`${ENDPOINT}/skills`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setSkillsList(res);
      });
  }, []);

  function handleSkillNameChange(e) {
    setNewSkillName(e.target.value);
  }

  function handleSkillPercentageChange(e) {
    setNewSkillPercentage(e.target.value);
  }

  function handleSkillTypeChange(e) {
    setNewSkillType(e.target.value);
  }

  function handleSubmitSkill() {
    const body = {
      name: newSkillName,
      percent: newSkillPercentage,
      type: newSkillType,
    };
    fetch(`${ENDPOINT}/skills`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        setSkillsList([...skillsList, data]);
        setNewSkillName("");
        setNewSkillPercentage("");
        setNewSkillType("");
        console.log(data);
      });
  }

  return (
    <div className="flex flex-col m-10">
      <div className={gameFont.className}>
        <h1 className="text-6xl">{"> Profile"}</h1>
      </div>
      <div className="flex justify-center bg-neutral-800 m-8 rounded-lg flex flex-col">
        {dataIsLoading && <p>Loading...</p>}
        {userData !== null && userData.softSkill.length && (
          <div className="p-2">
            <ul>
              {skillsList && skillsList.map((skill) => <li>{skill.name}</li>)}
            </ul>
          </div>
        )}
        <div className="border-t-2 p-2">
          <input
            type="text"
            name="skillName"
            className="w-full border rounded mt-2 p-2"
            value={newSkillName}
            placeholder="Skill Name"
            onChange={handleSkillNameChange}
          />
          <input
            type="text"
            name="percentage"
            className="w-full border rounded mt-2 p-2"
            value={newSkillPercentage}
            placeholder="Percentage"
            onChange={handleSkillPercentageChange}
          />
          <select
            className="w-full border rounded mt-2 p-2"
            onChange={handleSkillTypeChange}
          >
            <option value="SOFT_SKILL">Soft Skill</option>
            <option value="COURSE">Courses</option>
            <option value="LANGUAGE">Language</option>
            <option value="PROGRAMMING_LANG">Programming Language</option>
          </select>
          <button
            className="w-full border rounded my-2 p-2"
            onClick={handleSubmitSkill}
          >
            Add skill
          </button>
        </div>
      </div>
    </div>
  );
}

// <p>Login: {router.query.user ?? ""}</p>;Z

//add skills
//delete skills
//modify skills
//see skills

//add achievements
//delete achievements
//modify achievements
//see achievements

//add roles
//delete roles
//modify roles
//see roles
