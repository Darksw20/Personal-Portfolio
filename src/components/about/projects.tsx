import styles from "@/styles/Home.module.css";

export default function ProjectList({
	start_date,
	end_date,
	description,
}: any) {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
	};
	const start: string = new Date(start_date).toLocaleDateString("en", options);
	const end: string = end_date
		? new Date(end_date).toLocaleDateString("en", options)
		: "present";
	return (
		<p>
			{start} to {end} - {description}
		</p>
	);
}
