const Nav = () => {

  return (
    <div className="Nav">
      <nav class="fade fadeOut mono text-xs font-light flex justify-end mt-8 mr-8">
        <a href="#responsive-header" class="text-teal-200 mr-8">
          01. <span class="text-[#CFDAF7] hover:text-teal-200 link-underline">About</span>
        </a>
        <a href="#responsive-header" class="text-teal-200 mr-8">
          02. <span class="text-[#CFDAF7] hover:text-teal-200 link-underline">Experience</span>
        </a>
        <a href="#responsive-header" class="text-teal-200 mr-8">
          03. <span class="text-[#CFDAF7] hover:text-teal-200 link-underline">Work</span>
        </a>
        <a href="#responsive-header" class="text-teal-200 mr-8">
          04. <span class="text-[#CFDAF7] hover:text-teal-200 link-underline">Contact</span>
        </a>
        <a href="#responsive-header" class="px-4 py-2 border rounded text-teal-200 border-teal-200 hover:bg-[#8DFEE2]/5">
          Resume
        </a>
      </nav>
    </div>
  );
}

export default Nav;
