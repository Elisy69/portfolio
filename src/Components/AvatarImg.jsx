import { motion } from "framer-motion";

function AvatarImg() {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileHover={{
        rotate: -10,
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.99 }}
      className="w-fit my-4 h-20 rounded-full cursor-pointer bg-night-theme-primary shadow shadow-black hover:shadow-md"
      src="src/assets/images/My project.png"
      alt="my avatar img"
    />
  );
}

export default AvatarImg;
