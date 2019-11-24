<template>
  <div>
    <h1 @click="toreverse2">{{ toreverse2 }}</h1>
  </div>
</template>

<script>
import { counterLength } from "./mixin.js";

export default {
  mixins: [counterLength],
  data: function() {
    return {
      //   text: "Hi Im Mixin"
    };
  }
};
</script>

<style scoped>
div {
  max-width: 800px;
  margin: 50px auto 100px;
}
</style>
