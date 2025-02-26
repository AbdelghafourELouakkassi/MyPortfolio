import "./Navbar.css";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { useMobileNav} from "../Hooks/useMobileNav";
import { useLightMode} from "../Hooks/useLightMode";
import { IoSunny} from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { useEffect } from "react";



function Navbar() {


  useEffect(()=>{
     const nav=document.querySelector(".navbar");
     document.addEventListener("scroll",()=>{
      if(window.scrollY>=300){
        nav.classList.add("scrollOver300Y")
      }
      else{
        nav.classList.remove("scrollOver300Y")
      }
     })
  },[])

  
  /* function to open and close  mobile navbar you can find it in the hooks folder */
  useMobileNav()
  /* dark mode active you can find it Also in the hooks folder */
  useLightMode()

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        AE
      </div>
      <div className="menu">
        <a className="menu-link active" href="#home">Home</a>
        <a className="menu-link " href="#about">About</a>
        <a className="menu-link" href="#skills">Skills</a>
        <a className="menu-link" href="#projects">Projects</a>
        <a className="theme-switch light-mode"><IoSunny/></a>
        <a className="theme-switch dark-mode"><FaMoon/></a>  
      </div>
      <a href="#contact">
      <button>
        <FaRegCommentAlt />
        Contact Me
      </button>
      </a>
      <span className="mobileNav-open-button">
        <CgMenuGridO />
      </span>
      <span className="mobileNav-close-button">
        <IoMdClose />
      </span>
    </nav>
  );
}

export default Navbar;
