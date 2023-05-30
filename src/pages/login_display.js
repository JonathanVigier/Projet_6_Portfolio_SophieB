import { login, res } from "../api/authentification_services.js";
import {
  emailChecker,
  passwordChecker,
  email,
  password,
  validEmail,
  validPassword,
} from "../utils/validator.js";
import { serverErrorHandler } from "../utils/errors_handler.js";
import {
  goToHomePage,
  goToPortfolio,
  goToContact,
  boldLinks,
  navigationLinks,
} from "../utils/navigation.js";

const form = document.querySelector("form");
export const emailInput = document.querySelector('input[type="email"]');
export const passwordInput = document.querySelector('input[type="password"]');

let token, userId;

async function submitForm(e) {
  e.preventDefault();
  try {
    if ((validEmail, validPassword)) {
      await login(email, password).then((data) => {
        token = localStorage.setItem("token", data.token);
        userId = localStorage.setItem("userId", data.userId);
      });
    }
    serverErrorHandler(res);
  } catch (error) {
    console.error(error);
  }
}

emailInput.addEventListener("blur", (e) => {
  emailChecker(e.target.value);
});
passwordInput.addEventListener("blur", (e) => passwordChecker(e.target.value));
form.addEventListener("submit", submitForm);

boldLinks(navigationLinks);
