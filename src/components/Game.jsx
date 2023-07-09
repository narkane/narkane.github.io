// const FPS = require("./FPS.html");
import React from "react";
import { SectionWrapper } from "../hoc";
import { RenderTexture } from "@react-three/drei";
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

class Game extends React.Component {
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
    const iframeOpacity = isFocused ? 1 : 0.75;
    console.log(iframeOpacity);
    return (
      <motion.div
        variants={fadeIn("down", "spring", 1, 4)}
        // id="motiondiv"
      >
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
      </motion.div>
    );
  }
}

export default SectionWrapper(Game, "game");
