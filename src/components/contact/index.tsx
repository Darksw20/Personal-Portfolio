import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
export const gameFont = localFont({
	src: "../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
	src: "../../../public/fonts/futura medium bt.ttf",
});

const ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

export default function Contact() {
	const router = useRouter();
	const user = router.query?.user ?? process.env.NEXT_PUBLIC_DEFAULT_PROFILE;

	// State to manage form data
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	// Handle form submission
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const payload = {
			profile: user,
			name,
			email,
			title,
			message,
		};

		try {
			const response = await fetch(`${ENDPOINT}/contact`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (response.ok) {
				console.log("Message sent successfully");
				// Optionally clear the form or show a success message
			} else {
				console.error("Failed to send message");
			}
		} catch (error) {
			console.error("An error occurred while sending the message", error);
		}
	};

	return (
		<div className="flex flex-col m-10">
			<div className={gameFont.className}>
				<h1 className="text-6xl">{"> Contact Me_"}</h1>
			</div>
			<div className="flex justify-center bg-neutral-800 m-8 rounded-lg flex flex-col">
				<div className="m-10">
					<p>
						If you have any question, please don’t hesitate to contact using the
						form below...
					</p>
				</div>
				<div className="m-8">
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<div className="form-group m-8 self-center">
							<input
								type="text"
								className="form-control"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="form-group m-8 self-center">
							<input
								type="email"
								className="form-control"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group m-8 self-center">
							<input
								type="text"
								className="form-control"
								placeholder="Title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="form-group m-8 self-center">
							<textarea
								className="form-control"
								placeholder="Message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</div>
						<div className="titles self-center">
							<button
								type="submit"
								style={{
									border: "2px solid white",
									borderRadius: "6px",
									padding: "10px",
									fontSize: "larger",
								}}
							>
								{"Send"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
