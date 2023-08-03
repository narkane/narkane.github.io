import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant, fadeIn, ballIn } from "../utils/motion";
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
        {technologies.map((technology, index) => {
          return (
            <motion.div
              key={`skill-ball-${index}`}
              variants={fadeIn("up", "spring", index * 0.15, 1.2)}
            >
              <div className="w-28 h-28" key={technology.name}>
                {/* <BallCanvas icon={technology.icon} /> */}
                <img src={technology.icon} />
                <span className="flex justify-center text-[#915EFF] text-center">
                  {technology.name}
                </span>
              </div>
            </motion.div>
          );
        })}
        <div className="text-[50px] text-[#593eaa] bold mt-[14px] mr-[-64px]">
          . . .
        </div>
      </div>
      <br />
      <div className="w-full text-center text-[#504488] relative top-[48px]">
        - tech upon request -
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
