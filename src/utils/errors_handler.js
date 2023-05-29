import { filtersContainer } from "../pages/categories_display.js";

export function worksErrorHandler() {
  const errorMessage = document.createElement("span");
  errorMessage.classList.add("error-fetch");
  errorMessage.textContent =
    "Impossible d'afficher les travaux, une erreur est survenue.";
  filtersContainer.appendChild(errorMessage);
}

export function categoriesErrorHandler() {
  const errorMessage = document.createElement("span");
  errorMessage.classList.add("error-fetch");
  errorMessage.textContent =
    "Impossible d'afficher les catégories, une erreur est survenue.";
  filtersContainer.appendChild(errorMessage);
}
