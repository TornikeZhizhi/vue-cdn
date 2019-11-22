<template>
  <div>
    <button @click="selectedComponent = 'appAuthor'">Quote</button>
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
import Author from "./AppAuthor.vue";
import New from "./AppNew.vue";
export default {
  data: function(params) {
    return {
      selectedComponent: "appAuthor"
    };
  },
  components: {
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
