import { useEffect } from "react";

export function useMobileNav(){
  useEffect(() => {
    const mobileNavOpen = document.querySelector(".mobileNav-open-button");
    const mobileNavClose = document.querySelector(".mobileNav-close-button");
    const mobileMenu = document.querySelector(".menu");

    mobileNavOpen.addEventListener("click", () => {
      mobileMenu.classList.add("show");
      mobileNavClose.classList.add("show");
    });

    mobileNavClose.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      mobileNavClose.classList.remove("show");
    });
  }, []);
}

