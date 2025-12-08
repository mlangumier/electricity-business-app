import { Routes } from '@angular/router';
import { Login } from "./core/auth/pages/login/login";
import { Register } from "./core/auth/pages/register/register";
import { Home } from "./features/home/home";
import { Dashboard } from "./features/user/pages/dashboard/dashboard";

export const routes: Routes = [
  { path: '', component: Home, title: "Accueil | Electricity Business" },

  { path: 'login', component: Login, title: "Connexion" },
  { path: 'register', component: Register, title: "Inscription" },

  { path: 'dashboard', component: Dashboard, title: "Dashboard" }, // Add guard
  { path: "**", redirectTo: "", pathMatch: "full" }
];
