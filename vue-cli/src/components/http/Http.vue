<template>
  <div class="main">
    <div class="form-group">
      <label for="">username</label>
      <input v-model="user.username" class="form-control" type="text" />
    </div>
    <div class="form-group">
      <label for="">mail</label>
      <input v-model="user.mail" class="form-control" type="text" />
    </div>
    <button class="btn btn-primary" @click.prevent="submit">Submit</button>
    <hr />
    <button class="btn btn-primary" @click="fetchData">Get Data</button>

    <ul class="list-group">
      <li v-for="(data, index) in users" :key="index" class="list-group-item">
        {{ data.username }}- {{ data.mail }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        username: "",
        mail: ""
      },
      users: []
    };
  },
  methods: {
    submit() {
      this.$http.post("", this.user).then(
        response => {
          // console.log(response);
        },
        error => {
          // console.log(error);
        }
      );
    },
    fetchData() {
      this.$http
        .get("")
        .then(response => {
          return response.json();
          console.log(response.json());
        })
        .then(data => {
          const resultArray = [];
          console.log(data);
          //   resultArray.push(data);
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  }
};
</script>

<style scoped>
.main {
  max-width: 700px;
  margin: 0 auto;
}
</style>
