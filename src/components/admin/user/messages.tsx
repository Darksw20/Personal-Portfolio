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

export default function Messages() {
  const router = useRouter();
  const user = router.query?.user as string | undefined;
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [userMessages, setUserMessages] = useState<any>(null);

  useEffect(() => {
    fetch(`${ENDPOINT}/contacts?user=humberto`)
      .then((response) => response.json())
      .then((res) => {
        setDataIsLoading(false);
        setUserMessages(res);
      });
  }, []);

  return (
    <div className="flex flex-col m-10">
      <div className={gameFont.className}>
        <h1 className="text-6xl">{"> Messages"}</h1>
      </div>
      <div className="flex justify-center bg-neutral-800 m-8 rounded-lg flex flex-col">
        {userMessages && (
          <ul className="p-4">
            {userMessages.map((msg: any) => (
              <li className="mb-4" key={msg.name}>
                <p>
                  <strong>Name:</strong> {msg.name}
                </p>
                <p>
                  <strong>Email:</strong> {msg.email}
                </p>
                <p>
                  <strong>Message:</strong> {msg.message}
                </p>
              </li>
            ))}
          </ul>
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

//add projects
//delete projects
//modify projects
//see projects

//add roles
//delete roles
//modify roles
//see roles
