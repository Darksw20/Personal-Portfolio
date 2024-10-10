import Image from "next/image";

export default function Card({ name, src, description }: any) {
	const PUBLIC = process.env.NEXT_PUBLIC_PUBLIC_ENDPOINT;
	const imageLink = `${PUBLIC}/img/${src}`;
	return (
		<div className="column web">
			<div className="content">
				<Image src={imageLink} height={100} alt="Port1" width={100} />
				<h4>{name}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}
