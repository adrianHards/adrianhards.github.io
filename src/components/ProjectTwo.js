import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fromRight = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 30 }
};

const fadeIn = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 50 }
};

function ProjectTwo() {
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
              <div class="col-span-1 relative text-[#d2d8ff]">
                <motion.div variants={fadeIn}>
                  <div class="float-right">

                      <div class="header text-[#d2d8ff] font-light">
                        <div class="text-[#F7C58A] text-sm">
                          Featured
                        </div>
                        <div class="text-white text-2xl font-semibold pb-8">
                          Cont[Text]
                        </div>
                        <div>
                          A web app developed as part of the <span class="hover:text-[#F7C58A] link-underline"><a href="https://railshackathon.com/">Rails Hackathon 2022</a></span>, in which we came <span class="font-semibold">third</span>.
                          Specifically, we used Turbo to negate the need for full-page reloads, for example when turning a page in a book or translating non-English sentences into English.
                        </div>
                      </div>

                      <div class="pt-8 text-xs">
                        <div>
                          <a href="https://rubyonrails.org/" class="pr-4">
                            <span class="hover:text-[#F7C58A] link-underline">Ruby on Rails</span>
                          </a>

                          <a href="https://hotwired.dev/" class="pr-4">
                            <span class="hover:text-[#F7C58A] link-underline">HotWire</span>
                          </a>

                          <a href="https://www.heroku.com/">
                            <span class="hover:text-[#F7C58A] link-underline">Heroku</span>
                          </a>
                        </div>

                        <div class="pt-2">
                          <a href="https://github.com/adrianHards/hotwire-context">
                            <svg xmlns="http://www.w3.org/2000/svg" class="hover:fill-amber-200" fill="#d2d8ff" width="18" height="18" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/></svg>
                          </a>
                        </div>

                      </div>

                  </div>
                </motion.div>
              </div>

              <div class="col-span-3">
                <motion.div variants={fromRight}>
                  <div class="float-right">
                    <div class="project-card h-[500px] w-[750px] bg-white"></div>
                  </div>
                </motion.div>
              </div>

              {/* <div class="absolute left-1/2 -ml-0.5 w-0.5 h-[100px] bg-gray-600"></div> */}
          </div>
        </div>
      </div>

    </motion.div>

  );
}

export default ProjectTwo;

// https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion