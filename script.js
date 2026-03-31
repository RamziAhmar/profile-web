const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector("#about");
  const aboutTop = aboutSection.offsetTop - 80;

  if (window.scrollY >= aboutTop) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // active link highlight
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if (window.scrollY >= top && window.scrollY < bottom) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });

  // fix: if near bottom, force last section active
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    navLinks.forEach((link) => link.classList.remove("active"));
    const lastLink = document.querySelector('.nav-link[href="#projects"]');
    if (lastLink) lastLink.classList.add("active");
  }
});
