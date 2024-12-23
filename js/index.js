///////////////////////////////////////////////////////////////////////////

// Information from API (assume)
const doData = [
  {
    topic: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    iconFile: "watch.svg",
  },
  {
    topic: "Awesome code",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    iconFile: "arrows-in-simple.svg",
  },
  {
    topic: "free template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    iconFile: "tray.svg",
  },
];
const servicesData = [
  {
    topic: "SERVICES one",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.",
    imgFile: "img-services-1.jpeg",
  },
  {
    topic: "SERVICES two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.",
    imgFile: "img-services-2.jpeg",
  },
];
const tabData = [
  {
    topic: "Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere",
    imgFile: "img-tab-1.jpeg",
  },
  {
    topic: "Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere",
    imgFile: "img-tab-2.jpeg",
  },
  {
    topic: "Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere",
    imgFile: "img-tab-3.jpeg",
  },
];

///////////////////////////////////////////////////////////////////////////

// Selection Element
const doBody = document.querySelector(".do__body");
const servicesBody = document.querySelector(".services__body");
const tabGroup = document.querySelector(".tab__group-content");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");
const bgNavigation = document.querySelector(".bg-navigation");
const bgLink = document.querySelectorAll(".bg-navigation__link");
const btnClose = document.querySelector(".btn-close");
const groupBtn = document.querySelector(".tab__body .group-btn");
const btnTab = document.querySelector(".btn--tab");
const sectionDo = document.querySelector(".section-do");
let tabContent;
let features;

///////////////////////////////////////////////////////////////////////////

// Handle Event Navbar
const handleOpenMenu = function () {
  bgNavigation.classList.add("transform-to-right");
};

const handleCloseMenu = function () {
  bgNavigation.classList.remove("transform-to-right");
};

///////////////////////////////////////////////////////////////////////////

// Handle Event Tab
const resetBtnActive = function () {
  const btnTabs = document.querySelectorAll(".btn--tab");
  btnTabs.forEach((b) => {
    b.classList.remove("change-backgroundColor-to-blue");
  });
};

const resetTabActive = function () {
  tabContent.forEach((t) => {
    t.classList.remove("active");
  });
};

const handleChangeTab = function (e) {
  const curEl = e.target.closest(".btn--tab");
  if (!curEl) return;
  const dataValue = curEl.dataset.value;

  resetBtnActive();
  curEl.classList.add("change-backgroundColor-to-blue");

  resetTabActive();
  tabContent.forEach((t) => {
    if (t.dataset.value === dataValue) {
      t.classList.add("active");
      return;
    }
  });
};

///////////////////////////////////////////////////////////////////////////

// AddEventListener
const addEventListenerToElement = function () {
  navMenu.addEventListener("click", handleOpenMenu);
  btnClose.addEventListener("click", handleCloseMenu);
  groupBtn.addEventListener("click", handleChangeTab);
};

///////////////////////////////////////////////////////////////////////////

// Creating All Element
const createAllEl = function () {
  insertElContentDo(doBody);
  insertElContentServices(servicesBody);
  insertElContentTab(tabGroup);
};

///////////////////////////////////////////////////////////////////////////

// DoElement
const addClassToElDo = function (obj) {
  obj.features.classList.add("features");
  obj.featuresIcon.classList.add("features__icon");
  obj.featuresIcon_icon.classList.add("features__icon-icon");
  obj.heading3.classList.add("heading-tertiary");
  obj.paragraph.classList.add("paragraph");
};

const addChildNodeElDO = function (obj) {
  obj.features.appendChild(obj.featuresIcon);
  obj.featuresIcon.appendChild(obj.featuresIcon_icon);
  obj.features.appendChild(obj.heading3);
  obj.features.appendChild(obj.paragraph);
  obj.parentEl.appendChild(obj.features);
};

const createElDo = function (parentEl) {
  // create Element
  const features = document.createElement("div");
  const featuresIcon = document.createElement("div");
  const featuresIcon_icon = document.createElement("img");
  const heading3 = document.createElement("h3");
  const paragraph = document.createElement("p");

  // add class to element
  addClassToElDo({
    features,
    featuresIcon,
    featuresIcon_icon,
    heading3,
    paragraph,
  });

  // add child node inside parent node
  addChildNodeElDO({
    features,
    featuresIcon,
    featuresIcon_icon,
    heading3,
    paragraph,
    parentEl,
  });
  return { featuresIcon_icon, heading3, paragraph };
};

const insertElContentDo = function (parentEl) {
  doData.forEach((d) => {
    const objectContent = createElDo(parentEl);
    objectContent.featuresIcon_icon.src = `../icon/${d.iconFile}`;
    objectContent.heading3.textContent = `${d.topic}`;
    objectContent.paragraph.textContent = `${d.description}`;
  });
};

///////////////////////////////////////////////////////////////////////////

// Services Element
const addClassToElServices = function (obj) {
  obj.servicesBox.classList.add("services__box");
  obj.servicesBoxImg.classList.add("services__box-img");
  obj.servicesImg.classList.add("services__img");
  obj.heading3.classList.add("heading-tertiary");
  obj.heading3.classList.add("change-color-text-white");
  obj.paragraph.classList.add("paragraph");
  obj.link.classList.add("btn");
  obj.link.classList.add("btn--learnmore");
};

const addChildNodeElServices = function (obj) {
  obj.servicesBox.appendChild(obj.servicesBoxImg);
  obj.servicesBoxImg.appendChild(obj.servicesImg);
  obj.servicesBox.appendChild(obj.heading3);
  obj.servicesBox.appendChild(obj.paragraph);
  obj.servicesBox.appendChild(obj.link);
  obj.parentEl.appendChild(obj.servicesBox);
};

const createElServices = function (parentEl) {
  // create Element
  const servicesBox = document.createElement("div");
  const servicesBoxImg = document.createElement("div");
  const servicesImg = document.createElement("img");
  const heading3 = document.createElement("h3");
  const paragraph = document.createElement("p");
  const link = document.createElement("a");

  // add class to element
  addClassToElServices({
    servicesBox,
    servicesBoxImg,
    servicesImg,
    heading3,
    paragraph,
    link,
  });

  // add child node inside parent node
  addChildNodeElServices({
    servicesBox,
    servicesBoxImg,
    servicesImg,
    heading3,
    paragraph,
    link,
    parentEl,
  });
  return { servicesImg, heading3, paragraph, link };
};

const insertElContentServices = function (parentEl) {
  servicesData.forEach((s) => {
    const objectContent = createElServices(parentEl);
    objectContent.servicesImg.src = `../img/${s.imgFile}`;
    objectContent.heading3.textContent = `${s.topic}`;
    objectContent.paragraph.textContent = `${s.description}`;
    objectContent.link.textContent = "Learn More";
    objectContent.link.href = "#";
  });
};

///////////////////////////////////////////////////////////////////////////

// Tab Element
const addClassToElTab = function (obj) {
  obj.tabContent.classList.add("tab__content");
  obj.tabImg.classList.add("tab__img");
  obj.tabImg_img.classList.add("tab__img--img");
  obj.heading2.classList.add("heading-secondary");
  obj.paragraph.classList.add("paragraph");
};

const addChildNodeElTab = function (obj) {
  obj.tabContent.appendChild(obj.tabImg);
  obj.tabImg.appendChild(obj.tabImg_img);
  obj.tabContent.appendChild(obj.heading2);
  obj.tabContent.appendChild(obj.paragraph);
  obj.parentEl.appendChild(obj.tabContent);
};

const createElTab = function (parentEl) {
  // create element
  const tabContent = document.createElement("div");
  const tabImg = document.createElement("div");
  const tabImg_img = document.createElement("img");
  const heading2 = document.createElement("h2");
  const paragraph = document.createElement("p");

  // add class to element
  addClassToElTab({ tabContent, tabImg, tabImg_img, heading2, paragraph });

  // add child node inside parent node
  addChildNodeElTab({
    tabContent,
    tabImg,
    tabImg_img,
    heading2,
    paragraph,
    parentEl,
  });
  return { tabContent, tabImg_img, heading2, paragraph };
};

const insertElContentTab = function (parentEl) {
  tabData.forEach((t, index) => {
    const objectContent = createElTab(parentEl);
    objectContent.tabImg_img.src = `../img/${t.imgFile}`;
    objectContent.tabContent.setAttribute("data-value", `${index + 1}`);
    objectContent.heading2.textContent = `${t.topic}`;
    objectContent.paragraph.textContent = `${t.description}`;
  });
};

///////////////////////////////////////////////////////////////////////////

// Observe Section Do
const handleObserve = function (entires) {
  entires.forEach((e) => {
    if (e.isIntersecting) {
      features.forEach((f, index) => {
        setTimeout(() => {
          f.classList.add("show-content");
        }, (index + 1) * 200);
      });
    }
  });
};

const observeSectionDo = function () {
  const observe = new IntersectionObserver(handleObserve, {
    root: null,
    threshold: 0.5,
  });

  observe.observe(sectionDo);
};

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

const checkCurPage = function () {
  const pathName = window.location.pathname.split("/").at(-1);
  changeActiveLink(navLink, pathName, "change-Color-text-blue");
  changeActiveLink(bgLink, pathName, "active-link");
};

///////////////////////////////////////////////////////////////////////////

// Intitial State
const intitialState = function () {
  tabContent = document.querySelectorAll(".tab__content");
  features = document.querySelectorAll(".features");
  tabContent[0].classList.add("active");
  btnTab.classList.add("change-backgroundColor-to-blue");
  navLink[0].classList.add("change-Color-text-blue");
  bgLink[0].classList.add("active-link");
};

///////////////////////////////////////////////////////////////////////////

// Start Program
const startProgram = function () {
  createAllEl();
  intitialState();
  addEventListenerToElement();
  observeSectionDo();
  checkCurPage();
};

startProgram();

///////////////////////////////////////////////////////////////////////////
