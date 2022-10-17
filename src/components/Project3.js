import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fromLeft = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -30 }
};

const fadeIn = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 50 }
};

function Project3() {
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
      <div class="project-container">
        <div class="flow-root ml-48 mr-48 pt-[6%]">
          <div class="grid grid-cols-4">
            <div class="col-span-3">
              <motion.div variants={fromLeft}>
                <div class="float-left">
                  <div class="project-card h-[500px] w-[750px] bg-white"></div>
                </div>
              </motion.div>
            </div>

            <div class="col-span-1">
              <motion.div variants={fadeIn} class="col-span-1">
                <div class="float-right">
                  <div class="header text-[#d2d8ff] font-light">
                    <div class="text-[#F7C58A] text-sm">
                      Featured
                    </div>
                    <div class="text-white text-2xl font-semibold pb-8">
                      Trace
                    </div>
                    <div>
                      A web app for creating and completing digital scavenger hunts. Create challenges in
                      areas of your choosing for a chosen date and time. Share your scavenger hunt via a QR code with friends.
                      Have them compete against each other before the timer ends!
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
            {/* <div class="absolute left-1/2 -ml-0.5 w-0.5 h-[100px] bg-gray-600"></div> */}
        </div>
      </div>

    </motion.div>

  );
}

export default Project3;

// https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion