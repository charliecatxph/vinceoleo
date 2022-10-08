import { motion } from "framer-motion";

export default function MobileNav({ expand, setNav }) {
  return (
    <nav className={expand ? "mobile-nav active-nav" : "mobile-nav"}>
      <div className="container">
        <div className="wrapper">
          <div className="close-btn">
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setNav()}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setNav()}
              >
                <line
                  x1="1.41421"
                  y1="1.58579"
                  x2="21.4142"
                  y2="21.5858"
                  stroke="#10101A"
                  strokeWidth="4"
                />
                <line
                  x1="1.58579"
                  y1="21.5858"
                  x2="21.5858"
                  y2="1.58579"
                  stroke="#10101A"
                  strokeWidth="4"
                />
              </svg>
            </motion.button>
          </div>
          <ul className="main-list">
            <motion.li whileTap={{ scale: 0.9 }} onClick={() => setNav()}>
              <a href="#home">Home</a>
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} onClick={() => setNav()}>
              <a href="#about">About</a>
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} onClick={() => setNav()}>
              <a href="#products">Products</a>
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} onClick={() => setNav()}>
              <a href="#contact">Contact</a>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
