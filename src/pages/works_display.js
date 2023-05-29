export const galleries = document.querySelectorAll(".gallery");

export function workDisplay(arr) {
  galleries.forEach((gallery) => {
    gallery.innerHTML = arr
      .map(
        (work) => `
      <figure id=${work.id} data-categoryId=${work.categoryId}>
        <img src=${work.imageUrl} alt=${work.title} class="image"/>
        <figcaption>${work.title}</figcaption>
        </figure>`
      )
      .join("");
  });
}
