import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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

        <div class="h-screen lg:w-[65%] md:w-[80%] text-[#d2d8ff] m-auto pt-[35%] lg:pt-[15%]">
          <div class="grid grid-cols-2">

            <div class="text-xs pb-6">
              Skills
            </div>

            <div class="text-xs pb-6">
              About Me
            </div>
          </div>

          <div class="grid grid-cols-2">
            <div class="text-sm lg:text-4xl col-span-1 text-[#F7C58A] font-light">
              JavaScript (ES6+) <br />
              React <br />
              Node.js <br />
              Ruby <br />
              Ruby on Rails <br />
              RSpec <br />
            </div>

            <div class="text-xs lg:text-lg font-light col-span-1 leading-normal">
              Formerly I worked in Canada as a research biologist. It was here that I first developed an interest
              in programming; I'd look for any excuse to use R and create pretty, interactive graphs and maps
              in the name of data analysis.
              I also discovered a fondness for teaching which I am fortunate enough to have since combined with
              coding. I currently instruct web development at two bootcamps, namely&nbsp;
              <span class="link-underline text-[#F7C58A]"><a href="https://www.lewagon.com/">Le Wagon</a></span>
              &nbsp;and <span class="link-underline text-[#F7C58A]"><a href="https://codeyourfuture.io/">CodeYourFuture</a></span>,
              the latter on a voluntary basis.
              My focus is on building accessible, interactive digital experiences that improve the lives of others.
              My background is in Ruby on Rails and JavaScript, though my most recent projects were built with React and Node.js.
            </div>
          </div>
        </div>

      </motion.div>

    </motion.div>

  );
}

export default About;