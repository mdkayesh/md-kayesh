import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Hero/Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./earth/scene.gltf");

  return (
    <mesh>
      <pointLight intensity={1} position={[50, -10, -40]} />
      <primitive
        object={earth.scene}
        scale={isMobile ? 1.6 : 2.3}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 400px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas shadows frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
