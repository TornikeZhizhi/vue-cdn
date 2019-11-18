<template>
  <div class="component">
    <p>User Age: {{ userAge }} - {{ userName }}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["userAge", "userName"],
  methods: {
    editAge() {
      this.userAge = 30;
      this.userName = "Tornike";
      // this.$emit("ageWasEdited", this.userAge);
      // eventBus.$emit("ageWasEdited", this.userAge);
      eventBus.changeAge(this.userAge, this.userName);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
