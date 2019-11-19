<template>
  <div class="secondSibling">
    <p>This is #{{serverPropIndex}} and {{serverPropStatus}}</p>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  props: ["serverPropIndex", "serverPropStatus"],
  created() {
    eventBus.$on("indexWasEdited", index => {
      this.serverPropIndex = index;
    });
    eventBus.$on("infoWasEdited", info => {
      this.serverPropStatus = info;
    });
  }
};
</script>

<style scoped>
.secondSibling {
  flex: 0 0 48%;
  max-width: 48%;
  padding-top: 50px;
}

p {
  color: black;
  font-size: 30px;
}
</style>
