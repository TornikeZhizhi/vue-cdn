
<template>
  <div>
    <p>server status is {{status}}</p>
    <button @click="changestatus">Change Status2</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "critikal"
    };
  },
  methods: {
    changestatus() {
      this.status = "normal";
    }
  }
};
</script>

