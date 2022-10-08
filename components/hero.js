// images
import HBg1 from "../assets/hero-bg1.jpg";
import HBg2 from "../assets/hero-bg2.jpg";
import HBg3 from "../assets/hero-bg3.jpg";
import HBg4 from "../assets/hero-bg4.jpg";
import HBg5 from "../assets/hero-bg5.jpg";
import HBg6 from "../assets/hero-bg6.jpg";
import HBg7 from "../assets/hero-bg7.jpg";
import HBg8 from "../assets/hero-bg8.jpg";
import HBg9 from "../assets/hero-bg9.jpg";
import HBg10 from "../assets/hero-bg10.jpg";

// next-image
import Image from "next/image";

// react
import { useEffect, useState } from "react";

// framer
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [background, setBackground] = useState(
    Math.floor(Math.random() * (10 - 1 + 1)) + 1
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (background + 1 > 10) {
        setBackground(1);
      } else {
        setBackground((prev) => prev + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [background]);
  return (
    <section className="hero" id="home">
      <figure className="background">
        <AnimatePresence>
          {background === 1 ? (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="1"
            >
              <Image
                src={HBg1}
                layout="fill"
                objectFit="cover"
                placeholder="VINCEOLEO Background"
                alt="1"
                priority
              />
            </motion.figure>
          ) : background === 2 ? (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="2"
            >
              <Image
                src={HBg2}
                layout="fill"
                objectFit="cover"
                placeholder="VINCEOLEO Background"
                alt="2"
                priority
              />
            </motion.figure>
          ) : background === 3 ? (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="3"
            >
              <Image
                src={HBg3}
                layout="fill"
                objectFit="cover"
                placeholder="VINCEOLEO Background"
                alt="3"
                priority
              />
            </motion.figure>
          ) : background === 4 ? (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="4"
            >
              <Image
                src={HBg4}
                layout="fill"
                objectFit="cover"
                placeholder="VINCEOLEO Background"
                alt="4"
                priority
              />
            </motion.figure>
          ) : background == 5 ? (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="5"
            >
              <Image
                src={HBg5}
                layout="fill"
                objectFit="cover"
                placeholder="VINCEOLEO Background"
                alt="5"
                priority
              />
            </motion.figure>
          ) : background === 6 ? (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="6"
            >
              <Image
                src={HBg6}
                layout="fill"
                objectFit="cover"
                placeholder="VINCEOLEO Background"
                alt="6"
                priority
              />
            </motion.figure>
          ) : background == 7 ? (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="7"
            >
              <Image
                src={HBg7}
                layout="fill"
                objectFit="cover"
                placeholder="VINCEOLEO Background"
                alt="7"
                priority
              />
            </motion.figure>
          ) : background === 8 ? (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="8"
            >
              <Image
                src={HBg8}
                layout="fill"
                objectFit="cover"
                placeholder="VINCEOLEO Background"
                alt="8"
                priority
              />
            </motion.figure>
          ) : background === 9 ? (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="9"
            >
              <Image
                src={HBg9}
                layout="fill"
                objectFit="cover"
                placeholder="VINCEOLEO Background"
                alt="9"
                priority
              />
            </motion.figure>
          ) : (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="10"
            >
              <Image
                src={HBg10}
                layout="fill"
                objectFit="cover"
                placeholder="VINCEOLEO Background"
                alt="10"
                priority
              />
            </motion.figure>
          )}
        </AnimatePresence>
      </figure>
      <div className="container">
        <div className="wrapper">
          <div className="landing-text">
            <h1>
              Your Preferred Partner In Food, Speciality Fats, &#38; Oils
              Business
            </h1>
            <span>WE ARE, VINCEOLEO.</span>
          </div>
          <div className="landing-buttons">
            <a href="#about">
              <motion.button whileTap={{ scale: 0.9 }} className="about-btn">
                <span>ABOUT US</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4L16 12L8 20"
                    stroke="#FAFAFA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button whileTap={{ scale: 0.9 }} className="contact-btn">
                <span>CONTACT</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4L16 12L8 20"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
