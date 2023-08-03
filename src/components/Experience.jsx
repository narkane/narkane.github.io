import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer, ballIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      // style={{ display: "none" }}

      iconOnClick={(exp) => {
        console.log(exp, exp.target.alt);
        var expDesc = document.getElementById(`exp-desc-${exp.target.alt}`);
        // retrieve proper icon even if border (parent) element is clicked
        if (exp.target.alt === undefined) {
          expDesc = document.getElementById(
            `exp-desc-${exp.target.firstChild.alt}`
          );
        }
        // const expDesc = exp.target.parentNode.parentNode.parentNode.children[1];
        console.log(expDesc, expDesc.style.display);

        if (expDesc.style.display === "none" || expDesc.style.display === "") {
          console.log("none");
          // console.log(exp.target.parentNode.parentNode.parentNode.children[1]);
          // const timelineElement = document.getElementById(exp.target);
          console.log(expDesc.style.display);
          expDesc.style.display = "initial";
        } else {
          console.log("not none");
          expDesc.style.display = "none";
        }
      }}
    >
      <motion.section
        variants={ballIn("up", "spring", 0.1, 3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}{" "}
            <small className="text-[12px] text-secondary">
              [{experience.company_name}]
            </small>
          </h3>
          {/* <p>{experience.company_name}</p> */}
        </div>

        <ul
          id={`exp-desc-${experience.company_name}`}
          className="mt-5 list-disc ml-5 space-y-2"
        >
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.section>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col">
        <span
          className="text-center text-[12px]"
          style={{ marginBottom: "-6px" }}
        >
          <span
            style={{
              fontSize: "12px",
              border: "1px solid white",
              borderRadius: "7px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            CLICK ICON TO EXPAND
          </span>
          <br />T
        </span>
        <VerticalTimeline className="text-start">
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
