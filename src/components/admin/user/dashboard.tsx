import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import localFont from "next/font/local";
import { Person } from "@mui/icons-material";

export const gameFont = localFont({
	src: "../../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
	src: "../../../../public/fonts/futura medium bt.ttf",
});

const ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

interface User {
	id: number;
	email: string;
	username: string;
	summary: string;
	motivation: string;
	github: string;
	linkedin: string;
}

const getUserInfo = async (user: string): Promise<User | null> => {
	try {
		const response = await fetch(`${ENDPOINT}/users?user=${user}`);
		const data: User[] = await response.json();
		return data[0] ?? null;
	} catch (error) {
		console.error("Error fetching roles:", error);
		// Handle the error or return a default value
		return null;
	}
};

const useUserData = (user: string | undefined) => {
	const [userInfo, setUserInfo] = useState<User | null>(null);

	const fetchData = useCallback(async (user: string) => {
		try {
			const [userInfoData] = await Promise.all([getUserInfo(user)]);
			setUserInfo(userInfoData);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}, []);

	return { userInfo, fetchData };
};

export default function Dashboard() {
	const router = useRouter();
	const user = router.query?.user as string | undefined;
	console.log("nvar user", user);
	const [username, setUsername] = useState(user);

	const { userInfo, fetchData } = useUserData(user);

	useEffect(() => {
		if (router.isReady) {
			const profile =
				user || (process.env.NEXT_PUBLIC_DEFAULT_PROFILE as string);
			setUsername(profile);
			fetchData(profile);
		}
	}, [router.isReady, user, fetchData]);

	return (
		<div className="flex flex-col m-10">
			<div className={gameFont.className}>
				<h1 className="text-6xl">{"> Dasboard"}</h1>
			</div>
			<div className="flex justify-center bg-neutral-800 m-8 rounded-lg flex flex-col">
				<div className="m-8">
					<Link
						href={
							username
								? `/admin/${username}/profile`
								: `/admin/${username}/dashboard`
						}
					>
						<Person className="m-2" fontSize="large" />
						<p>Profile</p>
					</Link>
					<Link
						href={
							username
								? `/admin/${username}/messages`
								: `/admin/${username}/dashboard`
						}
					>
						<Person className="m-2" fontSize="large" />
						<p>List of Emails</p>
					</Link>
				</div>
				<div className="m-10 flex flex-col"></div>
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
