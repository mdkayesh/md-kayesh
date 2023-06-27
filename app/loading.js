"use client";
import Logo from "@/utils/Logo";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      exit={{ opacity: 0, y: "-100vh" }}
      transition={{ duration: 0.5, type: "tween" }}
      className="flex justify-center items-center h-screen w-full"
    >
      <Logo className={"w-40 h-40"} />
    </motion.div>
  );
};

export default Loading;
