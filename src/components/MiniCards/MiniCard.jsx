import './miniCards.css'

import { useState } from "react";

export default function MiniCards() {
    const [miniCards] = useState([
        {
            id: 1,
            number: 34,
            text: "buildings finsihed now"
        },
        {
            id: 2,
            number: 12,
            text: "years experience"
        },
        {
            id: 3,
            number: 24,
            text: "awards won 2023"
        }
    ])

   return(
     <div className="miniCards-wrapper container flex">
        {miniCards.map((item) => {
            return(
                <div key={item.id} className="minicard-content flex">
                    <h4>
                        {item.number}
                    </h4>
                    <p>
                        {item.text}
                    </p>
                </div>
            )
        })}
      </div>
   )
}