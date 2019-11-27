<template>
  <div>
    <h1>The User Page</h1>
    <button class="btn" @click="navigateToHome">Back To</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>
