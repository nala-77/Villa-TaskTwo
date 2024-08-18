import "./Video.css";


import Title from "../Title/Title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay
} from "@fortawesome/free-solid-svg-icons";

import Pic from "./../../../public/images/video-frame.jpg"

export default function Video() {
  return (
    <section className="vedio-section background">
      <Title sub_title="video view" title="get closer view & different feeling" />

      <div className="vedio-frame">
        <img src={Pic} alt="video-frame" />
        <div className="vedio-icon">
        <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
      
    </section>
  );
}
