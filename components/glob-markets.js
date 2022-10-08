// images
import SRI from "../assets/flags/sri-lanka.png";
import CNA from "../assets/flags/canada.png";
import MLY from "../assets/flags/malaysia.png";
import KNY from "../assets/flags/kenya.png";
import CON from "../assets/flags/congo.png";
import KZH from "../assets/flags/kazahstan.png";
import USA from "../assets/flags/usa.png";

// next-image
import Image from "next/image";

export default function GlobMarkets() {
  return (
    <section className="global-markets">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>Our Global Markets</h1>
          </div>
          <div className="global-markets-main">
            <div className="market">
              <figure className="flag">
                <Image src={SRI} />
              </figure>
              <div className="market-name">
                <span>Sri Lanka (MALIBAN BISCUIT MANUFACTORIES, LTD)</span>
              </div>
            </div>
            <div className="market">
              <figure className="flag">
                <Image src={CNA} />
              </figure>
              <div className="market-name">
                <span>Canada (Canpressco)</span>
              </div>
            </div>
            <div className="market">
              <figure className="flag">
                <Image src={MLY} />
              </figure>
              <div className="market-name">
                <span>Malaysia (Antara Commodities)</span>
              </div>
            </div>
            <div className="market">
              <figure className="flag">
                <Image src={KNY} />
              </figure>
              <div className="market-name">
                <span>Kenya (Pwani Oil Products)</span>
              </div>
            </div>
            <div className="market">
              <figure className="flag">
                <Image src={CON} />
              </figure>
              <div className="market-name">
                <span>Republic of Congo (Dadanada Croup)</span>
              </div>
            </div>
            <div className="market">
              <figure className="flag">
                <Image src={KZH} />
              </figure>
              <div className="market-name">
                <span>Kazahstan (Food Baker, LB)</span>
              </div>
            </div>
            <div className="market">
              <figure className="flag">
                <Image src={USA} />
              </figure>
              <div className="market-name">
                <span>United States (Tropical Traditions)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
