import * as data from "../js/data.js";
import * as reuse from "../js/reuse.js";

///////////////////////////////////////////////////////////////////////////

// Selection Element
const doBody = document.querySelector(".do__body");
const servicesBody = document.querySelector(".services__body");
const tabGroup = document.querySelector(".tab__group-content");
const groupBtn = document.querySelector(".tab__body .group-btn");
const btnTab = document.querySelector(".btn--tab");
const sectionDo = document.querySelector(".section-do");
let tabContent;
let features;

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
  data.doData.forEach((d) => {
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
  data.servicesData.forEach((s) => {
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
  data.tabData.forEach((t, index) => {
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

///////////////////////////////////////////////////////////////////////////

// Intitial State
const intitialState = function () {
  tabContent = document.querySelectorAll(".tab__content");
  features = document.querySelectorAll(".features");
  tabContent[0].classList.add("active");
  btnTab.classList.add("change-backgroundColor-to-blue");
  reuse.navLink[0].classList.add("change-Color-text-blue");
  reuse.bgLink[0].classList.add("active-link");
};

///////////////////////////////////////////////////////////////////////////

// Start Program
export const startProgram = function () {
  createAllEl();
  intitialState();
  addEventListenerToElement();
  observeSectionDo();
};

startProgram();

///////////////////////////////////////////////////////////////////////////
