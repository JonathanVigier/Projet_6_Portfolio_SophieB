import { categoryDisplay } from "../pages/categories_display.js";
import { categoriesErrorHandler } from "../utils/errors_handler.js";

let categories = [{ id: 0, name: "Tous" }];
let response;
export let newCategories;

export async function fetchCategories() {
  try {
    response = await fetch("http://localhost:5678/api/categories")
      .then((res) => res.json())
      .then((data) => {
        newCategories = categories.concat(data);
      });
    categoryDisplay();
  } catch (error) {
    categoriesErrorHandler(error);
    console.error("Failed to fetch categories", error);
  }
}
