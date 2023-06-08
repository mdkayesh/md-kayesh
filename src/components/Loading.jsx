import Logo from "../assets/Logo";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useContextValues } from "../Context/ContextProvider";

const Loading = () => {
  const { loader } = useContextValues();

  return (
    <AnimatePresence mode="wait">
      {loader < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="fixed top-0 left-0 w-full h-full bg-secondary flex justify-center items-center z-40"
        >
          <Logo className="w-40 h-40" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
