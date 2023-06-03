import { filtersContainer } from "../pages/categories_display.js";
import { navigationLinks } from "../utils/navigation.js";
import { openModal } from "./modal_display.js";

const header = document.getElementById("header");
const profilImgButtonModifierContainer = document.createElement("div");
const profilDescButtonModifierContainer = document.createElement("div");
const projectButtonModifierContainer = document.createElement("div");

export function generateAdminBanner() {
  const adminBanner = document.createElement("div");
  const iconBannerContainer = document.createElement("div");
  const iconBanner = document.createElement("span");
  const iconBannerText = document.createElement("p");
  const buttonBanner = document.createElement("a");

  adminBanner.classList.add("admin-banner");
  iconBannerContainer.classList.add("admin-banner-icon-container");
  iconBanner.classList.add("admin-banner-icon");
  iconBannerText.classList.add("admin-banner-icon-text");
  buttonBanner.classList.add("admin-banner-button");

  buttonBanner.textContent = "publier les changements";
  iconBanner.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  iconBannerText.textContent = "Mode édition";

  adminBanner.appendChild(iconBannerContainer);
  adminBanner.appendChild(buttonBanner);
  iconBannerContainer.appendChild(iconBanner);
  iconBannerContainer.appendChild(iconBannerText);

  document.body.insertBefore(adminBanner, header);
}

export function generateAdminButtonsModifier() {
  const introductionSection = document.getElementById("introduction");
  const portfolioTitle = document.getElementById("portfolio-title");

  const profilImgButtonModifierIcon = document.createElement("span");
  const profilImgButtonModifierLink = document.createElement("p");

  const profilDescButtonModifierIcon = document.createElement("span");
  const profilDescButtonModifierLink = document.createElement("p");

  const projectButtonModifierIcon = document.createElement("span");
  const projectButtonModifierLink = document.createElement("p");

  profilImgButtonModifierIcon.innerHTML =
    '<i class="fa-regular fa-pen-to-square"></i>';
  profilImgButtonModifierLink.textContent = "modifier";
  profilDescButtonModifierIcon.innerHTML =
    '<i class="fa-regular fa-pen-to-square"></i>';
  profilDescButtonModifierLink.textContent = "modifier";
  projectButtonModifierIcon.innerHTML =
    '<i class="fa-regular fa-pen-to-square"></i>';
  projectButtonModifierLink.textContent = "modifier";

  profilImgButtonModifierContainer.classList.add(
    "profil-img-modifier-container"
  );
  profilDescButtonModifierContainer.classList.add(
    "profil-desc-modifier-container"
  );
  projectButtonModifierContainer.classList.add("project-modifier-container");

  profilImgButtonModifierContainer.appendChild(profilImgButtonModifierIcon);
  profilImgButtonModifierContainer.appendChild(profilImgButtonModifierLink);
  profilDescButtonModifierContainer.appendChild(profilDescButtonModifierIcon);
  profilDescButtonModifierContainer.appendChild(profilDescButtonModifierLink);
  projectButtonModifierContainer.appendChild(projectButtonModifierIcon);
  projectButtonModifierContainer.appendChild(projectButtonModifierLink);

  introductionSection.appendChild(profilImgButtonModifierContainer);
  introductionSection.appendChild(profilDescButtonModifierContainer);
  portfolioTitle.appendChild(projectButtonModifierContainer);
}

export function displayAdministratorPage() {
  generateAdminBanner();
  navigationLinks[2].textContent = "logout";
  filtersContainer.remove();
  generateAdminButtonsModifier();
  console.log("Bienvenue dans le mode édition !");
}

projectButtonModifierContainer.addEventListener("click", openModal);
