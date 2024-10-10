import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";

import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Card from "./card";

const inter = Inter({ subsets: ["latin"] });

export const gameFont = localFont({
	src: "../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
	src: "../../../public/fonts/futura medium bt.ttf",
});

const ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

interface Role {
	name: string;
	value: string;
	image: string;
	description: string;
}

const getRoles = async (user: string): Promise<Role[]> => {
	try {
		const response = await fetch(`${ENDPOINT}/roles?user=${user}`);
		const data: Role[] = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching roles:", error);
		// Handle the error or return a default value
		return [];
	}
};

const useUserData = () => {
	const router = useRouter();
	const [roles, setRolesInfo] = useState<Role[] | null>(null);
	const [select, setSelectState] = useState("all");
	const [user, setUser] = useState<string | undefined>();

	const fetchData = useCallback(async (user: string) => {
		try {
			const [roleData] = await Promise.all([getRoles(user)]);
			roleData.unshift({
				name: "All",
				value: "all",
				image: "",
				description: "",
			});
			setRolesInfo(roleData);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}, []);

	// Wait for router to be ready and set the username
	useEffect(() => {
		if (router.isReady && router.query.user) {
			const profile = router.query.user as string;
			setUser(profile);
		}
	}, [router.isReady, router.query.user]);

	return {
		select,
		roles,
		fetchData,
		setSelectState,
		user,
		setUser,
		router,
	};
};

export default function Work() {
	const { select, roles, fetchData, setSelectState, user, router } =
		useUserData();

	const handleSelect = (e: any) => {
		setSelectState(e.target.value);
		if (router.isReady) {
			const profile =
				user || (process.env.NEXT_PUBLIC_DEFAULT_PROFILE as string);
			console.log("profile: ", profile);
		}
	};

	useEffect(() => {
		if (router.isReady && user) {
			console.log("Fetching data for user: ", user);
			fetchData(user);
		}
	}, [router.isReady, user, select, fetchData]);

	return (
		<div className="flex flex-col m-10">
			<div className={"flex flex-row " + gameFont.className}>
				<h1 className="text-6xl">{"> My Work As"}</h1>
				<div className="self-center m-4">
					<select defaultValue={select} onChange={handleSelect}>
						{roles?.map((role, idx) => (
							<option key={role.name + idx} value={role.value}>
								{role.name}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="rows subtitles">
				{roles
					?.filter((role) => select === "all" || role.name === select)
					.map((role, idx) => {
						if (role.name === "All") return null;
						return (
							<Card
								key={`${role.name} ${idx}`}
								name={role.name}
								src={role.image}
								description={role.description}
							/>
						);
					})}
			</div>
		</div>
	);
}
