import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: 50 }
};

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      // setInterval(() => {
      controls.start("visible");
      // }, 500);
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
    >
      <motion.div variants={fadeIn}>
        <div class="flex items-center justify-center h-screen">
          About
        </div>
      </motion.div>

    </motion.div>
  );
}

export default About;
