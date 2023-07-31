import { motion } from "framer-motion";
import { nanoid } from "nanoid";

function AvatarImg({ onClick }) {
  return (
    <motion.img
      onClick={onClick}
      key={nanoid}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      }}
      transition={{ duration: 1 }}
      whileHover={{
        rotate: -10,
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.99 }}
      className="peer w-fit my-4 h-20 lg:h-24 rounded-full cursor-pointer dark:bg-night-theme-primary bg-day-theme-secondary shadow shadow-black hover:shadow-md"
      src="src/assets/images/My project.png"
      alt="my avatar img"
    />
  );
}

export default AvatarImg;
