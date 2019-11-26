<template>
  <div id="animation">
    <div class="animation_box">
      <button class="btn-primary" @click="show = !show">Toggle</button>

      <hr />
      <!-- <transition name="fade">
        <button class="btn-primary" v-if="show">some info</button>
      </transition>-->

      <button class="btn-primary" v-if="show">some info</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.btn-primary {
  animation: anime 1s linear;
}

@keyframes anime {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#animation {
  max-width: 800px;
  margin: 50px auto 80px;
}

.fade-enter {
  opacity: 0;
  transition: all 0.4s;
}

.fade-enter-active {
  transition: all 0.4s;
  /* opacity: 1; */
}

.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: all 0.4s;
  opacity: 0;
}

.slide-enter {
  /* transform: translateY(20px); */
}

.slide-enter-active {
  animation: slide-in 1s linear;
  transition: all 0.5s;

  opacity: 0;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s linear;
  transition: all 1s;
  opacity: 0;
}

@keyframes slide-in {
  0% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(20px);
  }
}
</style>