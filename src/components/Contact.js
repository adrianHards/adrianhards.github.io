import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 50 }
};

function Contact() {
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
        <div class="h-screen text-[#d2d8ff] pt-64 pl-48 text-4xl w-[40%]">
          For any enquiries, or just to say hello, please get in touch.
            <div class="grid grid-cols-2 text-sm mt-8">
            <div class="text-[#d2d8ff]/75">
              Enquiries
              <div class="text-[#d2d8ff] pt-4">
                <a href="https://www.linkedin.com/in/adrianhards/" class="hover:text-[#F7C58A]">Lk</a>
              </div>
            </div>

            <div class="text-[#d2d8ff]/75">
              Follow me
              <div class="text-[#d2d8ff] pt-4">
                <a href="https://www.linkedin.com/in/adrianhards/" class="hover:text-[#F7C58A] pr-4">Lk</a>
                <a href="https://github.com/adrianHards" class="hover:text-[#F7C58A]">Git</a>
              </div>

            </div>

          </div>
        </div>




      </motion.div>

    </motion.div>
  );
}

export default Contact;
