import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import { motion } from "framer-motion";
import { BarLoader, ScaleLoader } from "react-spinners";

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
import { Tilt } from "react-tilt";

LoadingOverlay.propTypes = undefined;

const App = () => {
  const [isActive, setIsActive] = useState(true);

  document.body.style.height = "100%";
  // document.body.style.overflow = "visible";

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
            <BarLoader
              className="mt-[-30px]"
              width="300px"
              height="6px"
              // margin="6px"
              // radius="15px"
              color="#9746d7"
              // speedMultiplier={1.5}
            />
          }
        >
          <section
            id="welcome"
            className="flex justify-center items-center h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center"
          >
            <Tilt>
              <div
                className="blurred-box border-opacity-100 rounded-xl flex h-[350px] w-[250px] z-10 backdrop-blur-[1px] shadow-card shadow-[#5D508D] bg-blue-600 bg-opacity-[0.05]"
                onClick={() => {
                  // document.getElementById("welcome").style.display = "none";
                  document.getElementById("welcome").remove();
                  document.body.style.overflow = "visible"
                  // document.getElementById("home").style.opacity = 1;
                }}
              >
                <div className="user-login-box">
                  <span className="user-icon">
                    <img id="portrait" src="./portriat14.png" />
                  </span>
                  <div className="user-name">John Thummel</div>

                  <div className="welcome glow-link font-bold">
                    <a
                      onMouseEnter={() => {
                        document.getElementById("waves").style.opacity = 0;
                      }}
                      onMouseLeave={() => {
                        document.getElementById("waves").style.opacity = 1;
                      }}
                    >
                      <h3>WELCOME</h3>
                      <h3 id="waves">WELCOME</h3>
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </section>
          <div
            className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
            id="home"
            // style={{ opacity: 0 }}
          >
            <Navbar />
            <Hero />
          </div>
        </LoadingOverlay>
        OUTSIDE SECTION testing flag<BR/>
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
