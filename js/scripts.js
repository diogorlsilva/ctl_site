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
  const language = window.localStorage.getItem("language") ?? defaultLanguage;

  changeLanguage(language);
});

function changeLanguage(lang) {
  setMainSectionText(lang);
  setNavBarText(lang);

  window.localStorage.setItem("language", lang);
}

function setMainSectionText(lang) {
  const sutTitle = conteudo_principal.sobre_titulo_principal[lang];

  translate("sobre_titulo_principal", sutTitle);

  const title = conteudo_principal.titulo_principal[lang];

  translate("titulo_principal", title);
}

function setNavBarText(lang) {
  translate("language_dropdown", lang.toUpperCase());
  translate("nav-organisation", titulos_navbar.organisation[lang]);
  translate("nav-projects", titulos_navbar.projects[lang]);
  translate("nav-services", titulos_navbar.services[lang]);
  translate("nav-contacts", titulos_navbar.contacts[lang]);
}

function translate(id, value) {
  document.getElementById(id).innerText = value;
}
