import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<div className={"container"}>
				<div className="main row">
					<div className="col-sm-12 subtitles">
						<div>{"> About Me_"}</div>
					</div>
				</div>
			</div>
			<div className={"container"}>
				<div className="main row">
					<div className="col-xs-10 col-sm-8 col-md-6">
						<div
							className="card"
							// style="width: 18rem; background-color: black; margin-left: 40px"
						>
							{/* <img className="card-img-top" width="300px" src="styles/img/yo-14.png"> */}
							<div
								className="card-body"
								// style="text-align:center;"
							>
								<h3>Who Am I?</h3>
								<p>
									Mobile & web developer from Guadalajara, Jalisco. My passion
									is software interaction and my purpose is solving real life
									problems through it.
								</p>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-6">
						<div className="subtitles">
							<p>
								Since a young age I loved the way computers were changing our
								world and I wanted to become someone who could make a difference
								using technology.
							</p>
						</div>
						<div className="subtitles">
							<h3>Relevant Projects.</h3>
						</div>
						<div className="subtitles">
							<p>
								08-17 - Attended the fourth Campus Party in Guadalajara and
								worked as Game Designer and programmer in a project to create a
								game about the experience of beign in the event. 09-17 -
								Developed an App to automate the scoring process at an annual
								private sports championship (Huaro) with an attendance of about
								500 people; making the results more reliable to the atendees.
								08-18 - Participated on the team that developed 100 laterns made
								of recyclable materials to be sent to the victims of the 19/09
								earthquake in Mexico. 08-18 - Developed an App to maintain
								control on the registration process of a national event for the
								ASMAC (Asociacion de Scouts de Mexico A.C.), with more than
								10,000 participants; improving 250 times the speed of such
								process. 09 - 18 - Within the frame of the Distributed Systems
								className, worked as a project manager of the team responsible
								of developing an Ecommerce.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
