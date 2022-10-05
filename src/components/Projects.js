import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fromLeft = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -50 }
};

const fromRight = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 50 }
};

function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
        controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
    >
      <div class="h-screen m-48">
        <div class="flow-root ml-48 mr-48 pt-48">
          <motion.div variants={fromLeft}>
            <div class="float-left">
              <div class="project-card h-16 w-16 bg-white"></div>
            </div>
          </motion.div>

          <motion.div variants={fromRight}>
            <div class="float-right">
              <div class="project-card h-16 w-16 bg-white"></div>
            </div>
          </motion.div>
        </div>
      </div>

    </motion.div>

  );
}

export default Projects;

// https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion