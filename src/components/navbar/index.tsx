import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="sidebar-navigation">
        <nav className="sidebar">
          <div className="sidebar-header">
            <a href="<?php echo($url); ?>">
              <i className="material-icons md-36">home</i>
            </a>
          </div>

          <ul className="list-unstyled components">
            <li className="active">
              <a href="<?php echo($url); ?>about.php">
                <i className="material-icons md-36">person</i>
              </a>

              <a href="<?php echo($url); ?>skills.php">
                <i className="material-icons md-36">settings</i>
              </a>

              <a href="<?php echo($url); ?>work.php">
                <i className="material-icons md-36">work</i>
              </a>

              <a href="<?php echo($url); ?>contact.php">
                <i className="material-icons md-36">phone</i>
              </a>
            </li>
          </ul>
          <ul className="list-unstyled components">
            <a href="https://twitter.com/navi_rick"></a>

            <a href="https://github.com/Darksw20"></a>

            <a href="https://www.linkedin.com/in/ricardonavi/"></a>

            <a href="https://www.google.com"></a>
          </ul>
        </nav>
      </div>
    </>
  );
}
