import Vue from "vue";
import App from "./App.vue";

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
