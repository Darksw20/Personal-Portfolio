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

export default function Login() {
	const router = useRouter();
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	// Handle form submission
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const payload = {
			username,
			password,
		};

		try {
			console.log({
				method: "POST",
				headers: {
					"Content-Type": "application/json", // Add this header
				},
				body: JSON.stringify(payload),
			});
			const response = await fetch(`${ENDPOINT}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json", // Add this header
				},
				body: JSON.stringify(payload),
			});

			if (response.ok && response.status === 200) {
				console.log("Logged");
				// Redirect to user dashboard
				router.push(`/admin/${username}/dashboard`);
			} else {
				alert("Failed to Login");
			}
		} catch (error) {
			console.error("An error occurred while Login", error);
		}
	};

	return (
		<div className="flex flex-col m-10">
			<div className={gameFont.className}>
				<h1 className="text-6xl">{"> Login"}</h1>
			</div>
			<div className="flex justify-center bg-neutral-800 m-8 rounded-lg flex flex-col">
				<div className="m-8">
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<div className="form-group m-8 self-center">
							<input
								type="text"
								className="form-control"
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="form-group m-8 self-center">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
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
				<div className="m-10 flex flex-col">
					<p>If you dont have an account register first...</p>
					<div className="titles self-center">
						<Link href="/admin/register">
							<button
								style={{
									border: "2px solid white",
									borderRadius: "6px",
									padding: "10px",
									fontSize: "larger",
								}}
							>
								{"Register"}
							</button>
						</Link>
					</div>
				</div>
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
