import { Routes } from '@angular/router';
import { Login } from "./features/auth/login/login";
import { Register } from "./features/auth/register/register";
import { Home } from "./features/public/home/home";
import { Dashboard } from "./features/user/dashboard/dashboard";

//TODO: transform routes to lazy-loaded routes with "loadComponent"

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./features/public/home/home").then(m => m.Home),
    title: "Electricity Business"
  },
  // { path: '', component: Home, title: "Electricity Business" },

  { path: 'login', component: Login, title: "Connexion" },
  { path: 'register', component: Register, title: "Inscription" },

  // { path: 'app', component: Dashboard, title: "Dashboard" }, // Add guard
  {
    path: 'app', component: Dashboard, title: "Mon Espace | Electricity Business", children: [
      // { path: 'profile', component: UserProfile, title: "Profil" }
    ]
  }, // Add guard
  { path: "**", redirectTo: "", pathMatch: "full" }
];
