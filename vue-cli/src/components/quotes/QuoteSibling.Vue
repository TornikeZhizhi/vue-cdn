<template>
  <div>
    <div class="title">
      <slot></slot>
      <p>1</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quote"]
};
</script>

<style scoped>
div {
  max-width: 1000px;
  margin: 30px auto 50px;
  border: 1px solid #000;
  padding: 30px;
  text-align: center;
}

h2 {
  color: green;
}
</style>