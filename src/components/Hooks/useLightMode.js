import { useEffect } from "react";

export function useLightMode(){
  useEffect(()=>{
      const themeSwitch=document.querySelectorAll('.theme-switch');
      const darkmode=document.querySelector('.dark-mode');
      const lightmode=document.querySelector('.light-mode');


      themeSwitch.forEach((mode)=>{
        
        mode.addEventListener('click',()=>{
          document.documentElement.classList.toggle('light')
  
          if(document.documentElement.classList.contains('light')){
            darkmode.style.display="block";
            lightmode.style.display="none"
  
          }
          else{
            lightmode.style.display="block"
            darkmode.style.display="none"
          }
      })
    
      })
          
    },[])

}

