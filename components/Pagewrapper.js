"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "@/app/loading";

const Pagewrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? <Loading /> : <>{children}</>}
    </AnimatePresence>
  );
};

export default Pagewrapper;
