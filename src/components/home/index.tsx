import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto basis-11/12">
      <div className="row align-items-center">
        <div className="col-sm-6 titles">
          <h1>{"> Hi, I´m Ricardo Navarro_"}</h1>
          <h2>{"Android Developer / Fullstack Developer / Tech Enthusiast"}</h2>
          <br />
          <button>{"Contact Me"}</button>
        </div>
        <div className="titles">
          <Image src="/img/cuervo.png" alt="cuervo" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
