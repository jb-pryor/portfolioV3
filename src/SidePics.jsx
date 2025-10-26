//imports
import "./SidePics.css"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SidePics() {

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const [leftRef, leftInView] = useInView({ threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (leftInView) leftControls.start({ x: 0, opacity: 1 });
    else leftControls.start({ x: "-100%", opacity: 0 });

    if (rightInView) rightControls.start({ x: 0, opacity: 1 });
    else rightControls.start({ x: "100%", opacity: 0 });
  }, [leftInView, rightInView, leftControls, rightControls]);

  return (
    <div className="sliding-container">
      <motion.img
        ref={leftRef}
        src="/src/assets/66AF10F1-CE13-49AC-9679-0B972919B5E7_1_105_c.jpeg"
        alt="Left"
        className="img1"
        initial={{ x: "-100%", opacity: 0 }}
        animate={leftControls}
        transition={{ duration: 0.9 }}
      />
      <motion.img
        ref={rightRef}
        src="/src/assets/66AF10F1-CE13-49AC-9679-0B972919B5E7_1_105_c.jpeg"
        alt="Right"
        className="img2"
        initial={{ x: "100%", opacity: 0 }}
        animate={rightControls}
        transition={{ duration: 0.9 }}
      />
    </div>
  );
}

export default SidePics;