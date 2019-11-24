<template>
  <div>
    <input type="text" v-model="fruitinfo" />
    <ul>
      <li v-for="fruit in filterFruit" :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin.js";
export default {
  mixins: [fruitMixin]
};
</script>

<style scoped>
div {
  max-width: 700px;
  margin: 50px auto 100px;
}
</style>
