<template>
  <div class="test">
    <div class="left_cont">
      <div
        class="img_box"
        @click="clickHandler(index)"
        v-for="(data, index) in imgarray"
        :key="data.id"
      >
        <img alt="" :src="data.url" />
        <h6>{{ data.title }}</h6>
      </div>
    </div>
    <appHttpRight :imgTitle="rightInfo"></appHttpRight>
  </div>
</template>

<script>
import HtppRight from "./HttpRight.vue";

export default {
  data: function() {
    return {
      imgarray: [],
      rightInfo: {
        img: "",
        title: ""
      }
    };
  },
  mounted() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        return response.json();
        console.log(response.json());
      })
      .then(data => {
        console.log(data);
        for (let index = 0; index < 12; index++) {
          this.imgarray.push(data[index]);
        }

        this.rightInfo.img = this.imgarray[0].url;
        this.rightInfo.title = this.imgarray[0].title;
      });
  },
  methods: {
    clickHandler(arg) {
      console.log(this.imgarray[arg].url, "2");
      this.rightInfo.img = this.imgarray[arg].url;
      this.rightInfo.title = this.imgarray[arg].title;
    }
  },
  components: {
    appHttpRight: HtppRight
  }
};
</script>

<style>
.test {
  display: flex;
  justify-content: space-between;
}
.left_cont {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 50%;
  max-width: 50%;
  justify-content: space-between;
}
.img_box {
  width: 24%;
  flex: 0 0 24%;
  margin-bottom: 20px;
  cursor: pointer;
}

.main_img_box {
  flex: 0 0 40%;
  max-width: 40%;
}

.main_img_box img {
  width: 100%;
}

.img_box img {
  width: 100%;
}
</style>
