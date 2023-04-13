let categories = [{ id: 0, name: "Tous" }];
let works = [];
let worksFiltered = [];
let filterMethod = "Tous";

const portfolio = document.getElementById("portfolio");

// Instanciation des containers de boutons de filtres
const filtersContainer = document.createElement("div");
const filtersContent = document.createElement("ul");

const gallery = document.querySelector(".gallery");

portfolio.insertBefore(filtersContainer, gallery);
filtersContainer.classList.add("filters-container");
filtersContainer.appendChild(filtersContent);
filtersContent.classList.add("filters-content");

async function fetchCategories() {
  await fetch("http://localhost:5678/api/categories")
    .then((res) => res.json())
    .then((data) => {
      newCategories = categories.concat(data);
    });
  categoryDisplay();
}

async function fetchWorks() {
  await fetch("http://localhost:5678/api/works")
    .then((res) => res.json())
    .then((data) => (works = data));
  workDisplay(works);
  console.log(works);
}

function categoryDisplay() {
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

function workDisplay(arr) {
  //   for (let i = 0; i < works.length; i++) {
  //     const project = document.createElement("figure");
  //     const projectImage = document.createElement("img");
  //     const projectTitle = document.createElement("figcaption");
  //     gallery.appendChild(project);
  //     project.appendChild(projectImage);
  //     project.appendChild(projectTitle);

  //     projectImage.src = works[i].imageUrl;
  //     projectTitle.textContent = works[i].title;
  //   }

  gallery.innerHTML = arr
    .map(
      (work) => `
  <figure id=${work.id} data-categoryId=${work.categoryId}>
    <img src=${work.imageUrl} alt=${work.title}/>
    <figcaption>${work.title}</figcaption>
    </figure>`
    )
    .join("");
}

/* Fonction de fetch */

fetchCategories();
fetchWorks();

/* Fonctions de filtres */

function resetFilter() {
  filters[0].addEventListener("click", (e) => {
    filterMethod = e.target.textContent;
    worksFiltered = works;
    console.log(filterMethod);
    workDisplay(worksFiltered);
  });
}

function objectFilter() {
  filters[1].addEventListener("click", (e) => {
    filterMethod = e.target.textContent;
    console.log(filterMethod);
    worksFiltered = works.filter((work) => work.category.name === filterMethod);
    workDisplay(worksFiltered);
  });
}

function appartmentFilter() {
  filters[2].addEventListener("click", (e) => {
    filterMethod = e.target.textContent;
    console.log(filterMethod);
    worksFiltered = works.filter((work) => work.category.name === filterMethod);
    workDisplay(worksFiltered);
  });
}

function resortsFilter() {
  filters[3].addEventListener("click", (e) => {
    filterMethod = e.target.textContent;
    console.log(filterMethod);
    worksFiltered = works.filter((work) => work.category.name === filterMethod);
    workDisplay(worksFiltered);
  });
}
