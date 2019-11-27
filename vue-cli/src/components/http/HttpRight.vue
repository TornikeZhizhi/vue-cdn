<template>
  <div class="main_img_box">
    <img alt="" :src="imgTitle.img" />
    <h4>{{ imgTitle.title }}</h4>
  </div>
</template>

<script>
export default {
  props: ["imgTitle"]
};
</script>

<style></style>
