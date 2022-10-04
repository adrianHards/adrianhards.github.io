import { motion } from "framer-motion"

function Header() {
  return (
    <div className="Header ml-48">
      <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.95,
      }}
      >
        <header className="calibre mt-24 h-screen">
          <div class="text-[#d2d8ff] text-sm tracking-normal font-light pb-10">
            Zdravo, I'm
          </div>
          <div class="text-white text-7xl font-semibold  pb-2">
            Adrian Hards.
          </div>
          <div class="text-[#F7C58A] text-6xl  pb-6">
            Full Stack <br /> Web Developer
          </div>
          <div class="text-[#d2d8ff] text-l  font-light pb-8 w-[660px]">
            Passionate about teaching, collaborating and creating exciting interactive web experiences. <br />
            Want to collaborate or need an extra hand at a hackathon? Get in touch!
          </div>
          <button class="text-sm font-light text-[#F7C58A] px-4 py-2 border border-[#F7C58A] hover:bg-[#F7C58A]/10 rounded">
            Say hi
          </button>
        </header>
      </motion.div>
    </div>
  );
}

export default Header;


// Changed careers to pursue passions in coding and teaching make the world a better place through technology and education






