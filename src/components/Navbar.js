import { motion } from "framer-motion"
import * as Scroll from 'react-scroll';
let Link = Scroll.Link;

const Nav = () => {

  const container = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="Nav">

        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        >
          <nav class="fade fadeOut text-xs flex justify-end mt-8 mr-8">
          <motion.div variants={item}>
            <div class="text-[#F7C58A] mr-9">
              <Link activeClass="active" smooth spy to="about" >
                01. <span class="text-[#d2d8ff] hover:text-[#F7C58A]">About</span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <a href="#responsive-header" class="text-[#F7C58A] mr-9">
              02. <span class="text-[#d2d8ff] hover:text-[#F7C58A]">Experience</span>
            </a>
          </motion.div>

          <motion.div variants={item}>
            <a href="#responsive-header" class="text-[#F7C58A] mr-9">
              03. <span class="text-[#d2d8ff] hover:text-[#F7C58A]">Work</span>
            </a>
          </motion.div>

          <motion.div variants={item}>
            <a href="#responsive-header" class="text-[#F7C58A] mr-9">
              04. <span class="text-[#d2d8ff] hover:text-[#F7C58A]">Contact</span>
            </a>
          </motion.div>

          <motion.div variants={item}>
            <a href="#responsive-header" class="font-light px-4 py-2 -mt-2 border rounded text-[#F7C58A] border-[#F7C58A] hover:bg-[#F7C58A]/10">
              Résumé
            </a>
          </motion.div>

      </nav>
        </motion.div>
    </div>
  );
}
export default Nav;






