const Header = () => {
  return (
    <div className="Header">
      <header className="calibre mt-32 ml-48">
        <div class="mono text-[#8DFEE2] text-sm fade fadeOut pb-14">
          Hi there! My name is
        </div>

        <div class="text-[#CFDAF7] text-8xl font-semibold fade fadeOut pb-2">
          Adrian Hards.
        </div>

        <div class="text-[#8893AF] text-7xl fade fadeOut pb-6 ">
          I build, and teach about, web things.
        </div>

        <div class="text-[#8893AF] text-xl fade fadeOut font-light pb-8">
          I’m a full stack developer based in London, UK.
          I’m currently working as a teacher at <span id="wag" class="link-underline text-[#8DFEE2]">Le Wagon</span>.
        </div>

        <button class="fade fadeOut mono text-xs bg-transparent hover:bg-[#8DFEE2]/5 text-[#8DFEE2] py-4 px-8 border border-[#8DFEE2] rounded">
          Say hi!
        </button>
      </header>
    </div>
  );
}

export default Header;



