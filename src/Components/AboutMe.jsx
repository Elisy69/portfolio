import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { nanoid } from "nanoid";
import workAnimation from "/Users/strashevskyelisey/Desktop/coding/Projects/portfolio/src/assets/lottie_animation/animation_lk0vvq0c.json";

function AboutMe() {
  return (
    <div className="flex flex-col mb-8">
      <motion.p
        className="text-base p-4 w-full"
        key={nanoid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        With over a year of commercial experience, I write in JavaScript,
        TypeScript, and React. I take great pleasure in designing responsive and
        cross-browser interfaces that enhance user experiences.{" "}
        <a
          href="https://hh.ru/resume/95aef390ff0c0ad02f0039ed1f6f584a317755?hhtmFrom=resume_list"
          className="active:text-night-theme-secondary cursor-pointer font-bold underline underline-offset-1 text-day-theme-accent dark:text-night-theme-primary"
        >
          My resume
        </a>{" "}
        provides a comprehensive overview of my web development stack. However,
        I am also eager to learn new technologies that your team is working
        with. Additionally, I have a C1-C2 proficiency in English.
      </motion.p>
      <motion.div
        key={nanoid}
        whileInView="visible"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          scale: {
            type: "spring",
            damping: 8,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="mt-4 max-w-md borderanimation flex justify-center items-center mx-8 rounded-full bg-day-theme-secondary dark:bg-night-theme-primary"
      >
        <Lottie animationData={workAnimation} loop={true} autoplay={true} />
      </motion.div>
    </div>
  );
}

export default AboutMe;
