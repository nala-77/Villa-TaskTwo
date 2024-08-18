import React, { useState } from "react";
{
  /* <FontAwesomeIcon icon={faFacebook} />
<FontAwesomeIcon icon={faTwitter} />
<FontAwesomeIcon icon={faLinkedin} />
<FontAwesomeIcon icon={faInstagram} /> */
}
import './MiniNavBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function MiniNavBar() {
  const [Contact] = useState([
    {
      id: 1,
      icon: faEnvelope,
      link: "info@company.com",
    },
    {
      id: 2,
      icon: faMap,
      link: "Sunny Isles Beach, FL 33160",
    },
  ]);

  const [ContactIcons] = useState([
    {
      id: 1,
      icon: faFacebook,
    //   here's for facebook url
      link: "#"
    },
    {
      id: 2,
      icon: faTwitter,
      link: "#"
    },
    {
      id: 3,
      icon: faLinkedin,
      link: "#"
    },
    {
      id: 4,
      icon: faInstagram,
      link: "#"
    },
  ]);
  return (
    <>
      <nav className="nav-one container flex">
        <ul className="contact links flex">
            {Contact.map((item) => {
                return (
                    <li key={item.id}>
                        <FontAwesomeIcon icon={item.icon} className="links-icon" />
                        <a href="#">{item.link}</a>
                    </li>
                )
            })}
        </ul>
        <ul className="contact icons flex">
            {ContactIcons.map((item) => {
                return (
                    <li key={item.id}>
                        <a href={item.link}><FontAwesomeIcon icon={item.icon} className="links-icon" /></a>
                    </li>
                )
            })
            
            }

        </ul>
      </nav>
    </>
  );
}
