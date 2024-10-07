import { useRouter } from "next/router";

export default function Admin() {
	const router = useRouter();
	return <p>Post: {router.query.user ?? ""}</p>;
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
