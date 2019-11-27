import User from "./components/routes/user/User.vue";
import Home from "./components/routes/Home.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/user/:id", component: User }
];
