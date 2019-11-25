<template>
  <div>
    <!-- <appForm></appForm> -->
    <!-- <appDirective></appDirective> -->
    <appFilterMixin></appFilterMixin>
  </div>
</template>

<script>
import Directive from "./Directive";
import FilterMixin from "./FilterMixin";
import Form from "./Form";

export default {
  components: {
    appDirective: Directive,
    appFilterMixin: FilterMixin,
    appForm: Form
  }
};
</script>

<style scoped></style>
