import React, { useEffect } from 'react'

import "./AdditionalComponents.css"
import { FaArrowUp } from "react-icons/fa";



function ScrollTop() {
  
  useEffect(()=>{
    
    const ScrollTop=document.querySelector(".ScrollTop");
    
    window.addEventListener("scroll",()=>{
      if(window.scrollY>=300){
      
        ScrollTop.classList.add("Show");
        ScrollTop.addEventListener("click",()=>{
          window.scrollTo(
            {
              top:0,
              behavior:"smooth"
            }
          )
        })
      }
      else{
      
        ScrollTop.classList.remove("Show")
      }
    })
  },[])



  
  return (
    <div className='ScrollTop'><FaArrowUp/></div>
  )
}

export default ScrollTop