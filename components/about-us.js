// images
import Swing from "../assets/swinging-person-aboutme.png";

// next-image
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>About Us</h1>
            <div className="about-me-main">
              <figure className="image">
                <Image src={Swing} alt="Illustration" />
              </figure>
              <div className="about-me-text">
                <p>
                  <span className="bold">In the early part of 1999,</span>{" "}
                  Chevoleo Lipidtek Oils &#38; Fats Consulting Services has
                  emerged itself as a technical service provider in the fats and
                  oils industries both locally and international. It aims to
                  usher and direct major oils and fats companies particularly in
                  product development and Quality Control /Quality assurance.
                  Chevoleo Lipidtek is committed to cater quality technical
                  services to every client and integrate current innovations in
                  fats and oils.
                </p>
                <p>
                  <span className="bold">Later in 2015</span> Chevoleo Lipidtek
                  was renamed and registered as Marjevin Agri-Ventures &#38;
                  Consultancy Services. With some other Agri-products being
                  traded or customized/formulated for prospective clients.
                </p>
                <p>
                  <span className="bold">And on January 28, 2022</span> a new
                  name VinceOleo Business Consultancy Services was registerted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
