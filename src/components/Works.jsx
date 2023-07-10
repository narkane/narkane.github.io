import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = (
  index,
  name,
  description,
  tags,
  image,
  source_code_link
) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5)}></motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recent work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 2)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          LOREM IPSUM blahfd asgf dsjlkafds asfkdlsdfk sdjgbv askl ghdsa n
          asdlkj iog aeshl sbn sdaklh grnaklbggfdaghjh
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
