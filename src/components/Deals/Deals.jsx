import "./Deals.css";
import { useEffect, useState } from "react";

import Title from "../Title/Title";

import apartment from "./../../../public/images/deal-01.jpg";
import villa from "./../../../public/images/property-03.jpg";
import penthouse from "./../../../public/images/property-04.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Deals() {
  const [items] = useState([
    {
      id: 1,
      type: "apartment",
      img: apartment,
      desc1:
        "Lorem ipsum dolor sit amet  perferendis quaerat dolores autem nulla eos adipisci doloremque eligendi, labore doloribus consequuntur dicta?",
      desc2:
        "Lorem ipsum, dolor sores in  eaque pariatur qui doloremque, corporis velit a cum.",
      flatSpace: "155 m2",
      floorNumber: "26th",
      rooms: "4",
      availability: "yes",
      paymentProcess: "Credit Card",
    },
    {
      id: 2,
      type: "villa House",
      img: villa,
      desc1:
        "Lorem ipsum dolor sit amet consectetur ficiis corrupti optio dolore doloremque id soluta quos cumque, consequatur iure, ut maxime consequuntur veritatis voluptatem animi.",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adudantium, dodi fugiat ullam asperiores facere tenetur autem a vitae minus atque rem cum architecto eaque.",
      flatSpace: "385 m2",
      floorNumber: "26th",
      rooms: "8",
      availability: "no",
      paymentProcess: "Personal",
    },
    {
      id: 3,
      type: "penthouse",
      img: penthouse,
      desc1:
        "Lorem ipsum dolor sit lorem nemo aspernatur odit magnam doloribus cupiditate, fuga necessitatibus voluptatibus eum numquam, obcaecati recusandae?",
      desc2:
        "Lorem ipsum dolor sit amet consectetuerspicia necessitatibus, sed, facere quaerat vitae cum sunt omnis beatae temporibus fugiat iusto aspernatur explicabo obcaecati?",
      flatSpace: "185 m2",
      floorNumber: "26th",
      rooms: "2",
      availability: "yes",
      paymentProcess: "Bank",
    },
  ]);

  const [category, setCategory] = useState(items);
  const [className, setClassName] = useState(false);
  const handleBtns = (e) => {
    let word = e.target.value;

    if (word === "penthouse") {
      const filtered = items.filter((item) => item.type === "penthouse");
      setClassName(true);
      // let c = true;
      // setClassName("deal-filter-btn filter-btn-active")
      setCategory(filtered);
    } else if (word === "apartment") {
      const filtered = items.filter((item) => item.type === "apartment");
      // let c = true;
      // setClassName("deal-filter-btn filter-btn-active")
      setClassName(true);
      setCategory(filtered);
    } else if (word === "villa House") {
      const filtered = items.filter((item) => item.type === "villa House");
      // let c = true;
      // setClassName("deal-filter-btn filter-btn-active")
      setClassName(true);
      setCategory(filtered);
    }
  };

  useEffect(() => {
    const filtered = items.filter((item) => item.type === "apartment");
    setCategory(filtered);
    // console.log(items[0])
  }, []);

  return (
    <section className="Deal-section pd-y container">
      <div className="deal-header-parent flex">
        <Title sub_title="best deal" title="find your best deal right now!" />
        <div className="deal-filters">
          <button
            className={
              className == true
                ? "deal-filter-btn filter-btn-active"
                : "deal-filter-btn"
            }
            value="apartment"
            onClick={handleBtns}
          >
            apartment
          </button>
          <button
            className={
              className == true
                ? "deal-filter-btn filter-btn-active"
                : "deal-filter-btn"
            }
            value="villa House"
            onClick={handleBtns}
          >
            villa House
          </button>
          <button
            className={
              className == true
                ? "deal-filter-btn filter-btn-active"
                : "deal-filter-btn"
            }
            value="penthouse"
            onClick={handleBtns}
          >
            penthouse
          </button>
        </div>
      </div>

      <div className="deal-wrapper">
        {category.map((item) => {
          return (
            <div key={category.id} className="deal-content flex">
              <div className="deal-details flex">
                <ul>
                  <li>
                    total flat space: <span>{item.flatSpace}</span>
                  </li>
                  <li>
                    floor number: <span>{item.floorNumber}</span>
                  </li>
                  <li>
                    number of rooms: <span>{item.rooms}</span>
                  </li>
                  <li>
                    parking available: <span>{item.availability}</span>
                  </li>
                  <li>
                    payment process: <span>{item.paymentProcess}</span>
                  </li>
                </ul>
              </div>
              <div className="deal-img">
                <img src={item.img} alt="deal" />
              </div>

              <div className="deal-description">
                <h4>extra info about property</h4>
                <p className="deal-desc1">{item.desc1}</p>
                <p className="deal-desc2">{item.desc2}</p>
                <div className="schedule">
                  <FontAwesomeIcon icon={faCalendar} className="calender" />
                  <a href="#">schedule a visit</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
