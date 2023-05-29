import { works } from "../api/works_services.js";
import { filters } from "../pages/categories_display.js";
import { workDisplay } from "../pages/works_display.js";

let worksFiltered = [];
let filterMethod = "Tous";

export function resetFilter() {
  filters[0].addEventListener("click", (e) => {
    filterMethod = e.target.textContent;
    worksFiltered = works;
    workDisplay(worksFiltered);
  });
}

export function objectFilter() {
  filters[1].addEventListener("click", (e) => {
    filterMethod = e.target.textContent;
    worksFiltered = works.filter((work) => work.category.name === filterMethod);
    workDisplay(worksFiltered);
  });
}

export function appartmentFilter() {
  filters[2].addEventListener("click", (e) => {
    filterMethod = e.target.textContent;
    worksFiltered = works.filter((work) => work.category.name === filterMethod);
    workDisplay(worksFiltered);
  });
}

export function resortsFilter() {
  filters[3].addEventListener("click", (e) => {
    filterMethod = e.target.textContent;
    worksFiltered = works.filter((work) => work.category.name === filterMethod);
    workDisplay(worksFiltered);
  });
}
