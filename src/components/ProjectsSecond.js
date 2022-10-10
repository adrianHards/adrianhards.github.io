import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fromLeft = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -15 }
};

const fromRight = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 15 }
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
      <div class="absolute left-1/2 -ml-0.5 w-0.5 h-screen bg-[#d2d8ff]/50"></div>

      <div class="project-container">
        <div class="flow-root ml-48 mr-48">
          <div class="h-screen">
            <motion.div variants={fromLeft}>
                <div class="float-left">
                  <div class="project-card h-[300px] w-[500px] bg-white"></div>
                </div>
              </motion.div>

              <motion.div variants={fromRight}>
                <div class="float-right">
                  <div class="project-card mt-48 h-[300px] w-[500px] bg-white"></div>
                </div>
              </motion.div>
          </div>
        </div>
      </div>

    </motion.div>

  );
}

export default Projects;

// https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion