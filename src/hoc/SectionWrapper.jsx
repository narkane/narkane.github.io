import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    var audio = new Audio();

    switch (idName) {
      case "about":
      case "work":
      case "":
        try {
          audio = new Audio("./woosh.wav");
          audio.volume = 0.2;
          // audio.play();
        } catch (error) {
          console.log(error);
        }
        console.log(audio);
        break;

      default:
        break;
    }
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        onAnimationStart={() => audio.play()}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
