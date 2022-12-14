import FadeInFunc from './Animation/FadeInFunc'
import Find from './Projects/Find';
import Context from './Projects/Context';
import Reminders from './Projects/Reminders';
// import Trace from './Projects/Trace';
// import CleanRunnings from './Projects/CleanRunnings';

const Project = () => {
  return (
  <div class="projects">
      {/* <FadeInFunc>
        <Trace />
      </FadeInFunc> */}

      <FadeInFunc>
        <Find />
      </FadeInFunc>

      <FadeInFunc>
        <Context />
      </FadeInFunc>

      <FadeInFunc>
        <Reminders />
      </FadeInFunc>
{/*
      <FadeInFunc>
        <CleanRunnings />
      </FadeInFunc> */}
    </div>
  );
}

export default Project;

// https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion