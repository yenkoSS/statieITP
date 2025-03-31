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

document.querySelector(".btn-hero-services").addEventListener("click", (e) => {
  e.preventDefault();
  const sectionServices = document.querySelector(".section-services");
  sectionServices.scrollIntoView({ behavior: "smooth" });
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
