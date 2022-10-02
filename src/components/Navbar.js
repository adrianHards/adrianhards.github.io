import * as Scroll from 'react-scroll';
let Link      = Scroll.Link;

const Nav = () => {

  return (
    <div className="Nav">
      <nav class="fade fadeOut text-xs flex justify-end mt-8 mr-8">
        <div class="text-[#F7C58A] mr-9">
          <Link activeClass="active" smooth spy to="about" >
            01. <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline">About</span>
          </Link>
        </div>
        <a href="#responsive-header" class="text-[#F7C58A] mr-9">
          02. <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline">Experience</span>
        </a>
        <a href="#responsive-header" class="text-[#F7C58A] mr-9">
          03. <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline">Work</span>
        </a>
        <a href="#responsive-header" class="text-[#F7C58A] mr-9">
          04. <span class="text-[#d2d8ff] hover:text-[#F7C58A] link-underline">Contact</span>
        </a>
        <a href="#responsive-header" class="font-light px-4 py-2 -mt-2 border rounded text-[#F7C58A] border-[#F7C58A] hover:bg-[#F7C58A]/10">
          Resume
        </a>
      </nav>
    </div>
  );
}

export default Nav;
