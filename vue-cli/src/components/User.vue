<template>
  <div class="component">
    <h1>The User Component</h1>

    <p>Age is {{ age }}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :userAge="age" :userName="name"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" :userName="name"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<!-- @ageWasEdited="age = $event" -->

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      age: 27,
      name: "defaultName"
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
