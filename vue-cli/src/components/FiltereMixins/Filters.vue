<template>
  <div>
    <div>{{ text | toUppercase | globalLowecase }}</div>

    <input type="text" v-model="fruitinfo" />

    <ul>
      <li v-for="fruit in filterFruit" :key="fruit">
        {{ fruit }}
      </li>
    </ul>
    <appMixList></appMixList>
  </div>
</template>

<script>
import mixList from "./MixinList.vue";
import { fruitMixin } from "./fruitMixin.js";

export default {
  mixins: [fruitMixin],
  data: function() {
    return {
      text: "Hi am I fllter"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },

  components: {
    appMixList: mixList
  },
  created() {
    console.log("created in comp");
  }
};
</script>

<style scoped>
div {
  max-width: 700px;
  margin: 50px auto 100px;
}
</style>
