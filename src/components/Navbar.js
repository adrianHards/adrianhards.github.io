import { motion } from "framer-motion"
import * as Scroll from 'react-scroll';
import { useState } from 'react';
let Link = Scroll.Link;

function Nav() {
  const [ faded, setFade ] = useState(false)
  const setFaded = () => {
    if (window.scrollY >= 550) {
      setFade(true)
    } else {
      setFade(false)
    }
  }

  window.addEventListener("scroll", setFaded)

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
    <div class="sticky top-8">
        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        >
          <nav class="text-xs mt-8 mr-8">
            <div class="flex justify-end">

              <div class="absolute left-0 -mt-2">
                <div class={faded ? "transition-opacity duration-300 ease-in opacity-100" : "opacity-0"}>
                    <span class="text-[#d2d8ff] text-lg font-bold"
                      onClick={() => {
                          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                        }
                      }
                    >Adrian Hards</span>
                </div>
              </div>

              <motion.div variants={item}>
                <div class="text-[#F7C58A] mr-9">
                  <Link activeClass="active" smooth spy to="nav" >
                    01. <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline">About</span>
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={item}>
                <a href="#responsive-header" class="text-[#F7C58A] mr-9">
                  02. <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline">Experience</span>
                </a>
              </motion.div>

              <motion.div variants={item}>
                <a href="#responsive-header" class="text-[#F7C58A] mr-9">
                  03. <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline">Work</span>
                </a>
              </motion.div>

              <motion.div variants={item}>
                <a href="#responsive-header" class="text-[#F7C58A] mr-9">
                  04. <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline">Contact</span>
                </a>
              </motion.div>

              <motion.div variants={item}>
                <a href="#responsive-header" class="font-light px-4 py-2 -mt-2 border rounded text-[#F7C58A] border-[#F7C58A] hover:bg-[#F7C58A]/10">
                  Résumé
                </a>
              </motion.div>
            </div>
          </nav>
        </motion.div>
    </div>
  );
}
export default Nav;






