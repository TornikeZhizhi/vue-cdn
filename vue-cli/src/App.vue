<template>
  <div>
    <appHeader></appHeader>
    <appQuote></appQuote>
    <appInputGame></appInputGame>
    <app-slider></app-slider>
    <appBus></appBus>
    <appBody></appBody>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Quote from "./components/quotes/Quote.vue";
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
    appInputGame: InputGame,
    appQuote: Quote
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
