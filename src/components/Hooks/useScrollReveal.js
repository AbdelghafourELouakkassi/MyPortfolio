import { useEffect } from "react";
import scrollreveal from "scrollreveal";

export function useScrollReveal(){

 

  useEffect(() => {
    var elements=[
  
      document.querySelector('.hero-section'),
      document.querySelector('.about-section'),
      document.querySelector('.skills-section'),
      document.querySelector('.projects-section'),
      document.querySelector('.contact-section'),

    ]
    scrollreveal().reveal(elements,{
        distance:'0px',duration:2500,delay:400,
      })
  }, []);
}

