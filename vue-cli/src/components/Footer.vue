<template>
  <footer>
    <p>{{ text }}</p>
  </footer>
</template>

<script>
export default {
  data: function() {
    return {
      text: "All Servers are managed here Footerr !!!"
    };
  }
};
</script>

<style scoped>
p {
  color: red;
}
</style>
