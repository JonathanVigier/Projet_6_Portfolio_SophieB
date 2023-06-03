import { worksErrorHandler } from "../utils/errors_handler.js";
import { workDisplay } from "../pages/works_display.js";
import { closeModal, generateDeleteIcons } from "../pages/modal_display.js";

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

export async function addWorks(data, token) {
  try {
    await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    await fetchWorks();
    closeModal("addImageModal");
  } catch (error) {
    console.error(error);
  }
}

export async function deleteWorks(id, token) {
  try {
    if (window.confirm("Êtes vous sûr de vouloir supprimer cette image ?")) {
      await fetch(`http://localhost:5678/api/works/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      await fetchWorks();
      generateDeleteIcons();
    }
  } catch (err) {
    console.error(err);
  }
}
