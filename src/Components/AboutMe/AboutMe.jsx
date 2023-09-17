import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { forwardRef, useEffect } from "react";
import EnglishPdf from "/resumes_pdf/CVinEnglish.pdf";
import RussianPdf from "/resumes_pdf/CVinRussian.pdf";
import workAnimation from "/src/assets/lottie_animation/animation_lk0vvq0c.json";
import { text } from "/src/language/languages.js";
import { useLanguage } from "/src/store/store.js";

const AboutMe = forwardRef(function AboutMe(props, ref) {
  const lang = useLanguage((state) => [state.lang]);
  useEffect(() => {
    console.log(lang[0]);
  }, [lang]);
  return (
    <div
      ref={(el) => (ref.current[1] = el)}
      className="flex flex-col lg:flex-row lg:justify-center my-8 lg:my-[5rem] 2xl:my-[10rem] lg:pl-[5rem] lg:pr-[1rem]  xl:pl-[10rem] xl:pr-[3rem]"
    >
      <motion.div
        className="text-base lg:text-lg xl:text-xl p-4 w-full  flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p className="2xl:px-[7rem] xl:px-0 lg:px-0 sm:px-[4rem] px-[1rem]">
          {text["AboutMe_1"][lang]}
          <a
            rel="noreferrer"
            target="_blank"
            href={lang[0] === "ru" ? RussianPdf : EnglishPdf}
            className="active:text-night-theme-secondary cursor-pointer font-bold underline underline-offset-1 text-day-theme-accent dark:text-night-theme-primary"
          >
            {text["resume"][lang]}
          </a>{" "}
          {text["AboutMe_2"][lang]}
        </p>
      </motion.div>
      <motion.div
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
        className="mt-4 max-w-md lg:max-w-lg xl:max-w-xl borderanimation self-center mx-8 rounded-full bg-day-theme-secondary dark:bg-night-theme-primary"
      >
        <Lottie animationData={workAnimation} loop={true} autoplay={true} />
      </motion.div>
    </div>
  );
});

export default AboutMe;
