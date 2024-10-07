import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const gameFont = localFont({ src: "../../../public/fonts/upheavtt.ttf" });
const futuraFont = localFont({
	src: "../../../public/fonts/futura medium bt.ttf",
});

export default function Home() {
	const router = useRouter();
	return (
		<div className="container mx-auto basis-11/12 flex  items-center">
			<div className={gameFont.className}>
				<div className={"align-middle text-center px-10"}>
					<h1 className="text-6xl">
						{"> Hi, I´m Ricardo Navarro_" + (router.query.user ?? "")}
					</h1>
					<h2 className={futuraFont.className + " text-sm text-stone-300"}>
						{"DevOps / Fullstack Developer / Tech Enthusiast"}
					</h2>
					<br />
					<Link href="/contact">
						<button
							style={{
								border: "2px solid white",
								borderRadius: "6px",
								padding: "10px",
								fontSize: "larger",
							}}
						>
							{"Contact Me"}
						</button>
					</Link>
				</div>
			</div>
			<div className="titles">
				<Image src="/img/cuervo.png" alt="cuervo" width={250} height={250} />
			</div>
		</div>
	);
}
