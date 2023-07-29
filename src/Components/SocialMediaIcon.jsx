import { motion } from "framer-motion";
import IconGithub from "/src/assets/svg/IconGithub.jsx";
import IconHabr from "/src/assets/svg/IconHabr.jsx";
import IconLinkedn from "/src/assets/svg/IconLinkedn.jsx";

function SocialMediaIcon({ site, cssForLargerScreen }) {
  function renderIcon(site) {
    switch (site) {
      case "github":
        return <IconGithub size="w-12 h-12 xl:w-16 xl:h-16" />;
      case "linkedn":
        return <IconLinkedn size="w-14 h-14 xl:w-[4.5rem] xl:h-[4.5rem]" />;
      case "habr":
        return <IconHabr size="w-12 h-12 xl:w-16 xl:h-16" />;
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
      className={`${cssForLargerScreen} cursor-pointer bg-day-theme-secondary dark:bg-night-theme-primary h-20 w-20 xl:h-24 xl:w-24 flex justify-center items-center rounded-full`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1, scale: { type: "spring" } }}
        className="h-16 w-16 xl:h-20 xl:w-20 bg-night-theme-text flex justify-center items-center rounded-full"
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
