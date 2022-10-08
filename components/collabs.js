// images
import B1 from "../assets/business-logos/logo1.png";
import B2 from "../assets/business-logos/logo2.png";
import B3 from "../assets/business-logos/logo3.png";
import B4 from "../assets/business-logos/logo4.png";
import B5 from "../assets/business-logos/logo5.png";
import B6 from "../assets/business-logos/logo6.png";
import B7 from "../assets/business-logos/logo7.png";
import B8 from "../assets/business-logos/logo8.png";

// next-image
import Image from "next/image";

export default function BSCollabs() {
  return (
    <section className="business-collabs">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h4>BUSINESS COLLABORATIONS</h4>
          </div>
          <div className="businesses">
            <div className="track">
              <figure className="business-logo">
                <Image src={B1} alt="B1" />
              </figure>
              <figure className="business-logo">
                <Image src={B2} alt="B2" />
              </figure>
              <figure className="business-logo">
                <Image src={B3} alt="B3" />
              </figure>
              <figure className="business-logo">
                <Image src={B4} alt="B4" />
              </figure>
              <figure className="business-logo">
                <Image src={B5} alt="B5" />
              </figure>
              <figure className="business-logo">
                <Image src={B6} alt="B6" />
              </figure>
              <figure className="business-logo">
                <Image src={B7} alt="B7" />
              </figure>
              <figure className="business-logo">
                <Image src={B8} alt="B8" />
              </figure>
              <figure className="business-logo">
                <Image src={B1} alt="B1" />
              </figure>
              <figure className="business-logo">
                <Image src={B2} alt="B2" />
              </figure>
              <figure className="business-logo">
                <Image src={B3} alt="B3" />
              </figure>
              <figure className="business-logo">
                <Image src={B4} alt="B4" />
              </figure>
              <figure className="business-logo">
                <Image src={B5} alt="B5" />
              </figure>
              <figure className="business-logo">
                <Image src={B6} alt="B6" />
              </figure>
              <figure className="business-logo">
                <Image src={B7} alt="B7" />
              </figure>
              <figure className="business-logo">
                <Image src={B8} alt="B8" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
