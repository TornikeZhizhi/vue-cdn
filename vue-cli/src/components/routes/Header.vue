<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <router-link to="/" tag="li" active-class="active" exact>
          <a>home</a>
        </router-link>

        <router-link to="/user" tag="li" active-class="active">
          <a>user1</a></router-link
        >
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  margin-right: 20px;
}
li.active a {
  color: orange;
  font-weight: bold;
}
</style>
