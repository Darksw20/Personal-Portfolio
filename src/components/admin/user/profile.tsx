import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import localFont from "next/font/local";

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

  const user = router.query?.user as string | undefined;

  useEffect(() => {
    fetch(`${ENDPOINT}/skills?user=${user}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setDataIsLoading(false);
        setUserData(res);
      });
  }, [user]);

  function EditField({ name }) {
    const [isEditing, setIsEditing] = useState(false);
    const [skillName, setSkillname] = useState(name);
    function handleClick() {
      setIsEditing(true);
    }
    const body = {
      user,
      id: "",
      name: "",
    };
    function handleKeyPress(e) {
      if (e.key === "Enter") {
        console.log(e.key);
        fetch(`${ENDPOINT}/skills`, {
          method: "PUT",
          body: JSON.stringify(body),
        })
          .then((response) => response.json)
          .then((data) => console.log(data));
        setIsEditing(false);
      }
    }
    function handleChange(e, index) {
      console.log(e.target.value);
      setSkillname(e.target.value);
    }
    return (
      <>
        {isEditing ? (
          <input
            autoFocus
            value={skillName}
            onKeyDown={handleKeyPress}
            onChange={handleChange}
          />
        ) : (
          <p onClick={handleClick}>{name}</p>
        )}
      </>
    );
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
            <h2>
              <strong>Programming Languages</strong>
            </h2>
            <ul className="p-2">
              {userData.programmingLanguages.map((skill) => (
                <li>
                  <EditField name={skill.name} />
                </li>
              ))}
            </ul>
            <h2>
              <strong>Soft Skills</strong>
            </h2>
            <ul className="p-2">
              {userData.softSkill.map((skill) => (
                <EditField name={skill.name} />
              ))}
            </ul>
            <h2>
              <strong>Languages</strong>
            </h2>
            <ul className="p-2">
              {userData.languages.map((skill) => (
                <EditField name={skill.name} />
              ))}
            </ul>
            <h2>
              <strong>Courses</strong>
            </h2>
            <ul className="p-2">
              {userData.courses.map((skill) => (
                <EditField name={skill.name} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );

  // <p>Login: {router.query.user ?? ""}</p>;
}

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
