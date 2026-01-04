import { Routes } from '@angular/router';
import { Login } from "./features/auth/pages/login/login";
import { Register } from "./features/auth/pages/register/register";
import { Home } from "./features/public/home/home";

const appTitle: string = "Electricity Business";

export const routes: Routes = [
  { path: '', component: Home, title: appTitle },
  // { path: '', component: Home, title: "Electricity Business" },

  //---   Authentication
  { path: 'login', component: Login, title: `Connexion | ${appTitle}` },
  { path: 'register', component: Register, title: `Inscription | ${appTitle}` },

  //---   User routes
  {
    path: 'app',
    loadComponent: () => import("./features/user/dashboard/dashboard").then(m => m.Dashboard),
    title: `Mon Espace | ${appTitle}`,
    // Add guard
    children: [
      // { path: 'profile', component: UserProfile, title: "Profil" }
    ]
  }, // Add guard

  { path: "**", redirectTo: "", pathMatch: "full" }
];
