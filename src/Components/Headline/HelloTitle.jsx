import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { forwardRef, useEffect, useState } from "react";
import { text } from "../../language/languages";
import { useLanguage } from "../../store/store";
import AvatarSection from "./AvatarSection";

const titleAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.2 },
  }),
};

const HelloTitle = forwardRef(function HelloTitle(props, ref) {
  const lang = useLanguage((state) => state.lang);
  const [font, setFont] = useState(false);
  const [titleText, setTitleText] = useState({
    headerOne: [text["Hello!"][lang], text["I'm"][lang], text["Elisei"][lang]],
    headerTwo: [
      text["I'm"][lang],
      text["developing"][lang],
      text["Creative"][lang],
    ],
    headerThree: ["&", text["Interactive"][lang], text["webapps"][lang], "🚀"],
  });

  useEffect(() => {
    setTitleText({
      headerOne: [
        text["Hello!"][lang],
        text["I'm"][lang],
        text["Elisei"][lang],
      ],
      headerTwo: [
        text["I'm"][lang],
        text["developing"][lang],
        text["Creative"][lang],
      ],
      headerThree: [
        "&",
        text["Interactive"][lang],
        text["webapps"][lang],
        "🚀",
      ],
    });
    setFont(!font);
  }, [lang]);

  useEffect(() => {
    if (lang === "en") {
      setFont(true);
    } else {
      setFont(false);
    }
  }, []);

  function renderHeader(data, custom = 0) {
    return data.map((word, index) => {
      return (
        <motion.h1 variants={titleAnimation} custom={index + custom} key={word}>
          {word}
        </motion.h1>
      );
    });
  }

  return (
    <div
      ref={(el) => (ref.current[0] = el)}
      className="pt-[56px] lg:pt-[76px] flex flex-col self-center font-bold justify-start px-3 lg:w-3/5"
    >
      <AvatarSection />
      <motion.section
        key={nanoid()}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        <motion.div
          className={`text-5xl lg:text-[5vw] mb-4 flex lg:gap-x-3 xl:gap-x-6 ${
            font
              ? `font-my-for-title gap-3`
              : `font-my-for-titleRus text-[2.5rem] lg:text-[5vw] gap-1.5`
          }`}
        >
          {renderHeader(titleText.headerOne)}
        </motion.div>
        <motion.div
          className={`flex flex-wrap lg:gap-x-3 ${
            font
              ? `text-5xl lg:text-[5vw] gap-x-3 xl:gap-x-6`
              : `font-my-for-titleRusTwo text-[2rem] lg:text-[3vw] gap-x-2`
          }`}
        >
          {renderHeader(titleText.headerTwo, 2)}
        </motion.div>

        <motion.div
          className={`flex flex-wrap lg:gap-x-4  ${
            font
              ? `text-5xl lg:text-[5vw] gap-x-3 xl:gap-x-6`
              : `font-my-for-titleRusTwo text-[2rem] lg:text-[3vw] gap-x-2`
          }`}
        >
          {renderHeader(titleText.headerThree, 3)}
        </motion.div>
      </motion.section>
      <motion.h4
        key={nanoid()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-normal self-end m-4 hover:text-night-theme-accent cursor-pointer"
      >
        — {text["workstatus"][lang]}
      </motion.h4>
    </div>
  );
});

export default HelloTitle;
