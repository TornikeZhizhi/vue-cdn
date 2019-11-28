<template>
  <div>
    <h1>The User Page - {{ id }}</h1>
    <button class="btn" @click="navigateToHome">Back To</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: this.$route.params.id
    };
  },

  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>
