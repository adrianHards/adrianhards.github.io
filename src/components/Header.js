import { motion } from "framer-motion"

function Header() {
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
        <header className="calibre mt-[25%] lg:mt-[10%] h-screen">
          <div class="text-[#d2d8ff] text-sm lg:text-base tracking-normal font-light pb-[2%]">
            Hello, I'm
          </div>
          <div class="text-white text-5xl lg:text-6xl font-semibold  pb-[3%] lg:pb-[1%]">
            Adrian Hards.
          </div>
          <div class="text-[#F7C58A] text-4xl lg:text-5xl  pb-[3%]">
            Full Stack <br /> Web Developer
          </div>
          <div class="text-[#d2d8ff] text-sm lg:text-base font-light pb-[10%] lg:pb-[3%] w-[350px] md:w-[500px] lg:w-[550px]">
            Passionate about teaching and creating exciting interactive web experiences.
            Want to work together or need an extra hand at a hackathon? <br />
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




