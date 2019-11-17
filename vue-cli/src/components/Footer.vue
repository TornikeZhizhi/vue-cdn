<template>
  <footer>
    <p>{{ text }} AGE = {{footerage}}</p>

    <button @click="editage">CHANGE AGE</button>
  </footer>
</template>

<script>
export default {
  props: {
    footerage: {
      type: String
    }
  },
  data: function() {
    return {
      text: "All Servers are managed here Footerr !!!"
    };
  },
  methods: {
    editage: function() {
      this.footerage = "33";
      this.$emit("agewasedited", this.footerage);
    }
  }
};
</script>

<style scoped>
p {
  color: red;
}
</style>
