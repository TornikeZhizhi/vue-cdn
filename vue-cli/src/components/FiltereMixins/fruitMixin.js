export const fruitMixin = {
  data: function() {
    return {
      text: "Hi am I fllter",
      fruits: ["banana", "lemon", "berry", "strawberry", "apple", "pineapple"],
      fruitinfo: ""
    };
  },

  computed: {
    filterFruit: function() {
      return this.fruits.filter(element => {
        return element.match(this.fruitinfo);
      });
    }
  },
  created() {
    console.log("created");
  }
};
