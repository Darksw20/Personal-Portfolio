import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 subtitles">
            <h1
            // style="display:inline; margin-right: 25px;"
            >
              {"> My Work As"}
            </h1>
            <select className="dropdown">
              <option>All Roles</option>
              <option>Web Developer</option>
              <option>Mobile Developer</option>
              <option>UX/UI Designer</option>
              <option>Project Manager</option>
              <option>Game Designer</option>
              <option>Service</option>
            </select>
          </div>
        </div>
        <div className="rows subtitles">
          <div className="column web">
            <div className="content">
              <Image src="/img/Huaro.JPG" alt="Port1" width={100} />
              <h4>Huaro Web System</h4>
              <p>
                Web system for organizers to automate scoring process in sports
                championship.
              </p>
            </div>
          </div>
          <div className="column web">
            <div className="content">
              <Image src="/img/HuaroM.png" alt="Port1" />
              <h4>Port1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="column web">
            <div className="content">
              <Image src="/img/port-01.png" alt="Port1" />
              <h4>Port1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="column mobile">
            <div className="content">
              <Image src="/img/port-02.png" alt="Port1" />
              <h4>Port1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="column mobile">
            <div className="content">
              <Image src="/img/port-02.png" alt="Port1" />
              <h4>Port1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="column mobile">
            <div className="content">
              <Image src="/img/port-02.png" alt="Port1" />
              <h4>Port1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="column UIUX">
            <div className="content">
              <Image src="/img/port-03.png" alt="Port1" />
              <h4>Port1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="column UIUX">
            <div className="content">
              <Image src="/img/port-03.png" alt="Port1" />
              <h4>Port1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="column service">
            <div className="content">
              <Image src="/img/port-04.png" alt="Port1" />
              <h4>Port1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
