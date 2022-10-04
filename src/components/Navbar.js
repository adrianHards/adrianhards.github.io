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
              <Link activeClass="active" smooth spy to="about" class="flex" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                </svg>
                <span class="ml-1 mt-0.5 text-[#d2d8ff] hover:text-[#F7C58A]">About</span>
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






