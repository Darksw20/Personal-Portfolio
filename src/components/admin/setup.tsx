import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

import localFont from "next/font/local";

export const gameFont = localFont({
	src: "../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
	src: "../../../public/fonts/futura medium bt.ttf",
});

const ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

export default function Setup() {
	const router = useRouter();

	return (
		<div className="flex flex-col m-10">
			<div className={gameFont.className}>
				<h1 className="text-6xl">{"> Setup"}</h1>
			</div>
			<div className="flex justify-center bg-neutral-800 m-8 rounded-lg flex flex-col">
				<div className="m-8"></div>
			</div>
		</div>
	);
}
