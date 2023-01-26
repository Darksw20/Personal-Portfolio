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
          <div className="col-sm-12 subtitles">
            <h1>{"> Contact Me_"}</h1>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-sm-5 subtitles">
            <p>
              If you have any question, please don`t hesitate to contact using
              form below...
            </p>
            <form>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    {/* <input type="text" className="form-control" placeholder="Name">                                    */}
                  </div>
                  <div className="col">
                    {/* <input type="email" className="form-control" placeholder="Email">              */}
                  </div>
                </div>
              </div>
              <div className="form-group">
                {/* <input type="text" className="form-control" placeholder="Title"> */}
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="titles">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="col-sm-6 subtitles"></div>
        </div>
      </div>
    </>
  );
}
