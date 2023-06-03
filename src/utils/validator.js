import { inputErrorHandler } from "./errors_handler.js";
import {
  validButton,
  formModal,
  inputsDataHandlers,
} from "../pages/modal_display.js";

export let validEmail = false;
export let validPassword = false;
export let validImage = false;
export let validTitle = false;
export let validCategory = false;
export let email, password, image, title, category;

export function emailChecker(value) {
  if (
    value.length > 0 &&
    !value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    inputErrorHandler("mail", "Le format de l'email est incorrect.");
  } else if (value.length === 0) {
    validEmail = false;
    inputErrorHandler("mail", "", true);
  } else {
    inputErrorHandler("mail", "", true);
    validEmail = true;
    email = value;
    console.log(validEmail);
  }
}

export function passwordChecker(value) {
  if (value.length > 0 && value.match("^(.{0,5}|[^0-9]*|[^A-Z]*|[^a-z]*)$")) {
    inputErrorHandler(
      "password",
      "Le mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule, un chiffre."
    );
  } else if (value.length === 0) {
    validPassword = false;
    inputErrorHandler("password", "", true);
  } else {
    inputErrorHandler("password", "", true);
    validPassword = true;
    password = value;
    console.log(validPassword);
  }
}

export function imageChecker(value) {
  for (let i = 0; i < value.files.length; i++) {
    if (
      value.files[i].type !== "image/png" &&
      value.files[i].type !== "image/jpeg"
    ) {
      console.log(
        "Ce type de fichier n'est pas accepté !",
        value.files[i].type
      );
    } else if (value.files[i].size > 4194304) {
      console.log("La taille du fichier est supérieure à 4 mo !");
    } else {
      validImage = true;
      image = value.files[i];
      console.log(validImage);
    }
  }
}

export function titleImageChecker(value) {
  if (value.length < 3) {
    inputErrorHandler(
      "image-title",
      "Le titre doit contenir au minimum 3 caractères !"
    );
    validTitle = false;
  } else {
    inputErrorHandler("image-title", "", true);
    validTitle = true;
    title = value;
  }
}

export function categoryImageChecker(value) {
  if (value === "0") {
    inputErrorHandler("image-category", "Veuillez choisir une catégorie !");
    console.log("Veuillez choisir une catégorie !");
    validCategory = false;
  } else {
    inputErrorHandler("image-category", "", true);
    validCategory = true;
    category = value;
  }
}

export function isDataValid() {
  if (validImage && validTitle && validCategory) {
    validButton.classList.add("valided");
  } else {
    validButton.classList.remove("valided");
  }
}

export function resetForm() {
  formModal.reset();
  validImage = false;
  validTitle = false;
  validCategory = false;
  const addImageContainer = document.querySelector(".add-image-container");
  addImageContainer.innerHTML = `
  <div class="picture-icon">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#B9C5CC" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
					</svg>
				</div>
				<label for="add-image-input" class="add-image-label">+ Ajouter photo</label>
				<input type="file" id="add-image-input" accept="image/jpeg, image/png" name="image">
				<p class="authorized-files-text">jpg, png : 4mo max</p>
  </div>
  `;
  inputsDataHandlers();
}
