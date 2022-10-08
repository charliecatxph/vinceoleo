// images
import PHL from "../assets/flags/philippines.png";

// next-image
import Image from "next/image";

// react
import { useState } from "react";

const markets = {
  local: [
    "JNJ Oil Industries",
    "Tantuco Enterprise",
    "Limketkai Manufacturing Corp.",
    "Oleolipo Philippines",
    "FY Sons' Inc.",
    "Unistar Oleochem.",
    "Green Life Coco Products",
    "Prosource International",
    "JChannel Ingredients",
    "San Lorenzo Coco Products",
    "Peter Paul Philippines",
    "Agri Pacific Corp.",
    "Shackleton Industries.",
    "Mega Superb Ingredients",
    "SGS Philippines",
    "Concord Scientific Corp.",
    "Berry Source Inc.",
    "Tardo Philippines",
    "TJL Handling",
    "Five R Marketing",
    "Southern Pacific Oil Mills.",
    "Tongsan Industrial Development Corp.",
    "Minola Refining Corp.",
    "Tasman Pacific Corp.",
    "Crest Agro",
    "Ostel Ingredients",
  ],
};

export default function PhilippineMarket() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="global-markets">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>Philippine Market</h1>
          </div>
          <div className="global-markets-main">
            {markets.local
              .map((d, i) => {
                return (
                  <div className="market" key={i}>
                    <figure className="flag">
                      <Image src={PHL} alt="flag" />
                    </figure>
                    <div className="market-name">
                      <span>{d}</span>
                    </div>
                  </div>
                );
              })
              .slice(0, expanded ? -1 : 9)}
          </div>
          <div className="show-more">
            <button
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              {expanded ? "collapse" : "show more"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
