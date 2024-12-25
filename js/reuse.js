///////////////////////////////////////////////////////////////////////////

// Selecting Element
const navMenu = document.querySelector(".nav__menu");
export const navLink = document.querySelectorAll(".nav__link");
const bgNavigation = document.querySelector(".bg-navigation");
export const bgLink = document.querySelectorAll(".bg-navigation__link");
const btnClose = document.querySelector(".btn-close");

///////////////////////////////////////////////////////////////////////////

// Handle Nav
const handleOpenMenu = function () {
  bgNavigation.classList.add("transform-to-right");
};

const handleCloseMenu = function () {
  bgNavigation.classList.remove("transform-to-right");
};

///////////////////////////////////////////////////////////////////////////

// Current Page
const changeActiveLink = function (link, pathName, className) {
  link.forEach((l) => {
    const pathL = l.href.split("/").at(-1);
    if (pathName === "") return;
    if (pathL === pathName) {
      l.classList.add(className);
    } else {
      l.classList.remove(className);
    }
  });
};

///////////////////////////////////////////////////////////////////////////

const checkCurPage = function () {
  const pathName = window.location.pathname.split("/").at(-1);
  changeActiveLink(navLink, pathName, "change-Color-text-blue");
  changeActiveLink(bgLink, pathName, "active-link");
};

///////////////////////////////////////////////////////////////////////////

// AddEventListener
navMenu.addEventListener("click", handleOpenMenu);
btnClose.addEventListener("click", handleCloseMenu);

///////////////////////////////////////////////////////////////////////////

// Use intitial function
checkCurPage();

///////////////////////////////////////////////////////////////////////////
