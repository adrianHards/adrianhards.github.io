import { motion } from "framer-motion"
import { useState } from 'react';
import { Link } from 'react-scroll'

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
    <nav class="sticky top-0 bg-[#4932D5]/70 pt-2 pb-4">
        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        >
          <div class="text-sm mt-8 mr-8">
            <div class="flex justify-end">

              <div class="absolute left-48 -mt-2 cursor-default">
                <div class={faded ? "transition-opacity duration-300 ease-in opacity-100 hover:cursor-pointer" : "transition-opacity duration-300 ease-out opacity-0"}>
                    <span class="text-white text-lg font-bold"
                      onClick={() => {
                          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                        }
                      }
                    >Adrian Hards</span>
                </div>
              </div>

              <motion.div variants={item}>
                <div class="text-[#F7C58A] mr-9">
                  <Link activeClass="active" smooth spy to="about" >
                    <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline hover:cursor-pointer">About</span>
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={item}>
                <Link activeClass="active" smooth spy to="projects" >
                  <a href="#responsive-header" class="text-[#F7C58A] mr-9">
                    <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline hover:cursor-pointer">Projects</span>
                  </a>
                </Link>
              </motion.div>

              <motion.div variants={item}>
                <a href="#responsive-header" class="text-[#F7C58A] mr-9">
                  <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline hover:cursor-pointer">Contact</span>
                </a>
              </motion.div>

              {/* <motion.div variants={item}>
                <a href="#responsive-header" class="font-light px-4 py-2 -mt-2 border rounded text-[#F7C58A] border-[#F7C58A] hover:bg-[#F7C58A]/10">
                  Résumé
                </a>
              </motion.div> */}
            </div>
          </div>
        </motion.div>
    </nav>
  );
}
export default Nav;


