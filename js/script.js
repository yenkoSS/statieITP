console.log("Hello, World!");

window.addEventListener("scroll", () => {
  if (scrollY > 550) {
    document.querySelector(".nav-fixed").style.display = "block";
  } else {
    document.querySelector(".nav-fixed").style.display = "none";
  }
});
document.querySelectorAll(".nav-header-logo").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = document.querySelector(".nav-header-logo").getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".nav-header-link-lg").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = el.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".btn-services").forEach((btn) => {
  btn.addEventListener("click", () => {
    const sectionContact = document.querySelector(".section-contact");
    sectionContact.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".btn-hero-services").addEventListener("click", (e) => {
  e.preventDefault();
  const sectionServices = document.querySelector(".section-services");
  sectionServices.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".btn-event-contact").addEventListener("click", (e) => {
  e.preventDefault();
  const sectionContact = document.querySelector(".section-contact");
  sectionContact.scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".btn-nav").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionContact = document.querySelector(".section-contact");
    sectionContact.scrollIntoView({ behavior: "smooth" });
  });
});

let uptoExperience = 0;
let uptoCars = 9000;

function updateCounterExperience() {
  let count = document.querySelector(".text-hero-counter-experience");
  count.innerHTML = ++uptoExperience + " <span>+</span><span>ani experiență</span>";
  if (uptoExperience === 10) {
    clearInterval(countsExperience);
  }
}

function updateCounterCars() {
  let count = document.querySelector(".text-hero-counter-cars");
  const increased = ++uptoCars;
  count.innerHTML =
    increased.toLocaleString() + " <span>+</span><span>autovehicule verificate</span>";
  if (uptoCars === 10000) {
    clearInterval(countsCars);
  }
}

let countsExperience = setInterval(updateCounterExperience, 1);
let countsCars = setInterval(updateCounterCars, 1);

document.querySelector(".icon-logo-footer").addEventListener("click", (e) => {
  e.preventDefault();
  const sectionHome = document.querySelector("#home");
  sectionHome.scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".nav-footer-link").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = document.querySelector(el.getAttribute("href"));
    id.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".icon-menu").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".nav-header-list-sm").style.display = "flex";
  });
});

document.querySelector(".icon-close").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "none";
});

document.querySelectorAll(".nav-header-link-sm").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = el.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    document.querySelector(".nav-header-list-sm").style.display = "none";
  });
});

const xOffsets = document.querySelectorAll(".offsetX");
const yOffsets = document.querySelectorAll(".offsetY");

const offsetXObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("offset-x0", entry.isIntersecting);
    if (entry.isIntersecting) offsetXObserver.unobserve(entry.target);
  });
});

const offsetYObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("offset-y0", entry.isIntersecting);
    if (entry.isIntersecting) offsetYObserver.unobserve(entry.target);
  });
});

xOffsets.forEach((xOffset) => offsetXObserver.observe(xOffset));
yOffsets.forEach((yOffset) => offsetYObserver.observe(yOffset));
