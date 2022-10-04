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
            Zdravo, my name is
          </div>
          <div class="text-white text-7xl font-semibold  pb-2">
            Adrian Hards.
          </div>
          <div class="text-[#F7C58A] text-6xl  pb-6 w-[690px]">
            I build, and teach about, web things.
          </div>
          <div class="text-[#d2d8ff] text-l  font-light pb-8 w-[660px]">
            Full stack web developer with a preference for the front end Passionate about teaching, experimentation
            Former research biologist, I transitioned to web development and am now working as a teacher at &nbsp;
            <span id="wag" class="link-underline text-[#F7C58A]">
              <a href="https://www.lewagon.com/">Le Wagon</a>
            </span>
            . Want to collaborate or need an extra hand at a hackathon? Let's get in touch!
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



