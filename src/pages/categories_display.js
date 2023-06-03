import {
  resetFilter,
  objectFilter,
  appartmentFilter,
  resortsFilter,
} from "../utils/filters.js";
import { newCategories } from "../api/categories_services.js";
import { galleries } from "./works_display.js";

const portfolio = document.getElementById("portfolio");

// Instanciation des containers de boutons de filtres
export const filtersContainer = document.createElement("div");
export const filtersContent = document.createElement("ul");

// Affichage et mise en style des containers de bouton de filtres
if (portfolio) {
  portfolio.insertBefore(filtersContainer, galleries[0]);
}
filtersContainer.classList.add("filters-container");
filtersContainer.appendChild(filtersContent);
filtersContent.classList.add("filters-content");

export let filters;

export function categoryDisplay() {
  filtersContent.innerHTML = newCategories
    .map(
      (category) =>
        `<li class="filters" id=${category.id}>${category.name}</li>`
    )
    .join("");
  filters = filtersContent.querySelectorAll("li");

  resetFilter();
  objectFilter();
  appartmentFilter();
  resortsFilter();
}
