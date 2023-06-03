import { displayAdministratorPage } from "../pages/administrator_display.js";
import { goToHomePage } from "./navigation.js";
export const token = window.localStorage.getItem("token");
export const userId = window.localStorage.getItem("userId");

export function administratorPageUpdate() {
  token && token !== "undefined" ? displayAdministratorPage() : null;
}
