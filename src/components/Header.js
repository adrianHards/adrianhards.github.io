import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className="Header">
      <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.95,
      }}
      >
        <header className="calibre mt-[55%] md:mt-[25%] lg:mt-[15%] h-screen">
          <div class="text-[#d2d8ff] text-base md:text-lg tracking-normal font-light pb-[2%]">
            Hello, I'm
          </div>
          <div class="text-white text-5xl md:text-6xl font-semibold  pb-[5%] md:pb-[2%] lg:pb-[1%]">
            Adrian Hards.
          </div>
          <div class="text-[#F7C58A] text-4xl md:text-5xl pb-[5%] md:pb-[2%] lg:pb-[2%]">
            Full Stack <br /> Web Developer
          </div>
          <div class="text-[#d2d8ff] md:text-lg font-light pb-[9%] md:pb-[5%] lg:pb-[3%] w-full md:w-[500px] lg:w-[550px]">
            Passionate about teaching and creating exciting interactive web experiences.
            Want to work together or need an extra hand at a hackathon?
            Let's get in touch!
          </div>
          <a href="https://www.linkedin.com/in/adrianhards/" class="text-sm font-light text-[#F7C58A] px-4 py-3 border border-[#F7C58A] hover:bg-[#F7C58A]/10 rounded">
            Say hi
          </a>
        </header>

      </motion.div>
    </div>
  );
}

export default Header;




