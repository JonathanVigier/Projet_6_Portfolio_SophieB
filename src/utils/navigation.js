const logo = document.querySelector("h1");
export const navigationLinks = document.querySelectorAll(
  "header > nav > ul > li"
);

export function goToHomePage() {
  window.location.href = "./index.html";
}

export function goToPortfolio() {
  window.location.href = "./index.html#portfolio";
}

export function goToContact() {
  window.location.href = "./index.html#contact";
}

export function goToLoginPage() {
  window.location.href = "./login.html";
}

export function boldLinks(navigationLinks) {
  navigationLinks[2].style.fontWeight = "bold";
}

logo.addEventListener("click", goToHomePage);
navigationLinks[0].addEventListener("click", goToPortfolio);
navigationLinks[1].addEventListener("click", goToContact);
navigationLinks[2].addEventListener("click", (e) => {
  if (e.target.innerText === "logout") {
    localStorage.removeItem("token");
    document.location.reload(true);
  } else {
    goToLoginPage();
  }
});
