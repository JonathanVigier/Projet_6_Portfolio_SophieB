import { inputErrorHandler } from "./errors_handler.js";

export let validEmail = false;
export let validPassword = false;
export let email, password;

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
