import { Routes } from '@angular/router';
import { Home } from "./features/home/home";

export const routes: Routes = [
  { path: '', component : Home, title: "Accueil" },
  // { path: 'login', component : Login, title: "Connexion" },
  // { path: 'register', component : Register, title: "Inscription" },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
