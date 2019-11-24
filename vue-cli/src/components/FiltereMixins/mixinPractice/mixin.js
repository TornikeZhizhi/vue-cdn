export const counterLength = {
  data: function() {
    return {
      text: "Hi Im Mixin"
    };
  },
  methods: {
    clicker() {
      alert("s");
    }
  },
  filters: {
    toReverse(value) {
      return value
        .split("")
        .reverse()
        .join("");
    },
    counter(value) {
      var textLength = value.split("").length;
      return value + "(" + textLength + ")";
    }
  },
  computed: {
    toreverse2() {
      return this.text
        .split("")
        .reverse()
        .join("");
    }
  }
};
