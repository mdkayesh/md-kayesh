import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Hero/Loader";

const Mobile = () => {
  const iphone = useGLTF("./mobile/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        // shadow-mapSize={1024}
      />
      <pointLight intensity={1} position={[2, -0.4, 0]} />
      <primitive
        object={iphone.scene}
        scale={2}
        position={[0, -0.15, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const MoblieCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [10, 1, -13], fov: 1.4 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Mobile />
      </Suspense>
    </Canvas>
  );
};

export default MoblieCanvas;
