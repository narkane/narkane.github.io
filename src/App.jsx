import { useState } from "react";
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

const App = () => {
  const [isActive, setIsActive] = useState(true);

  document.body.style.height = "100%";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    setIsActive(false);
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
              width="8"
              height="75"
              margin="6"
              radius="5"
              color="#9746d7"
              // speedMultiplier={1.5}
            />
          }
        >
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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
