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
        <div class="h-screen w-[50%] text-[#d2d8ff] m-auto pt-48">
          <div class="grid grid-cols-2">

            <div class="text-xs pb-6">
              Skills
            </div>

            <div class="text-xs pb-6">
              About Me
            </div>
          </div>

          <div class="grid grid-cols-2">
            <div class="text-4xl col-span-1 text-[#F7C58A] leading-tight font-light">
              JavaScript (ES6+) <br />
              React <br />
              Node.js <br />
              Ruby <br />
              Ruby on Rails <br />
              RSpec <br />
            </div>

            <div class="text-l font-light col-span-1 leading-normal">
              Formerly I worked in Canada as a research biologist. It was here that I first developed an interest
              in programming; I'd look for any excuse to use R and create pretty, interactive graphs and maps
              in the name of data analysis.
              I also discovered a fondness for teaching which I am fortunate enough to have since combined with
              coding. I currently instruct web development at both&nbsp;
              <span class="link-underline text-[#F7C58A]"><a href="https://www.lewagon.com/">Le Wagon</a></span>
              &nbsp;and <span class="link-underline text-[#F7C58A]"><a href="https://codeyourfuture.io/">CodeYourFuture</a></span>,
              the latter on a voluntary basis.
              My focus is on building accessible, interactive digital experiences that improve the lives of others.
              My background is in Ruby on Rails and JavaScript, though my most recent projects were built with React and Node.
            </div>

          </div>
        </div>

      </motion.div>

    </motion.div>
  );
}

export default About;

{/* <div class="flex h-screen px-[31%] py-32 ">
  <div class="about">
    <div class="text-white text-3xl font-semibold mb-8">
      About Me
    </div>

    <div class="text-[#d2d8ff] text-l font-light">
      <div class="about-text">
        My name is Adrian. I enjoy teaching about, and building things for, the web.
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
</div> */}