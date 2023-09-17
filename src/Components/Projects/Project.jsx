import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage, useTheme } from "../../store/store";
import IconArrow from "/src/assets/svg/IconArrow.jsx";
import IconGithub from "/src/assets/svg/IconGithub.jsx";

function Project({ text, title, imgsrc, githubLink, appLink }) {
  const lang = useLanguage((state) => state.lang);
  const isLight = useTheme((state) => state.isLight);
  const [font, setFont] = useState(false);

  useEffect(() => {
    setFont(!font);
  }, [lang]);

  useEffect(() => {
    if (lang === "en") {
      setFont(true);
    } else {
      setFont(false);
    }
  }, []);

  return (
    <div className="flex flex-col sm:flex-row max-w-[90%] max-h-[30rem] mb-20 gap-4">
      <motion.div
        key={1}
        initial={{
          y: 300,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.3,
            type: "spring",
            damping: 12,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        viewport={{ once: true }}
        className="sm:min-w-[50%] sm:h-[100%] overflow-hidden shadow-xl self-center"
      >
        <img
          src={imgsrc}
          alt="project"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      <div>
        <motion.h1
          initial={{
            y: 80,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className={`mb-[2rem] ml-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl self-start  ${
            font ? `` : `font-my-for-titleRusTwo`
          }`}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{
            y: 80,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className={`ml-4 mr-4 self-start lg:text-xl sm:text-md ${
            font ? `` : `font-my-for-titleRusTwo`
          }`}
        >
          {text}
        </motion.p>
        <motion.div
          className="ml-4 mt-4 flex items-center gap-3"
          initial={{
            x: 20,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.4 },
          }}
          viewport={{ once: true }}
        >
          <a href={githubLink} rel="noreferrer" target="_blank">
            <IconGithub
              isLight={isLight}
              size="w-8 h-8"
              animation="cursor-pointer hover:-translate-y-2 duration-200"
            />
          </a>
          <a href={appLink} rel="noreferrer" target="_blank">
            <IconArrow />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
