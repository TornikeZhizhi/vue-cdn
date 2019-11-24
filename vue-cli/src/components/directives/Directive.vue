<template>
  <div>
    <p v-highlight:background.delayed="'red'">Global directive</p>
    <p
      v-local-directive:background.blink="{
        mainColor: 'orange',
        mainBgColor: 'green'
      }"
    >
      Local Directive
    </p>
    <h1 v-customOn:click="test2">clikc directive</h1>

    <div v-customOn:mouseenter="mouseEnter" v-customOn:mouseleave="mouseLeave">
      mouseneter and leave
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-directive": {
      bind(el, binding, vnode) {
        if (binding.modifiers["blink"]) {
          el.style.background = binding.value.mainBgColor;
          el.style.color = binding.value.mainColor;
        } else {
          if (binding.arg == "background") {
            el.style.background = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }
      }
    },
    customOn: {
      bind(el, binding) {
        // el.onclick = function() {
        //   binding.value();
        // };
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(binding.arg, binding.value);
      }
    }
  },
  methods: {
    test2() {
      alert("s");
    },
    mouseEnter() {
      console.log("mouse entered");
    },
    mouseLeave() {
      console.log("mouse leave");
    }
  }
};
</script>

<style scoped>
div {
  max-width: 700px;
  margin: 50px auto 80px;
}
</style>
