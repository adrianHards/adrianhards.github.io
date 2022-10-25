import Trace from './Projects/Trace';
import Find from './Projects/Find';
import FadeIn from './Animation/FadeIn'

function Project() {
  return (
    <div class="projects">
      <FadeIn>
        <Trace />
      </FadeIn>

      <FadeIn>
        <Find />
      </FadeIn>
    </div>

  );
}

export default Project;

// https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion