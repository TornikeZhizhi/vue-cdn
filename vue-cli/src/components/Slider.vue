<template>
  <div class="slider_fluid">
    <vueper-slides fade :infinite="false">
      <vueper-slide
        v-for="slide in slides"
        :key="slide.id"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
        :link="slide.link"
      ></vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  data: function() {
    return {
      slides: [
        {
          title: "Slide #1",
          content: "Slide content.",
          link: "www.google.com",
          image:
            "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          title: "Slide #2",
          content: "Slide content.",
          link: "www.google.com",
          image:
            "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          title: "Slide #3",
          content: "Slide content.",
          link: "www.google.com",
          image:
            "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ]
    };
  },
  components: { VueperSlides, VueperSlide }
};
</script>

<style>
.vueperslide__content-wrapper {
  left: 15% !important;
  background-color: #fff;
  padding: 20px;
}
</style>

<style scoped>
.slider_fluid {
  margin-top: 30px;
}

.vueperslides__bullet {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active {
  background-color: #ff5252;
}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}
</style>
