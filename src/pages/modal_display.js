import { deleteWorks, addWorks } from "../api/works_services.js";
import { token } from "../utils/administrator_mod.js";
import {
  categoryImageChecker,
  imageChecker,
  titleImageChecker,
  isDataValid,
  resetForm,
  validCategory,
  validImage,
  validTitle,
} from "../utils/validator.js";

export const validButton = document.getElementById("valid-button");

// Modifier Modal
const modifierModal = document.querySelector(".modifier-modal");
const modifierModalWrapper = document.querySelector(".modifier-modal-wrapper");
const closeModifierModalIcon = document.querySelector(".close-modifier-modal");

// Add Image Modal
const addImageModal = document.querySelector(".add-image-modal");
const addImageModalWrapper = document.querySelector(".add-image-modal-wrapper");
const closeAddImageModalIcon = document.querySelector(".close-add-image-modal");
const backArrowIcon = document.getElementById("arrow-back");
const addImageButton = document.getElementById("add-image-button");
export const formModal = document.querySelector(".add-image-form");

export function openModal() {
  modifierModal.style.display = "block";
  modifierModal.removeAttribute("aria-hidden");
  modifierModal.setAttribute("aria-modal", "true");

  modifierModalWrapper.classList.add("showed");

  generateDeleteIcons();

  closeModifierModalIcon.addEventListener("click", () =>
    closeModal("modifierModal")
  );

  addImageButton.addEventListener("click", goToAddImageModal);
}

export function closeModal(element) {
  if (element === "modifierModal") {
    modifierModal.style.display = "none";
    modifierModal.setAttribute("aria-hidden", "true");
    modifierModal.removeAttribute("aria-modal");
    modifierModalWrapper.classList.remove("showed");
  } else if (element === "addImageModal") {
    addImageModal.style.display = "none";
    addImageModal.setAttribute("aria-hidden", "true");
    addImageModal.removeAttribute("aria-modal");
    addImageModalWrapper.classList.remove("showed");
  }
}

export function generateDeleteIcons() {
  const deleteIcons = document.querySelectorAll("#delete-icon > svg");
  deleteIcons.forEach((icon) =>
    icon.addEventListener("click", () => {
      deleteWorks(icon.parentElement.offsetParent.id, token);
    })
  );
}

export function inputsDataHandlers() {
  const imageUrlInput = document.getElementById("add-image-input");
  const imageTitleInput = document.getElementById("image-title");
  const imageCategoryInput = document.getElementById("image-category");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (validImage && validTitle && validCategory) {
      let formData = new FormData(formModal);

      addWorks(formData, token);
      formModal.removeEventListener("submit", formSubmitHandler);
    } else {
      window.alert("Veuillez remplir tous les champs du formulaire !");
    }
  };

  imageUrlInput.addEventListener("change", (e) => {
    e.preventDefault();
    imageChecker(e.target);
    if (validImage) {
      const labelAddImage = document.querySelector(".add-image-label");
      const imageFileReader = new FileReader();
      const imagePreview = document.createElement("img");
      imagePreview.classList.add("preview");

      imageFileReader.addEventListener("load", (e) => {
        imagePreview.src = e.target.result;
      });
      imageFileReader.readAsDataURL(e.target.files[0]);

      labelAddImage.style.display = "none";
      imageUrlInput.after(imagePreview);
    }
  });

  imageTitleInput.addEventListener("change", (e) => {
    titleImageChecker(e.target.value);
    isDataValid();
  });

  imageCategoryInput.addEventListener("change", (e) => {
    categoryImageChecker(e.target.value);
    isDataValid();
  });

  formModal.addEventListener("submit", formSubmitHandler);
}

function goToAddImageModal() {
  addImageModal.style.display = "block";
  addImageModal.removeAttribute("aria-hidden");
  addImageModal.setAttribute("aria-modal", "true");

  addImageModalWrapper.classList.add("showed");

  backArrowIcon.addEventListener("click", goBackToModifierModal);

  closeAddImageModalIcon.addEventListener("click", () =>
    closeModal("addImageModal")
  );

  resetForm();

  console.log(
    "validImage is : " + validImage,
    "validTitle is : " + validTitle,
    "validCategory is : " + validCategory
  );

  closeModal("modifierModal");
}

function goBackToModifierModal() {
  openModal();
  closeModal("addImageModal");
}
