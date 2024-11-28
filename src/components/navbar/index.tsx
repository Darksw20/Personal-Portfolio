import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Home, Person, Settings, Work, Phone } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
	const router = useRouter();
	const user = router.query?.user as string | undefined;
	console.log("nvar user", user);
	const [username, setUsername] = useState(user);

	useEffect(() => {
		if (router.isReady) {
			const profile =
				user || (process.env.NEXT_PUBLIC_DEFAULT_PROFILE as string);
			setUsername(profile);
		}
	}, [router.isReady, user]);

	return (
		<aside className="container py-6 flex flex-col sidebar bg-neutral-900 grid-rows-3 justify-between w-16 h-screen sticky top-0 ">
			<div className="flex flex-col place-items-center">
				<Link href={username ? `/${username}/home` : "/"}>
					<Home fontSize="large" />
				</Link>
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
				<Link href={"https://github.com/Darksw20"}>
					<Image
						className="m-2"
						src="/img/github.png"
						width={50}
						height={50}
						alt="Github"
					/>
				</Link>

				<Link href={"https://www.linkedin.com/in/ricardonavi/"}>
					<Image
						className="m-2"
						src="/img/linkedin.png"
						width={50}
						height={50}
						alt="Linkedin"
					/>
				</Link>
			</ul>
		</aside>
	);
}
