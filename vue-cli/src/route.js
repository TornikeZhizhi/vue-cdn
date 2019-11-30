import User from "./components/routes/user/User.vue";
import UserDetail from "./components/routes/user/UserDetail.vue";
import UserStart from "./components/routes/user/UserStart.vue";
import UserEdit from "./components/routes/user/UserEdit.vue";
import Home from "./components/routes/Home.vue";
import Header from "./components/routes/Header.vue";

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: Home,
      "header-top": Header
    },
    beforeEnter: (to, from, next) => {
      console.log("inside in home");
      next();
    }
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header
    },
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ]
  },
  { path: "/redirect-me", redirect: { name: "home" } },
  { path: "*", redirect: { name: "home" } }
];
