<template>
  <div>
    <appHeader></appHeader>
    <appBody></appBody>
    <app-slider></app-slider>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Slider from "./components/Slider.vue";

export default {
  components: {
    appHeader: Header,
    appBody: Body,
    appSlider: Slider
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
