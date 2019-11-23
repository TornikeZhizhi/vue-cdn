<template>
  <div>
    <div>{{ progresCount.length }} - {{ progresLimit }} {{ test }}</div>
  </div>
</template>

<script>
export default {
  props: ["progresLimit", "progresCount", "test"]
};
</script>

<style scoped>
div {
  max-width: 1000px;
  margin: 0 auto 50px;
}
</style>
