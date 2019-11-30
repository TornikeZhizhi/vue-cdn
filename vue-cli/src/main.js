import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { routes } from "./route";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  console.log("before0");

  next();
});

Vue.use(VueResource);
Vue.http.options.root = "https://vue-http-9f266.firebaseio.com/data.json";
// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   if (request.method == "POST") {
//     request.method = "PUT";
//   }
//   next(response => {
//     response.json = () => {
//       return { messages: response.body };
//     };
//   });
// });
Vue.filter("globalLowecase", function(value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    // console.log("global mixin");
  }
});

Vue.directive("highlight", {
  bind(el, binding, vmode) {
    // el.style.background = binding.value;
    var delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 2000;
    }
    setTimeout(() => {
      if (binding.arg == "background") {
        el.style.background = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

export const eventBus = new Vue({
  methods: {
    changeServerStatus(index, info) {
      this.$emit("indexWasEdited", index);
      this.$emit("infoWasEdited", info);
    }
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
