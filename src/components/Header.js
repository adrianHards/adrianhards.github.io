const Header = () => {
  return (
    <div className="Header">
      <header className="calibre mt-24 ml-48">
        <div class="text-[#d2d8ff] text-l tracking-normal font-light fade fadeOut pb-10">
          Hello, my name is
        </div>

        <div class="text-white text-8xl font-semibold fade fadeOut pb-2">
          Adrian Hards.
        </div>

        <div class="text-[#F7C58A] text-7xl fade fadeOut pb-6 w-[690px]">
          I build, and teach about,
          web things.
        </div>

        <div class="text-[#d2d8ff] text-xl fade fadeOut font-light pb-8 w-[670px]">
          Former research biologist, I transitioned to web development and am now working as a teacher at <span id="wag" class="link-underline text-[#F7C58A]">Le Wagon</span>.
          Want to collaborate or need an extra hand at a hackathon? Let's get in touch.
        </div>

        <button class="fade fadeOut text-md font-light text-[#F7C58A] px-6 py-2 border border-[#F7C58A] rounded">
          Say hi!
        </button>
      </header>

      {/* <div class="flex items-center justify-center">
        <div class="animate-bounce p-2 w-10 h-10">
          <svg class="w-6 h-6 text-[#F7C58A]/90" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div> */}

    </div>
  );
}

export default Header;



