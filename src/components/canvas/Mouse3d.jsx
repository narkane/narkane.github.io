import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  TransformControls,
} from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";

// import { 'Luminaris Animated FBX.FBX' } from

const Scene = () => {
  const fbx = useLoader(FBXLoader, "./models/Luminaris/Luminaris.FBX");

  // document.addEventListener("mousemove", () => {});

  return <primitive object={fbx} scale={0.05} rotation={[Math.PI / 2, 0, 0]} />;
};

function Mouse3d() {
  const cursorRef = useRef();
  const [mousePos, setMousePos] = React.useState(new THREE.Vector3());

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;

    // Convert mouse position to three.js coordinates
    const pos = new THREE.Vector3(
      (clientX / window.innerWidth) * 2 - 1,
      -(clientY / window.innerHeight) * 2 + 1,
      0.5
    );

    pos.unproject(cursorRef.current.parent);
    const dir = pos.sub(cursorRef.current.parent.position).normalize();
    const distance = -cursorRef.current.parent.position.z / dir.z;
    const posZ = cursorRef.current.parent.position
      .clone()
      .add(dir.multiplyScalar(distance));

    setMousePos(posZ);
  };

  useFrame(() => {
    cursorRef.current.position.x = mousePos.x;
    cursorRef.current.position.z = mousePos.z;
  });

  return (
    <div>
      <Canvas
        onMouseMove={handlePointerMove}
        onTouchMove={handlePointerMove}
        style={{
          width: "100vw",
          height: "100vw",
          zIndex: "10",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <TransformControls
            ref={cursorRef}
            mode="translate"
            showX={false}
            showY={false}
          >
            <Scene />
          </TransformControls>
          {/* <OrbitControls /> */}
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Mouse3d;
