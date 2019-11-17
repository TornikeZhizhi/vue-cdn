<template>
  <div>
    <header>
      <h1 @click="switchName">{{ status }} {{ Myname }} {{footerage}}</h1>
      <button @click="changename">H button</button>
      <button @click="customFn">H button CUSTOM</button>
      <button @click="customFn">{{srvStatus}}</button>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    Myname: {
      type: String,
      required: true
    },
    customFn: Function,
    footerage: Number,
    srvStatus: String
  },
  data: function() {
    return {
      status: "Server Status Header"
    };
  },
  methods: {
    switchName: function() {
      return (this.Myname = this.Myname.split("")
        .reverse()
        .join(""));
    },
    changename: function() {
      this.Myname = "tok";
      this.$emit("namewasreset", this.Myname);
    }
  }
};
</script>

<style></style>
