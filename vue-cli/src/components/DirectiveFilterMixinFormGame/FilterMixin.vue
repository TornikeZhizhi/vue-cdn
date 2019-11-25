<template>
  <div>
    <div class>
      <input type="text" v-model="capitalize" />
      <p>{{capitalize | filterCapitalize}}</p>
    </div>

    <h1>{{computedFilter}}</h1>

    <ul>
      <li v-for="(data,index) in text" :key="index">{{data| testFilter}}</li>
    </ul>

    <ul>
      <li v-for="(data,index) in text" :key="index">
        <template v-if="index ==1">{{massiveFilter[index] }}</template>
        <template v-else>{{text[index]}}</template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      text: ["ONE", "TWO", "THREE"],
      title: "HI AM H1",
      capitalize: ""
    };
  },
  filters: {
    testFilter(value) {
      return value.toLowerCase();
    },

    filterCapitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },

  computed: {
    computedFilter() {
      return this.title.toLowerCase();
    },
    massiveFilter() {
      return this.text.map(el => {
        return el.toLowerCase();
      });
    }
  }
};
</script>

<style scoped>
div {
  width: 800px;
  margin: 50px auto 100px;
}
</style>
