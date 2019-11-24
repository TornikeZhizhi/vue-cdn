import Vue from "vue";
import App from "./App.vue";

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
  render: h => h(App)
});
