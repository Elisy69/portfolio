import { motion } from "framer-motion";

import AvatarImg from "./AvatarImg";

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

const titleText = {
  headerOne: ["Hello!", "I'm", "Elisei"],
  headerTwo: ["I'm", "developing", "Creative"],
  headerThree: ["&", "Interactive", "webapps", "🚀"],
};

function renderHeader(data, custom = 0) {
  return data.map((word, index) => {
    return (
      <motion.h1 variants={titleAnimation} custom={index + custom} key={word}>
        {word}
      </motion.h1>
    );
  });
}

function HelloTitle() {
  return (
    <div className="flex flex-col self-center font-bold justify-start px-3 ">
      <div className="flex">
        <AvatarImg />
      </div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        className="flex flex-col"
      >
        <motion.div className="text-5xl mb-4 font-my-for-title flex gap-3">
          {renderHeader(titleText.headerOne)}
        </motion.div>
        <motion.div className="text-5xl flex flex-wrap gap-x-3">
          {renderHeader(titleText.headerTwo, 2)}
        </motion.div>
        <motion.div className="text-5xl flex flex-wrap gap-x-3">
          {renderHeader(titleText.headerThree, 3)}
        </motion.div>
      </motion.section>
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-normal self-end m-4 hover:text-night-theme-accent cursor-pointer"
      >
        ——— Available for work
      </motion.h4>
    </div>
  );
}

export default HelloTitle;
