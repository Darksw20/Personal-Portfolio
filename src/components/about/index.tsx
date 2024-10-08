import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import styles from "@/styles/Home.module.css";
import ProjectList from "./projects";

const inter = Inter({ subsets: ["latin"] });
export const gameFont = localFont({
	src: "../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
	src: "../../../public/fonts/futura medium bt.ttf",
});

const ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

interface Project {
	name: string;
	src: string;
	date: string;
	description: string;
	roles: string[];
}
interface User {
	id: number;
	email: string;
	username: string;
	summary: string;
	motivation: string;
}

const getProjects = async (user: string): Promise<Project[]> => {
	try {
		const response = await fetch(`${ENDPOINT}/projects?user=${user}`);
		const data: Project[] = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching roles:", error);
		// Handle the error or return a default value
		return [];
	}
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

const useUserData = (user: string | undefined) => {
	const [projects, setProjects] = useState<Project[] | null>(null);
	const [userInfo, setUserInfo] = useState<User | null>(null);

	const fetchData = useCallback(async (user: string) => {
		try {
			const [projectData, userInfoData] = await Promise.all([
				getProjects(user),
				getUserInfo(user),
			]);
			setProjects(projectData);
			setUserInfo(userInfoData);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}, []);

	return { projects, userInfo, fetchData };
};

export default function About() {
	const router = useRouter();
	const user = router.query?.user as string | undefined;

	const { projects, userInfo, fetchData } = useUserData(user);

	useEffect(() => {
		if (router.isReady) {
			const profile =
				user || (process.env.NEXT_PUBLIC_DEFAULT_PROFILE as string);
			fetchData(profile);
		}
	}, [router.isReady, user, fetchData]);

	return (
		<>
			<div className="container mx-auto basis-11/12 flex items-center">
				<div className={gameFont.className}>
					<div className={"align-middle text-center px-10"}>
						<h1 className="text-6xl">{"> About Me_"}</h1>
						<Image src="/img/yo-14.png" alt="yo" width={250} height={250} />
						<h3 className="text-2xl">Who Am I?</h3>
						<div className={futuraFont.className + " card-body"}>
							<p> {userInfo?.summary} </p>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto basis-11/12 flex flex-col items-center text-justify align-middle p-16">
				<div className="m-4">
					<p>
						{userInfo?.motivation} <br />
					</p>
				</div>
				<div className="m-4">
					<h3>Relevant Projects.</h3>
				</div>
				<div className="m-4">
					{projects?.map((project: any, idx) => {
						return (
							<ProjectList
								key={project.title + idx}
								start_date={project.start_date}
								end_date={project.end_date}
								description={project.description}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
