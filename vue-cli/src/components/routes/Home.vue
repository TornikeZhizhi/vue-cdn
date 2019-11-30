<template>
  <div>
    <h1>{{ test }}</h1>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores,
      aut autem, blanditiis consequuntur dolore excepturi laborum maiores minima
      nihil non nulla obcaecati quas quibusdam quod sed suscipit vero
      voluptatem.
    </p>
    <button @click="confirmed = true">conf</button>
  </div>
</template>

<script>
export default {
  data: function name(params) {
    return {
      test: "the home page",
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    // this.test = "gavedi";

    if (this.confirmed) {
      next();
    } else {
      next(false);
    }
    next();
  }
  //   beforeRouteEnter(to, from, next) {
  //     alert("s");
  //     if (true) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   }
};
</script>
