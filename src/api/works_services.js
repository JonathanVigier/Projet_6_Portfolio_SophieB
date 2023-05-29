import { worksErrorHandler } from "../utils/errors_handler.js";
import { workDisplay } from "../pages/works_display.js";

let response;
export let works = [];

export async function fetchWorks() {
  try {
    response = await fetch("http://localhost:5678/api/works")
      .then((res) => res.json())
      .then((data) => (works = data));
    workDisplay(works);
  } catch (error) {
    worksErrorHandler(error);

    console.error("Failed to fetch works");
  }
}
