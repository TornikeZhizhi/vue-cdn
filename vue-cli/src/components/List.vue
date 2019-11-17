<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        @click="clickHandler(index)"
        class="list-group-item"
        v-for="index in 7"
        v-bind:key="index"
      >
        Serverr #{{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandler: function(arg) {
      alert("I am " + arg);
    }
  }
};
</script>

<style></style>
