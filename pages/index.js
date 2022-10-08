import Head from "next/head";

// components
import AboutUs from "../components/about-us";
import BSCollabs from "../components/collabs";
import Contact from "../components/contact";
import Footer from "../components/footer";
import GlobMarkets from "../components/glob-markets";
import Hero from "../components/hero";
import NavBar from "../components/nav-bar";
import Products from "../components/products";
import TechServices from "../components/tech-services";
import MobileNav from "../components/mobile-nav";

// react
import { useState } from "react";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhilippineMarket from "../components/philippine-markets";

export default function Page() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <MobileNav expand={mobileNav} setNav={handleNav} />
      <div>
        <Head>
          <title>VINCEOLEO Philippines</title>
          <link rel="icon" href="/favicon.ico"></link>
          <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
        <NavBar setNav={handleNav} />
        <Hero />
        <BSCollabs />
        <AboutUs />
        <GlobMarkets />
        <PhilippineMarket />
        <TechServices />
        <Products />
        <Contact />
        <Footer />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}
