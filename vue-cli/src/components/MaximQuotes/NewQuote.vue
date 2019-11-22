<template>
  <div>
    <form action="">
      <label>Quote</label>
      <textarea class="form-control" v-model="quote"></textarea>
      <button @click.prevent="addHandler">Add Quote</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    addHandler: function() {
      this.$emit("quoteAdded", this.quote);
      this.quote = "";
    }
  }
};
</script>

<style>
form {
  max-width: 400px;
  margin: 0 auto;
}

textarea {
  height: 150px !important;
}
</style>
