<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <Header-Section v-bind:Myname="name" @namewasreset="name = $event"></Header-Section>
        <button @click="changeName">Change Name</button>
      </div>
    </div>
    <hr />
    <div class="row">
      <List></List>

      <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12">
        <Footer-Section></Footer-Section>
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
      name: "max"
    };
  },
  methods: {
    changeName() {
      this.name = "anna";
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
