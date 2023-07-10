import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Recent Focus</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
        {/* <hr className="bg-gradient-to-r from-cyan-500 to-blue-500" /> */}
        {/* <br /> */}
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 2)}>
        {/* <hr
          style={{
            border: "0px",
            borderRadius: "25px",
            background: "linear-gradient(to right, #fff, #060816)",
            height: "2px",
            marginTop: "12px",
          }}
        /> */}
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          {technologies.map((technology) => {
            return (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
                <span className="flex justify-center text-[#915EFF]">
                  {technology.name}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
