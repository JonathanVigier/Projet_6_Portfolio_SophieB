import { fetchWorks } from "./api/works_services.js";
import { fetchCategories } from "./api/categories_services.js";
import { administratorPageUpdate } from "./utils/administrator_mod.js";
import {
  goToPortfolio,
  goToContact,
  goToLoginPage,
} from "./utils/navigation.js";

// Appel des fonctions de fetch et du mode aministrateur
fetchWorks();
fetchCategories();
administratorPageUpdate();
