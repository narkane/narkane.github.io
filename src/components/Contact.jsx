import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import * as textbelt from "TextBelt";
// const text = require("TextBelt");

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// emailjs service(yandex) ID: service_5abfjtw
// emailjs template ID: template_3li88dk
// public key: CJnG-l0ZMKOSspefo

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [Loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value /*email, message*/ } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevents page refresh
    e.preventDefault();
    // start email sending
    setLoading(true);

    // TODO: Create text vs. email radio buttton??

    // TODO: if text:
    // const text_message = "Name: " + form.name + "\n";
    // "Email: " + form.email + "\n";
    // "Message: " + form.message;
    // textbelt.sendText("7138744987", text_message, undefined, function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    // });

    // TODO: if email:
    // Send message via email (john@thummel.site)
    emailjs
      .send(
        "service_5abfjtw",
        "template_3li88dk",
        {
          from_name: form.name,
          to_name: "John",
          from_email: form.email,
          to_email: ["john@thummel.site", "8326387800@tmomail.net"],
          message: form.message,
        },
        "CJnG-l0ZMKOSspefo"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you! I will get back to you as soon as possible.");

        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);

            console.log(error);
            alert("Something went wrong.");
          }
        );
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {Loading ? "Sending..." : "Send"}
          </button>
        </form>
        <span className="text-[13px] text-gray-500 absolute right-10 bottom-7">
          via text and email
        </span>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
