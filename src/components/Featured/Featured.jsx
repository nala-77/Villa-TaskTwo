import "./Featured.css";
import { useState } from "react";

import Title from "../Title/Title";

import feature from "./../../../public/images/featured.jpg";
import featureIcon from "./../../../public/images/featured-icon.png";

import detailIcon1 from "./../../../public/images/info-icon-01.png";
import detailIcon2 from "./../../../public/images/info-icon-02.png";
import detailIcon3 from "./../../../public/images/info-icon-03.png";
import detailIcon4 from "./../../../public/images/info-icon-04.png";

export default function Featured() {
  // for accordion
  const [selected, setSelected] = useState(null);
  const [data] = useState([
    {
      id: 1,
      question: "Best Usefull links ?",
      answer: (
        <p>
          get <b>the best villa</b> websites template in HTML CSS and Bootstrao
          for your buainess. TemplateMo provides you the <a href="#">best CSS templates</a> in
          the world. please tell your friends about it.
        </p>
      ),
    },
    {
      id: 2,
      question: "how does this work ?",
      answer: "just follow our instructions...",
    },
    {
      id: 3,
      question: "Why is villa agency is the best ?",
      answer: "because we provide you villas that youve never actually seen in your life.",
    },
  ]);

  const [details] = useState([
    {
      id: 1,
      icon: detailIcon1,
      content: "225 m2",
      paragrapgh: "total flat space",
    },
    {
      id: 2,
      icon: detailIcon2,
      content: "Contract",
      paragrapgh: "contract ready",
    },
    {
      id: 3,
      icon: detailIcon3,
      content: "Payment Process",
      paragrapgh: "payment",
    },
    {
      id: 4,
      icon: detailIcon4,
      content: "Safety",
      paragrapgh: "24/7 under control",
    },
  ]);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section className="features-section flex pd-y container">
      <div className="featured-img">
        <img src={feature} alt="feature" className="feature" />
        <div className="feature-icon">
          <img src={featureIcon} alt="feature-icon" />
        </div>
      </div>

      <div className="feature-content">
        <Title sub_title="featured" title="best apartment & sea view" />

        <div className="accordion">
          {data.map((item) => {
            return (
              <div key={item.id} className="accordion-item">
                <div
                  className={
                    selected === item.id
                      ? "accordion-question question-active"
                      : "accordion-question"
                  }
                  onClick={() => toggle(item.id)}
                >
                  <h3>{item.question}</h3>
                </div>
                <p
                  className={
                    selected === item.id
                      ? "accordion-answer accordion-active"
                      : "accordion-answer"
                  }
                >
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="details-wrapper flex">
        {details.map((item) => {
          return (
            <div key={item.id} className="detail-box flex">
              <div className="detail-icon">
                <img src={item.icon} alt="icon" />
              </div>
              <div className="detail-content">
                <h4>{item.content}</h4>
                <p>{item.paragrapgh}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
