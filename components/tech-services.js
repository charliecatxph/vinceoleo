// images
import TS1 from "../assets/technical-serv/1.jpg";
import TS2 from "../assets/technical-serv/2.jpg";
import TS3 from "../assets/technical-serv/3.jpg";
import TS4 from "../assets/technical-serv/4.jpg";
import TS5 from "../assets/technical-serv/5.jpg";
import TS6 from "../assets/technical-serv/6.jpg";

// next-image
import Image from "next/image";

// react
import { useState, useEffect } from "react";

// framer
import { motion, AnimatePresence } from "framer-motion";

// variants
const standard = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const arr = [TS1, TS2, TS3, TS4, TS5, TS6];

export default function TechServices() {
  const [picture, setPicture] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (picture + 1 > 5) {
        setPicture(0);
      } else {
        setPicture((prev) => prev + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [picture]);
  return (
    <section className="technical-services">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>Technical Services</h1>
          </div>
          <div className="tech-serv-main">
            <div className="tech-infos">
              <figure className="image">
                {picture === 0 ? (
                  <motion.figure
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={standard}
                    key="1"
                  >
                    <Image src={arr[0]} alt="TSV" />
                  </motion.figure>
                ) : picture === 1 ? (
                  <motion.figure
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={standard}
                    key="2"
                  >
                    <Image src={arr[1]} alt="TSV" />
                  </motion.figure>
                ) : picture === 2 ? (
                  <motion.figure
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={standard}
                    key="3"
                  >
                    <Image src={arr[2]} alt="TSV" />
                  </motion.figure>
                ) : picture === 3 ? (
                  <motion.figure
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={standard}
                    key="4"
                  >
                    <Image src={arr[3]} alt="TSV" />
                  </motion.figure>
                ) : picture === 4 ? (
                  <motion.figure
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={standard}
                    key="5"
                  >
                    <Image src={arr[4]} alt="TSV" />
                  </motion.figure>
                ) : (
                  <motion.figure
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={standard}
                    key="6"
                  >
                    <Image src={arr[5]} alt="TSV" />
                  </motion.figure>
                )}
              </figure>
              <ul>
                <li>Oils Fats R&#38;D /QC Laboratory set up</li>
                <li>Product Development (specialty Fats and Oils)</li>
                <li>Existing Product Modification</li>
                <li>New Product Formulation</li>
                <li>Cost reduction (existing products)</li>
                <li>Quality Control/Quality Assurance</li>
                <li>
                  Documentation Assistance(HACCP, GMP, HALAL Organic, etc.)
                </li>
                <li>Existing Oils &#38; Laboratory Assessment</li>
                <li>
                  Oils &#38; Fats Processing (Oil Milling, Refining,
                  Modification)
                </li>
                <li>Virgin Coconut Oil Processing plant set up</li>
                <li>VCO R&#38;D/QC Laboratory set up</li>
                <li>Basic Oils &#38; Fats Seminar</li>
                <li>Special Oils &#38; Fats Seminar (various subjects)</li>
                <li>Oils &#38; Fats Trouble Shooting(QC/QA)</li>
                <li>Oils &#38; Fats Trouble Shooting(R&#38;D)</li>
                <li>Oils &#38; Fats Applications</li>
                <li>Healthier Oils &#38; Fats</li>
                <li>Oils &#38; Fats Marketing/Technical Services</li>
                <li>Biofuels Technology</li>
                <li>Nutraceuticals Product Development</li>
                <li>
                  Palm &#38; Coconut Farming/Plantation Upstreaming/Down
                  Streaming
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
