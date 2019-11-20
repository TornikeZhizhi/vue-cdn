<template>
  <div>
    <appHeader></appHeader>
    <app-slider></app-slider>
    <appInputGame></appInputGame>
    <appBus></appBus>
    <appBody></appBody>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import InputGame from "./components/gameComponent/InputGame.vue";
import Body from "./components/Body.vue";
import Slider from "./components/Slider.vue";
import Footer from "./components/Footer.vue";
import busComponent from "./components/busComponent/Parent.vue";

export default {
  components: {
    appHeader: Header,
    appBody: Body,
    appSlider: Slider,
    appFooter: Footer,
    appBus: busComponent,
    appInputGame: InputGame
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
