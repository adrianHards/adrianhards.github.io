import { motion } from "framer-motion";
import FromLeft from '../Animation/FromLeft'
import Content from './Content'
import FadeIn from '../Animation/FadeIn'
import still from '../../assets/find.png'
import gif from '../../assets/find.gif'

const Find = () => {
  return (
    <div class="flow-root pt-[10%]">
      <div class="grid grid-cols-1 md:grid-cols-2 md:mr-[15%] md:ml-[15%]">

        <div class="col-span-1">
          <motion.div variants={FromLeft}>
            <div class="figure rounded-md w-[55%] m-auto md:w-[80%] lg:w-[60%] md:m-0 md:ml-auto pt-4 md:pt-0">
              <img class="image-main object-contain image-main rounded-md" src={still} alt=""></img>
              <img class="image-hover object-contain image-main rounded-md" src={gif} alt=""></img>
            </div>
          </motion.div>
        </div>

        <div class="col-span-1 pl-[10%] order-first md:order-none">
          <motion.div variants={FadeIn}>
            <div class="float-left">
              <div class="header text-[#d2d8ff] font-light">
                <div class="text-[#F7C58A] text-xs md:text-sm">
                  {Content.Find.Site}
                </div>
                <div class="text-white text-lg md:text-2xl font-semibold pb-4 md:pb-6 lg:pb-8">
                  {Content.Find.Title}
                </div>
                <div class="text-sm md:text-sm lg:text-base">
                  A web app developed for <span class="hover:text-[#F7C58A] text-[#F7C58A] font-semibold link-underline"><a href="https://hackforpeace.net/">Hack For Peace</a></span>,
                  a cross-European hackathon in which over 200 developers and entrepreneurs came together to create anti-war tech products.
                  Find enables hospitals to create a database of unidentified patients. Members of the public then upload photos of their missing loved ones, which,
                  through use of a facial recognition API, may be matched with those of the unidentified patients. Find made it into the finals and came 6th overall.
                </div>
              </div>

              <div class="pt-4 md:pt-8 text-xs text-[#d2d8ff]">
                <div>
                  <a href="https://rubyonrails.org/" class="pr-4">
                    <span class="hover:text-[#F7C58A] link-underline">Ruby on Rails</span>
                  </a>
                  <span class="pr-4">
                    <span class="">API</span>
                  </span>
                </div>

                <div class="flex">
                  <div class="pt-2 pr-2">
                    <a href="https://github.com/adrianHards/hack-for-peace">
                      <svg xmlns="https://www.w3.org/2000/svg" class="hover:fill-amber-200" fill="#d2d8ff" width="18" height="18" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Find;