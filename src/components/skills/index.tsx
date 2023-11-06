import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Skills() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 subtitles">
            <h1>{"> Skills_"}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-6 ">
            <div className="row listicons">
              <ul className="list-inline">
                <div className="list-inline-item micons">
                  <Image
                    width={80}
                    height={80}
                    alt="alt"
                    src="/img/Diseños-16.png"
                  />
                  <h6>Teamwork</h6>
                </div>
                <div className="list-inline-item micons">
                  <Image
                    width={80}
                    height={80}
                    alt="alt"
                    src="/img/Diseños-17.png"
                  />
                  <h6>Leadership</h6>
                </div>
                <div className="list-inline-item micons">
                  <Image
                    width={80}
                    height={80}
                    alt="alt"
                    src="/img/Diseños-18.png"
                  />
                  <h6>Problem Solving</h6>
                </div>
                <div className="list-inline-item micons">
                  <Image
                    width={80}
                    height={80}
                    alt="alt"
                    src="/img/Diseños-19.png"
                  />
                  <h6>Critical thinking</h6>
                </div>
              </ul>
            </div>
            <div className="col-sm-6 subtitles">
              <h2>Courses</h2>
              <p>
                Diseño de Aplicaciones Digitales| CETI Guadalajara, México 05/17
              </p>

              <p>
                Diseño de Productos Digitales | CETI Guadalajara, México 09/17
              </p>
            </div>
            <div className="col-sm-6 subtitles">
              <h2>Languages</h2>
              <ul className="list-inline">
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_esp) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>Español</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_eng) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>Ingles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div
            className="col-xs-3 col-md-3 subtitles"
            // style="align-items: center;"
          >
            <div>
              <h2>Programming languages</h2>
            </div>
            <div>
              <ul className="list-inline">
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_java) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>JAVA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_c) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>C/C++</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_php) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>PHP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_html) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>HTML/CSS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_sql) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>SQL</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_assembler) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>Assembler</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-xs-4 col-md-2 offset-md-1 subtitles">
            <div className="row">
              <div>
                <h2>Tools</h2>
              </div>
              <ul className="list-inline">
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_git) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>Git</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_as) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>Android Studio</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_illustrator) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>Illustrator</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_photoshop) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>Photoshop</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-inline-item">
                  <div
                    className="progress"
                    data-percentage="<?php echo($s_office) ?>"
                  >
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div
                      className="progress-value"
                      // style="margin:auto;"
                    >
                      <div>
                        <span>Office</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
