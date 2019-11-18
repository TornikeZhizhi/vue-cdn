import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    changeAge(age, name) {
      this.$emit("ageWasEdited", age);
      this.$emit("nameWasEdited", name);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
