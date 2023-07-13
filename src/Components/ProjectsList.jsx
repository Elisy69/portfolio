import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useLanguage } from "../store/store";

const titleAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

function ProjectsList() {
  const lang = useLanguage((state) => state.lang);
  const [font, setFont] = useState(false);

  useEffect(() => {
    setFont(!font);
  }, [lang]);

  return (
    <motion.section
      key={nanoid}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col justify-center items-center px-2"
    >
      <motion.h1
        variants={titleAnimation}
        className={`text-5xl mb-4 flex ${
          font
            ? `font-my-for-title gap-3`
            : `font-my-for-titleRus text-[2.5rem] gap-1.5`
        }`}
      >
        Featured Projects
      </motion.h1>
    </motion.section>
  );
}

export default ProjectsList;
