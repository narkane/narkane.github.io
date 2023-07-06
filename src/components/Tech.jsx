// const FPS = require("./FPS.html");
import React from "react";
import { SectionWrapper } from "../hoc";
import { RenderTexture } from "@react-three/drei";
import { zoomIn } from "../utils/motion";
import { motion } from "framer-motion";

class Tech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
    this.iframeRef = React.createRef();
  }

  handleClick = () => {
    this.setState({ isFocused: true }, () => {
      this.iframeRef.current.focus();
    });
  };

  handleBlur = () => {
    this.setState({ isFocused: false }, () => {
      this.iframeRef.current.blur();
    });
  };

  render() {
    const { isFocused } = this.state;
    const iframeOpacity = isFocused ? 1 : 0.5;
    // console.log(transparency, this.clicked);
    return (
      <div
        style={{
          opacity: iframeOpacity,
        }}
        onMouseOver={this.handleClick}
        onMouseLeave={this.handleBlur}
      >
        <iframe
          className={`w-full h-[600px] green-pink-gradient p-[3px] rounded-[40px] shadow-card`}
          src="./FPS.html"
          ref={this.iframeRef}
          style={{ pointerEvents: isFocused ? "auto" : "none" }}
        />
      </div>
    );
  }
}

export default SectionWrapper(Tech, "tech");
