<template>
  <div>
    <header>
      <h1 @click="switchName">{{ status }} {{ Myname }}</h1>
      <button @click="changename">H button</button>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    Myname: {
      type: String,
      required: true
    }
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
