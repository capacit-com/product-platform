// @ts-nocheck
import { Route } from "routify";

// Import your Svelte components
import MainPage from "./src/components/MainPage.svelte";
import LoginPage from "./src/components/LoginPage.svelte";
// Define your routes
const routes = [
  {
    name: "home",
    component: MainPage,
    meta: {
      title: "Scriptive",
    },
  },
  {
    name: "login",
    component: LoginPage,
    meta: {
      title: "Scriptive - login",
    },
  },
];

// Export the routes
export const {
  navigate,
  goto,
  routes: generatedRoutes,
} = new Route({
  routes,
});
