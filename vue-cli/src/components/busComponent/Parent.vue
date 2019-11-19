<template>
  <div class="parent_vue">
    <appFirstSibling></appFirstSibling>
    <appSecondSibling :serverPropIndex="serverIndex" :serverPropStatus="serverStatus"></appSecondSibling>
  </div>
</template>

<script>
import FirstSibling from "./FirstSibling.vue";
import SecondSibling from "./SecondSibling.vue";

export default {
  data: function() {
    return {
      serverIndex: "1",
      serverStatus: "Normal"
    };
  },
  components: {
    appFirstSibling: FirstSibling,
    appSecondSibling: SecondSibling
  }
};
</script>

<style>
.parent_vue {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
}
</style>
