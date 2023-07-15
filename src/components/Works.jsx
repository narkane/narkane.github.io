import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = (project) => {
  console.log(
    project.index,
    project.name,
    project.description,
    project.tags,
    project.image,
    project.source_code_link
  );
  return (
    <motion.div variants={fadeIn("down", "spring", project.index * 0.5, 1.5)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="green-pink-gradient p-[1px] rounded-[20px] sm:w-[360px] w-full shadow-card"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * project.index, 0.75)}
          className="w-full bg-tertiary p-5 rounded-[20px] shadow-card"
          onMouseOver={() => {
            const cardhover = new Audio("./cardhover.wav");
            cardhover.volume = 0.09;
            cardhover.play();
          }}
        >
          <div className="relative w-full h-[230px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
            <p className="mt-2 text-secondary text-[14px]">
              {project.description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => {
              return (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  {tag.name}
                </p>
              );
            })}
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
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
          The following projects showcase my work and experience through
          real-world examples of my ability. Each project is described in brief,
          has public repository links, and live demos. They reflect my ability
          to understand, communicate, and solve the complex problems of our
          clients. They were created in record time through eager and competent
          teamwork, skillfully employing any technology or stack required of me,
          and effective management of projects and their team members.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          console.log(project, index);
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
