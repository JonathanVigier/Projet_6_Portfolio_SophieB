import { works } from "../api/works_services.js";
import { filters } from "../pages/categories_display.js";
import { workDisplay } from "../pages/works_display.js";

let worksFiltered = [];
let filterMethod = "Tous";

export function filterWorks() {
  for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", (e) => {
      switch (i) {
        case 0:
          filterMethod = e.target.textContent;
          worksFiltered = works;
          workDisplay(worksFiltered);
          break;
        case 1:
          filterMethod = e.target.textContent;
          worksFiltered = works.filter(
            (work) => work.category.name === filterMethod
          );
          workDisplay(worksFiltered);
          break;
        case 2:
          filterMethod = e.target.textContent;
          worksFiltered = works.filter(
            (work) => work.category.name === filterMethod
          );
          workDisplay(worksFiltered);
          break;
        case 3:
          filterMethod = e.target.textContent;
          worksFiltered = works.filter(
            (work) => work.category.name === filterMethod
          );
          workDisplay(worksFiltered);
          break;
      }
    });
  }
}
