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
        <div class="flex h-screen px-[31%] py-32">

          <div class="about">
            <div class="text-white text-3xl font-semibold mb-8">
              About Me
            </div>

            <div class="text-[#d2d8ff] text-l font-light">
              <div class="about-text">
                Hello! My name is Adrian, and I enjoy teaching about, and building things for, the web.
                <br />
                <br />
                Formerly I worked in Canada as a research biologist. It was here that I developed my interest
                in programming, as a result of playing R and Python making pretty, interactive graphs and maps
                in the name of data analysis.
                <br />
                <br />
                I also discovered a fondness for teaching which I am fortunate enough to have since combined with
                coding. I currently instruct at both <span class="link-underline text-[#F7C58A]"><a href="https://www.lewagon.com/">Le Wagon</a></span>
                &nbsp;and <span class="link-underline text-[#F7C58A]"><a href="https://codeyourfuture.io/">CodeYourFuture</a></span>,
                two web development bootcamps, the latter on a voluntary basis.
                <br />
                <br />
                My focus is on building accessible, interactive digital experiences that improve the lives of others.
                My developer background is in Ruby on Rails and JavaScript, though my most recent projects were built with React and Node.
                Other technologies include:
              </div>
              <br />
              <div class="grid grid-cols-2 grid-rows-2 text-[#F7C58A]">
                <li class="">
                  <span class="text-[#d2d8ff]">JavaScript (ES6)</span>
                </li>
                <li class="">
                  <span class="text-[#d2d8ff]">Ruby</span>
                </li>
                <li class="">
                  <span class="text-[#d2d8ff]">React</span>
                </li>
                <li class="">
                  <span class="text-[#d2d8ff]">Ruby on Rails</span>
                </li>
                <li class="">
                  <span class="text-[#d2d8ff]">Node.js</span>
                </li>
                <li class="">
                  <span class="text-[#d2d8ff]">RSpec</span>
                </li>
              </div>




            </div>
          </div>



        </div>

      </motion.div>

    </motion.div>
  );
}

export default About;
