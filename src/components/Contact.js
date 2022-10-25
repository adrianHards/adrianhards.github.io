import { motion } from "framer-motion";
import FadeIn from './Animation/FadeIn'
import FadeInFunc from './Animation/FadeInFunc'

function Contact() {
  return (
    <FadeInFunc>
      <motion.div variants={FadeIn}>
        <div class="h-screen text-[#d2d8ff] pt-64 pl-48 text-4xl w-[40%]">
          For all enquiries, or just to say hello, please get in touch.
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
    </FadeInFunc>
  );
}

export default Contact;
