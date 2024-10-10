import Image from "next/image";

export default function SoftSkill({ src, name }: any) {
	const PUBLIC = process.env.NEXT_PUBLIC_PUBLIC_ENDPOINT;
	const imageLink = `${PUBLIC}/img/${src}`;

	return (
		<div className="p-4">
			<Image width={80} height={80} alt="alt" src={imageLink} />
			<h6>{name}</h6>
		</div>
	);
}
