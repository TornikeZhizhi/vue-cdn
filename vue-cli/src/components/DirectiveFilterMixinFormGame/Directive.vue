<template>
  <div>
    <h3>Hi Am Directive</h3>
    <h3>Hi Am Directive</h3>
    <h3 v-clicked="'click'">Hi Am Directive</h3>
    <h3 v-colorDirective="{maincolor :'green',secondColor :'orange'}">Hi Am Directive</h3>
    <h3 v-backgroundDirective="'red'">Hi Am Directive</h3>
  </div>
</template>

<script>
export default {
  directives: {
    backgroundDirective: {
      bind(el, binding, vnode) {
        el.style.background = binding.value;
      }
    },
    colorDirective: {
      bind(el, binding, vnode) {
        let swap = true;
        setInterval(function() {
          if (swap == true) {
            el.style.background = binding.value.maincolor;
            swap = !swap;
          } else {
            el.style.background = binding.value.secondColor;
            swap = !swap;
          }
        }, 1000);
      }
    },
    clicked: {
      bind(el, binding, vnode) {
        el.addEventListener(binding.value, () => {
          el.style.color = "orange";
        });
      }
    }
  }
};
</script>

<style scoped>
div {
  max-width: 800px;
  margin: 20px auto 70px;
}
</style>
