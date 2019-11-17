<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <Header-Section
          v-bind:Myname="name"
          @namewasreset="name = $event"
          v-bind:customFn="changeNameCustom"
          v-bind:footerage="age"
          v-bind:srvStatus="serverStatus"
          @serverChanged="serverStatus = $event"
        ></Header-Section>
        <button @click="changeName">Change Name</button>
      </div>
    </div>
    <hr />
    <div class="row">
      <List v-bind:srvStatus="serverStatus" @serverChanged="serverStatus = $event"></List>

      <div class="col-xs-12 col-sm-6">
        <p>Server status is {{serverStatus}}</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12">
        <Footer-Section v-bind:footerage="age" @agewasedited="age = $event"></Footer-Section>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Lists from "./components/List.vue";

export default {
  data: function() {
    return {
      name: "max",
      age: "28",
      serverStatus: "default"
    };
  },
  methods: {
    changeName() {
      this.name = "anna";
    },
    changeNameCustom() {
      this.name = "toke";
    }
  },
  components: {
    "Header-Section": Header,
    "Footer-Section": Footer,
    List: Lists
  }
};
</script>

<style></style>
