const defaultLanguage = "pt";

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Set texts based on language
  manageLaguageChangeEvents();

  const language = window.localStorage.getItem("language") ?? defaultLanguage;

  setTextsByLanguage(language);
});

function manageLaguageChangeEvents() {
  document.getElementById("dropdown-pt").addEventListener("click", () => {
    setTextsByLanguage("pt");
    window.localStorage.setItem("language", "pt");
  });

  document.getElementById("dropdown-en").addEventListener("click", () => {
    setTextsByLanguage("en");
    window.localStorage.setItem("language", "en");
  });
}

function setTextsByLanguage(language) {
  setMainSectionText(language);
  setNavBarText(language);
}

function setMainSectionText(language) {
  const sutTitle = conteudo_principal.sobre_titulo_principal[language];

  document.getElementById("sobre_titulo_principal").innerText = sutTitle;

  const title = conteudo_principal.titulo_principal[language];

  document.getElementById("titulo_principal").innerText = title;
}

function setNavBarText(language) {
  document.getElementById("language_dropdown").innerText =
    language.toUpperCase();
}
