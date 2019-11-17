<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        @click="clickHandler(val)"
        class="list-group-item"
        v-for="(index,val) in servers"
        v-bind:key="index"
      >Serverr #{{ index.id }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["srvStatus"],
  data: function() {
    return {
      servers: [
        { id: 5, status: "critikal" },
        { id: 41, status: "normal" },
        { id: 15, status: "critikal" },
        { id: 225, status: "deploy" },
        { id: 15, status: "failed" }
      ]
    };
  },
  methods: {
    clickHandler: function(arg) {
      this.srvStatus = this.servers[arg].status;
      this.$emit("serverChanged", this.srvStatus);
      console.log(this.servers[arg].status);
    }
  }
};
</script>

<style></style>
