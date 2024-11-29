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

export default function Register() {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [repassword, setRePassword] = useState<string>("");

	// Handle form submission
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const payload = {
			email,
			username,
			password,
		};
		if (password !== repassword) {
			console.error("Passwords don't match");
			return;
		}

		try {
			console.log({
				method: "POST",
				body: JSON.stringify(payload),
			});
			const response = await fetch(`${ENDPOINT}/register`, {
				method: "POST",
				body: JSON.stringify(payload),
			});

			if (response.ok) {
				console.log("Logged");
				// Send to user dashboard
				router.push(`/admin/${username}/dashboard`);
			} else {
				console.error("Failed to Login");
			}
		} catch (error) {
			console.error("An error occurred while Login", error);
		}
	};

	return (
		<div className="flex flex-col m-10">
			<div className={gameFont.className}>
				<h1 className="text-6xl">{"> Register"}</h1>
			</div>
			<div className="flex justify-center bg-neutral-800 m-8 rounded-lg flex flex-col">
				<div className="m-8">
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<div className="form-group m-8 self-center">
							<input
								type="text"
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
						<div className="form-group m-8 self-center">
							<input
								type="password"
								className="form-control"
								placeholder="Retype Password"
								value={repassword}
								onChange={(e) => setRePassword(e.target.value)}
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
					<p>If you already have an account please login...</p>
					<div className="titles self-center">
						<Link href="/login">
							<button
								style={{
									border: "2px solid white",
									borderRadius: "6px",
									padding: "10px",
									fontSize: "larger",
								}}
							>
								{"Login"}
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
