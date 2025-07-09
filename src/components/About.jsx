import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = (index) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
          onMouseOver={() => {
            const cardhover = new Audio("./cardhover.wav");
            cardhover.volume = 0.09;
            cardhover.play();
          }}
        >
          <img
            src={index.icon}
            alt={index.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[24px] font-bold text-center">
            {index.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
    <section id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px] "
      >
        <span className="text-[30px]">I</span> had always wanted to be a
        programmer, but at age eleven my journey truly began when I played
        EverQuest I...
        <br />
        <br />
        Inspired, I was driven to acquiring textbooks on C++ and DirectX 9,
        eagerly purchased from my local Barnes and Noble. I had always had an
        obsession with the magic of computers and it wouldn't be sated till the
        entire blackbox had been emptied and scraped clean! My initial focus was
        on rendering engines and client/server architecture, as it allowed for a
        vast creative canvas while simultaneously satisfying my profound love
        for mathematics and TCP/IP.
        <br />
        <br /> Throughout my endeavors, I have adopted a mindset of relentless
        determination. I firmly believe that there is no task one cannot
        accomplish; you may not possess all the knowledge at present, but
        therein lies the joy!
        <br />
        <br /> My ability to craft elegant and functional web solutions is only
        surpassed by my deep love of people. I find that one becomes who they
        surround themselves with, and so I seek above and beyond anything to
        work with a team of hardworking like-minded people with a passion for
        learning and a goodness of heart. As a past bartender and teacher I find
        that every interaction with every person is an opportunity. In the words
        of Ralph Waldo Emerson,&nbsp;
        <code>
          “In my walks, every man I meet is my superior in some way, and in that
          I learn from him.”
        </code>
        <br />
        <br />
        With a profound appreciation for the creative potential of technology
        and a perpetual commitment to push my limits, I am not only driven to
        excel, but I also find immense joy in the process. I strive to create
        captivating, efficient, and innovative web experiences alongside my
        peers.
        <br />
        <br />
        ___
        <br />
        <br />I identify most deeply as a Maker, engineer, and a person with a
        deep seated FOMO on any nerd-dom from comics to code, D&D to anime. If
        you wish to see a small sampling of some of my "Maker" hobbies:{" "}
        <a
          href="http://www.instagram.com/narkane142"
          className="text-blue-600 underline"
        >
          Instagram
        </a>
        <br />I specialize mainly in woodworking, leatherworking, and jewelery.
        <br />
        <br /> Be well {"<3"}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
    </>
  );
};

export default SectionWrapper(About, "");
