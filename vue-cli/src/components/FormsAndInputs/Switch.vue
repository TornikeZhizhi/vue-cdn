<template>
  <div>
    <div id="onn" @click="switched(true)" :class="{ active: value }">
      Onn
    </div>
    <div id="off" @click="switched(false)" :class="{ active: !value }">
      Off
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data: function() {
    return {
      isOn: true
    };
  },
  methods: {
    switched(arg) {
      this.$emit("input", arg);
    }
  }
};
</script>

<style scoped>
#onn,
#off {
  background-color: #ccc;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  display: inline-block;
}

.active {
  background-color: green !important;
  color: #fff !important;
}
</style>
