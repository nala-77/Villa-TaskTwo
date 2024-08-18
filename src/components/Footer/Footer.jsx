import "./Footer.css";
import { useState } from "react";

import phoneIcon from "./../../../public/images/phone-icon.png";
import emailIcon from "./../../../public/images/email-icon.png";

import Title from "../Title/Title";

export default function Footer() {
  const [data] = useState([
    {
      id: 1,
      icon: phoneIcon,
      main: "010-020-0340",
      sub: "phone Number",
    },
    {
      id: 2,
      icon: emailIcon,
      main: "info@villa.com",
      sub: "business email",
    },
  ]);
  return (
    <footer className="footer container">
      <Title sub_title="contact us" title="get in touch with our agents" />

      <div id="footer" className="footer-wrapper flex">
        <div className="footer-iframe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7248272.985366933!2d-89.0978040641957!3d27.494285680688293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20Verenigde%20Staten!5e0!3m2!1snl!2snl!4v1723988533333!5m2!1snl!2snl"></iframe>
          <div className="contact-card-parent flex">
          {data.map((item) => {
            return (
              <div key={item.id} className="contact-card flex">
               <div className="contact-icon">
               <img src={item.icon} alt="contact-icon" />
               </div>
                <div className="contact-details">
                  <h4>{item.main}</h4>
                  <p>{item.sub}</p>
                </div>
              </div>
            );
          })}
          </div>
        </div>

        <div className="footer-form">
          <form action="/submit-form" method="post">
            <div>
              <label htmlFor="fname">Full Name</label>
              <input type="text" id="fname" placeholder="Your Name..." />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Your E-mail" />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" />
            </div>

            <div>
              <label htmlFor="Message">Message</label>
              <textarea name="Message" id="Message">
                Your Message
              </textarea>
            </div>
            <input type="submit" value="Send Message"/>
          </form>
        </div>
      </div>
    </footer>
  );
}
