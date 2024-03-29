// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.

// ---- set date -----
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// -----------close links-----
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// --------- fixed navbar ------
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ------- smooth scroll -------
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    // for example Clicking on a "Submit" button, prevent it from submitting a form
    // Clicking on a link, prevent the link from following the URL
    // prevent default
    e.preventDefault();
    // navigate to the specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    // slice extracts a section of a string without modifying original string

    const element = document.getElementById("id");
    //offsetTop - A Number, representing the top position of the element, in pixels
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
