import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import IconGithub from "/Users/strashevskyelisey/Desktop/coding/Projects/portfolio/src/assets/svg/IconGithub.jsx";
import IconHabr from "/Users/strashevskyelisey/Desktop/coding/Projects/portfolio/src/assets/svg/IconHabr.jsx";
import IconLinkedn from "/Users/strashevskyelisey/Desktop/coding/Projects/portfolio/src/assets/svg/IconLinkedn.jsx";

function SocialMediaIcon({ site }) {
  function renderIcon(site) {
    switch (site) {
      case "github":
        return <IconGithub />;
      case "linkedn":
        return <IconLinkedn />;
      case "habr":
        return <IconHabr />;
    }
  }
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, scale: { type: "spring" } }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      key={nanoid}
      className="cursor-pointer bg-day-theme-secondary dark:bg-night-theme-primary h-20 w-20 flex justify-center items-center rounded-full"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1, scale: { type: "spring" } }}
        key={nanoid}
        className="h-16 w-16 bg-night-theme-text flex justify-center items-center rounded-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {renderIcon(site)}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SocialMediaIcon;
