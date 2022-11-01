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
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="text-sm md:text-2xl lg:text-4xl md:col-span-1 text-[#F7C58A] font-light md:pb-0 order-last md:order-first">
              <div class="text-xs pt-6 md:pt-0 pb-2 md:pb-6 text-[#d2d8ff]">
                <strong>Skills</strong>
              </div>
              <div class="flex md:flex-col justify-between">
                <div>
                  <div>JavaScript (ES6+)</div>
                  <div>React</div>
                  <div>Node.js</div>
                </div>
                <div>
                  <div>Ruby</div>
                  <div>Ruby on Rails</div>
                  <div>RSpec</div>
                </div>
              </div>
            </div>

            <div class="text-sm w-full md:text-base lg:text-lg font-light md:col-span-1 leading-normal">
              <div class="text-xs pb-2 md:pb-6 text-[#d2d8ff]">
                <strong>About Me</strong>
              </div>
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