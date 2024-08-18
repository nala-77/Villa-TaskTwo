import "./Properties.css";
import { useState } from "react";

import Title from "../Title/Title";

import propertyOne from "./../../../public/images/property-01.jpg";
import propertyTwo from "./../../../public/images/property-02.jpg";
import propertyThree from "./../../../public/images/property-03.jpg";
import propertyFour from "./../../../public/images/property-04.jpg";
import propertyFive from "./../../../public/images/property-05.jpg";
import propertySix from "./../../../public/images/property-06.jpg";

export default function Properties() {
  const [properties] = useState([
    {
      id: 1,
      img: propertyOne,
      typeOfVilla: "luxury villa",
      price: "2.260.000",
      location: "18 new street miami, OR 97219",
      bedrooms: "8",
      bathrooms: "8",
      area: "545m2",
      floor: "3",
      parking: "6 spots",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 2,
      img: propertyTwo,
      typeOfVilla: "luxury villa",
      price: "1.180.000",
      location: "54 mid street florida, OR 27001",
      bedrooms: "5",
      bathrooms: "4",
      area: "225m2",
      floor: "3",
      parking: "10 spots",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 3,
      img: propertyThree,
      typeOfVilla: "luxury villa",
      price: "1.180.000",
      location: "28 old street miami, OR 38540",
      bedrooms: "5",
      bathrooms: "4",
      area: "225m2",
      floor: "3",
      parking: "10 spots",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 4,
      img: propertyFour,
      typeOfVilla: "apartment",
      price: "584.500",
      location: "12 new street miami, OR 12650",
      bedrooms: "4",
      bathrooms: "3",
      area: "125m2",
      floor: "25th",
      parking: "2 cars",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 5,
      img: propertyFive,
      typeOfVilla: "penthouse",
      price: "925.600",
      location: "34 beach street miami, OR 42680",
      bedrooms: "4",
      bathrooms: "4",
      area: "180m2",
      floor: "38th",
      parking: "2 cars",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 6,
      img: propertySix,
      typeOfVilla: "modern cando",
      price: "450.000",
      location: "22 new street portland, OR 16540",
      bedrooms: "3",
      bathrooms: "2",
      area: "165m2",
      floor: "26th",
      parking: "3 cars",
      // for scedualling a visit
      link: "#",
    },
  ]);
  return (
    <section id="properties" className="pd-y">
      <Title
        sub_title="properties"
        title="we provide the best property you like"
      />

      <div className="properties-wrapper flex container">
        {properties.map((item) => {
          return (
            <div key={item.id} className="property-card">
              {/* <div className="property-img"> */}
              <img src={item.img} alt="propery" />
              {/* </div> */}
              <div className="property-price flex">
                <p>{item.typeOfVilla}</p>
                <span>&#x24;{item.price}</span>
              </div>
              <h3 className="property-location">{item.location}</h3>
              <ul className="property-details flex">
                <li>
                  bedrooms:
                  <span>{item.bedrooms}</span>
                </li>
                <li>
                  bathrooms: 
                  <span>{item.bathrooms}</span>
                </li>
                <li>
                  area: 
                  <span>{item.area}</span>
                </li>
                <li>
                  floor: 
                  <span>{item.floor}</span>
                </li>
                <li>
                  parking: 
                  <span>{item.parking}</span>
                </li>
              </ul>
              <a className="property-link" href={item.link}>
                schedual a visit
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
