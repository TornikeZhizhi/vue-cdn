<template>
  <div>
    <button @click="selectedComponent = 'appQuotesibling'">Quote</button>
    <button @click="selectedComponent = 'appAuthor'">Author</button>
    <button @click="selectedComponent = 'appNew'">New</button>
    <keep-alive>
      <component :is="selectedComponent">
        <p>Default Content</p>
      </component>
    </keep-alive>
    <!-- <appQuotesibling>
      <h2 slot="title">hi am h2 and {{quoteText}}</h2>
      <p>hi am a paragraph</p>
    </appQuotesibling>-->
  </div>
</template>

<script>
import QuoteSibling from "./QuoteSibling.vue";
import Author from "./AppAuthor.vue";
import New from "./AppNew.vue";
export default {
  data: function(params) {
    return {
      selectedComponent: "appQuotesibling"
    };
  },
  components: {
    appQuotesibling: QuoteSibling,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>