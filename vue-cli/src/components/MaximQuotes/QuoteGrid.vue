<template>
  <div class="gridFluid">
    <appQuote
      v-for="(quote, value) in gridQuote"
      :key="value"
      @click.native="deleteHandler(value)"
      >{{ quote }}</appQuote
    >
  </div>
</template>

<script>
import Quote from "./Quote";
export default {
  components: {
    appQuote: Quote
  },
  props: ["gridQuote"],
  methods: {
    deleteHandler: function(arg) {
      //   this.gridQuote.splice(arg, 1);
      this.$emit("quotedeleted", arg);
    }
  }
};
</script>

<style scoped>
.gridFluid {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}
.gridFluid div {
  border: 1px solid #000;
  padding: 10px;
  max-width: 23%;
  flex: 0 0 23%;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.4s;
}

.gridFluid div:hover {
  background-color: red;
}
</style>
