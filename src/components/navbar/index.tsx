import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
	Home,
	Person,
	Settings,
	Work,
	Phone,
	Login,
	Logout,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

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

export default function Navbar() {
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

	const userId = localStorage.getItem("userId");

	return (
		<aside className="container py-6 flex flex-col sidebar bg-neutral-900 grid-rows-3 justify-between w-16 h-screen sticky top-0 ">
			<div className="flex flex-col place-items-center">
				<Link href={username ? `/${username}/home` : "/"}>
					<Home fontSize="large" />
				</Link>
				{userId ? (
					<Link href={"/login"}>
						<Login fontSize="large" />
					</Link>
				) : (
					<Link href={"/"}>
						<Logout fontSize="large" />
					</Link>
				)}
			</div>

			<ul className="flex flex-col place-items-center">
				<Link href={username ? `/${username}/about` : "/about"}>
					<Person className="m-2" fontSize="large" />
				</Link>
				<Link href={username ? `/${username}/skills` : "/skills"}>
					<Settings className="m-2" fontSize="large" />
				</Link>
				<Link href={username ? `/${username}/work` : "/work"}>
					<Work className="m-2" fontSize="large" />
				</Link>
				<Link href={username ? `/${username}/contact` : "/contact"}>
					<Phone className="m-2" fontSize="large" />
				</Link>
			</ul>
			<ul className="flex flex-col place-items-center">
				{userInfo?.github ? (
					<Link href={userInfo.github}>
						<Image
							className="m-2"
							src="/img/github.png"
							width={50}
							height={50}
							alt="Github"
						/>
					</Link>
				) : null}

				{userInfo?.linkedin ? (
					<Link href={userInfo.linkedin}>
						<Image
							className="m-2"
							src="/img/linkedin.png"
							width={50}
							height={50}
							alt="Linkedin"
						/>
					</Link>
				) : null}
			</ul>
		</aside>
	);
}
