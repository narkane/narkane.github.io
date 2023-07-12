import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import { motion } from "framer-motion";
import { ScaleLoader } from "react-spinners";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

LoadingOverlay.propTypes = undefined;

const App = () => {
  const [isActive, setIsActive] = useState(true);

  document.body.style.height = "100%";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    setIsActive(false);
    // FIXME: scroll blocking is broken for reload on #labels
    // document.body.style.overflow = "visible";
  }, 2000);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <LoadingOverlay
          active={isActive}
          fadeSpeed={2000}
          spinner={
            <ScaleLoader
              width="80px"
              height="120px"
              margin="6px"
              radius="15px"
              color="#9746d7"
              // speedMultiplier={1.5}
            />
          }
        >
          <div
            className="flex justify-center items-center h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center"
            id="welcome"
          >
            <a
              onClick={() => {
                document.getElementById("welcome").style.display = "none";
                document.getElementById("home").style.opacity = 1;
              }}
              className="glow-link text-4xl text-center font-bold"
            >
              Welcome
            </a>
          </div>
          <div
            className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
            id="home"
            style={{ opacity: 0 }}
          >
            <Navbar />
            <Hero />
          </div>
        </LoadingOverlay>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
