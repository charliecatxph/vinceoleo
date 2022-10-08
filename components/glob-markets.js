// images
import SRI from "../assets/flags/sri-lanka.png";
import CNA from "../assets/flags/canada.png";
import MLY from "../assets/flags/malaysia.png";
import KNY from "../assets/flags/kenya.png";
import NTL from "../assets/flags/netherlands.png";
import KZH from "../assets/flags/kazahstan.png";
import USA from "../assets/flags/usa.png";

// next-image
import Image from "next/image";

const markets = {
  global: {
    "Sri Lanka (MALIBAN BISCUIT MANUFACTORIES, LTD)": {
      image: SRI,
    },
    "Canada (Canpressco)": {
      image: CNA,
    },
    "Malaysia (Antara Commodities)": {
      image: MLY,
    },
    "Kenya (Pwani Oil Products)": {
      image: KNY,
    },
    "The Netherlands (Dadanada Group)": {
      image: NTL,
    },
    "Kazakhstan (Food Baker, LB)": {
      image: KZH,
    },
    "United States (Tropical Traditions)": {
      image: USA,
    },
  },
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

export default function GlobMarkets() {
  const globalMarketsArray = Object.keys(markets.global).map((d, i) => {
    return (
      <div className="market" key={i}>
        <figure className="flag">
          <Image src={markets.global[d].image} alt="flag" />
        </figure>
        <div className="market-name">
          <span>{d}</span>
        </div>
      </div>
    );
  });

  return (
    <section className="global-markets">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>Our Global Markets</h1>
          </div>
          <div className="global-markets-main">
            {globalMarketsArray.map((d, i) => {
              return d;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
