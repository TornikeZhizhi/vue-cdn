<template>
  <div class="component">
    <p>User created Age: {{ userAge }} - {{ userName }}</p>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    userAge: Number,
    userName: String
  },
  created() {
    eventBus.$on("ageWasEdited", age => {
      this.userAge = age;
    });
    eventBus.$on("nameWasEdited", name => {
      this.userName = name;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
