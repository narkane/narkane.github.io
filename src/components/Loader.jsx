import React from "react";
import { SectionWrapper } from "../hoc";
import { Html, useProgress } from "@react-three/drei";
import autoprefixer from "autoprefixer";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      {/* <span className="canvas-load"></span> */}
      <p
        style={{
          position: "relative",
          left: "-50px",
          opacity: "0.1",
          fontSize: 164,
          color: "#9060d0",
          fontStyle: "italic",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
