import User from "./components/routes/user/User.vue";
import UserDetail from "./components/routes/user/UserDetail.vue";
import UserStart from "./components/routes/user/UserStart.vue";
import UserEdit from "./components/routes/user/UserEdit.vue";
import Home from "./components/routes/Home.vue";

export const routes = [
  { path: "", component: Home, name: "home" },
  {
    path: "/user",
    component: User,
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ]
  }
];
