import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { useContextValues } from "../../Context/ContextProvider";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const { isLoading } = useContextValues();

  useEffect(() => {
    isLoading(progress);

    return () => null;
  }, [progress]);

  return (
    <>
      <Html as="div" center>
        <span className="canvas-loader"></span>
      </Html>
    </>
  );
};

export default CanvasLoader;
