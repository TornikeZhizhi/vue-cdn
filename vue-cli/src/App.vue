<template>
  <div>
    <!-- <appHeader></appHeader>
    <appHttp></appHttp> -->
    <!-- <app-animation></app-animation> -->
    <!-- <app-d-f-f></app-d-f-f>
    <appFilterex></appFilterex> -->
    <!-- <app-forms></app-forms> -->
    <!-- <appFilters></appFilters> -->
    <!-- <appMaxQuote></appMaxQuote> -->
    <!-- <app-directive></app-directive>
    
    <appQuoteChallange></appQuoteChallange>
    <appQuote></appQuote>
    <appInputGame></appInputGame>
    <app-slider></app-slider>
    <appBus></appBus>
    <appBody></appBody>-->
    <!-- <appFooter></appFooter> -->
    <appRouterHeader></appRouterHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import RouteHeader from "./components/routes/Header";
import Header from "./components/Header.vue";
import Http from "./components/http/Http.vue";
import Animation from "./components/animation/Animation.vue";
import ExFilter from "./components/FiltereMixins/mixinPractice/Filter.vue";
import Filters from "./components/FiltereMixins/Filters.vue";
import MaxQuote from "./components/MaximQuotes/ParentQuote.vue";
import QuoteGame from "./components/QuoteGame/QuoteGame.vue";
import Quote from "./components/quotes/Quote.vue";
import InputGame from "./components/gameComponent/InputGame.vue";
import Body from "./components/Body.vue";
import Slider from "./components/Slider.vue";
import Footer from "./components/Footer.vue";
import busComponent from "./components/busComponent/Parent.vue";
import Forms from "./components/FormsAndInputs/Forms.vue";
import Directive from "./components/directives/Directive.vue";
import Dff from "./components/DirectiveFilterMixinFormGame/DFF.vue";

export default {
  components: {
    appHttp: Http,
    appRouterHeader: RouteHeader,
    appHeader: Header,
    appAnimation: Animation,
    appDFF: Dff,
    appFilterex: ExFilter,
    appFilters: Filters,
    appBody: Body,
    appSlider: Slider,
    appFooter: Footer,
    appBus: busComponent,
    appInputGame: InputGame,
    appQuote: Quote,
    appMaxQuote: MaxQuote,
    appQuoteChallange: QuoteGame,
    appForms: Forms,
    appDirective: Directive
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
