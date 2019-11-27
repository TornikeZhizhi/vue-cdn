<template>
  <header>
    <ul>
      <li v-for="index in navigation" :key="index.navName">
        <a v-bind:href="index.link" target="_blank">{{ index.navName }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      navigation: [
        { link: "/user", navName: "Home" },
        { link: "www.google2.com", navName: "About" },
        { link: "www.google3.com", navName: "Gallery" },
        { link: "www.google3.com", navName: "Products" },
        { link: "www.google4.com", navName: "Partners" },
        { link: "www.google5.com", navName: "Contact" }
      ]
    };
  }
};
</script>

<style scoped>
header {
  width: 100%;
  background-color: black;
}
ul {
  display: flex;
  padding: 30px 25px;
  max-width: 800px;
  justify-content: space-between;
}
li a {
  color: #fff;
  font-size: 21px;
  cursor: pointer;
}
li a:hover {
  color: antiquewhite;
}
li {
  margin-right: 20px;
  list-style-type: none;
}
div {
  background-color: lightblue;
}
</style>
