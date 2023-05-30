import { goToHomePage } from "./navigation.js";
import { filtersContainer } from "../pages/categories_display.js";

const formContent = document.querySelector(".form-content");

export function inputErrorHandler(tag, message, valid) {
  const input = document.getElementById(tag);
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    input.classList.add("error-input");
    span.classList.add("error");
    span.textContent = message;
  } else {
    input.classList.remove("error-input");
    span.classList.remove("error");
    span.textContent = "";
  }
}

export function serverErrorHandler(response) {
  const error = document.querySelector(".error-login");
  if (!response.ok) {
    switch (response.status) {
      case 401:
        error.textContent =
          `Une erreur ${response.status} est survenue ! ` +
          "Identifiants incorrects";
        setTimeout(() => {
          error.textContent = "";
        }, 10000);
        break;
      case 404:
        error.textContent =
          `Une erreur ${response.status} est survenue ! ` +
          "Identifiants incorrects";
        setTimeout(() => {
          error.textContent = "";
        }, 3000);
        break;
      case 500:
        error.textContent =
          `Une erreur ${response.status} est survenue ! ` +
          "Erreur interne du serveur.";
        setTimeout(() => {
          error.textContent = "";
        }, 10000);
        break;
    }
    formContent.appendChild(error);
  } else {
    goToHomePage();
  }
}

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
