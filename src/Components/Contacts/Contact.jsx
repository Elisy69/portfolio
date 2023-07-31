import { motion } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";
import { text } from "../../language/languages";
import { useLanguage } from "../../store/store";
import IconGmail from "/src/assets/svg/IconGmail.jsx";
import IconTelegram from "/src/assets/svg/IconTelegram.jsx";
import IconWhatsapp from "/src/assets/svg/IconWhatsapp.jsx";

const Contact = forwardRef(function Contact(props, ref) {
  const lang = useLanguage((state) => state.lang);
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
    <div
      ref={(el) => (ref.current[3] = el)}
      className="self-center flex flex-col gap-4 mb-20"
    >
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
        className={`ml-4 mt-[4rem] mb-[0.5rem] text-6xl lg:text-7xl xl:text-8xl ${
          font ? `font-my-for-title gap-3` : `font-my-for-titleRus gap-1.5`
        }`}
      >
        {text["contacts"][lang]}
      </motion.h1>
      <motion.div
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
        className="text-7xl self-end"
      >
        👇
      </motion.div>
      <motion.div
        className="flex justify-end items-center gap-2"
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
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
      >
        <span className="text-xl underline underline-offset-8">@elsi55</span>
        <IconTelegram />
      </motion.div>
      <motion.div
        className="flex justify-end items-center gap-2"
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.4,
            type: "spring",
            damping: 12,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        viewport={{ once: true }}
      >
        <span className="text-xl underline underline-offset-8">
          +7 (912)646-19-89
        </span>
        <IconWhatsapp />
      </motion.div>
      <motion.div
        className="flex justify-end items-center gap-2"
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
            type: "spring",
            damping: 12,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        viewport={{ once: true }}
      >
        <span className="text-xl underline underline-offset-8">
          strashevsky.elisey@gmail.com
        </span>
        <IconGmail />
      </motion.div>
    </div>
  );
});

export default Contact;
