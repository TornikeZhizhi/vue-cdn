<template>
  <div>
    <button
      @click="toggleSection = !toggleSection"
      v-bind:class="[{ red: toggleSection }, { green: !toggleSection }]"
    >Switch Fruit Section</button>
    <div class="main_section" v-if="toggleSection">
      <div class="left_content">
        <div
          @click="contentChanger(index)"
          v-for="(product, index) in products"
          v-bind:key="product.productTittle"
        >
          <img v-bind:src="product.imgSource" />
          <h2>{{ product.productTittle }}</h2>
          <p>{{ product.productText }}</p>
        </div>
      </div>
      <div class="right_content">
        <div class="right_main_content">
          <img v-bind:src="rightImg" />
          <h2>{{ rightTitle }}</h2>
          <p>{{ rightText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      products: [
        {
          imgSource:
            "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/diet_fruit_sugar_slideshow/493ss_thinkstock_rf_handful_ripe_dark_grapes.jpg",
          productTittle: "მსხალი",
          productText:
            "მსხალი თესლი მდიდარია იოდით. ამიტომ ვაშლი კურკიანად უნდა მიირთვათ. 5-6 კურკა შეიცავს იოდზე ორგანიზმის სადღეღამისო მოთხოვნილების შესაბამის დოზას."
        },
        {
          imgSource:
            "https://www.culturalindia.net/iliimages/National-Fruit-ili-71-img-7.jpg",
          productTittle: "ვაშლი",
          productText:
            "ვაშლის თესლი მდიდარია იოდით. ამიტომ ვაშლი კურკიანად უნდა მიირთვათ. 5-6 კურკა შეიცავს იოდზე ორგანიზმის სადღეღამისო მოთხოვნილების შესაბამის დოზას."
        },

        {
          imgSource:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSvCgwW0IJHSpVNYGi6WGNJQ6E-mCEoxb1GHkck9P6zXfqOs&s",
          productTittle: "ატამი2",
          productText:
            "ატამი თესლი მდიდარია იოდით. ამიტომ ვაშლი კურკიანად უნდა მიირთვათ. 5-6 კურკა შეიცავს იოდზე ორგანიზმის სადღეღამისო მოთხოვნილების შესაბამის დოზას."
        },
        {
          imgSource:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSvCgwW0IJHSpVNYGi6WGNJQ6E-mCEoxb1GHkck9P6zXfqOs&s",
          productTittle: "ატამი3",
          productText:
            "ატამი თესლი მდიდარია იოდით. ამიტომ ვაშლი კურკიანად უნდა მიირთვათ. 5-6 კურკა შეიცავს იოდზე ორგანიზმის სადღეღამისო მოთხოვნილების შესაბამის დოზას."
        },
        {
          imgSource:
            "https://www.culturalindia.net/iliimages/National-Fruit-ili-71-img-7.jpg",
          productTittle: "ნესვი",
          productText:
            "ნესვი თესლი მდიდარია იოდით. ამიტომ ვაშლი კურკიანად უნდა მიირთვათ. 5-6 კურკა შეიცავს იოდზე ორგანიზმის სადღეღამისო მოთხოვნილების შესაბამის დოზას."
        }
      ],
      toggleSection: false,
      rightImg: null,
      rightTitle: null,
      rightText: null
    };
  },
  mounted: function() {
    this.rightImg = this.products[0].imgSource;
    this.rightTitle = this.products[0].productTittle;
    this.rightText = this.products[0].productText;
  },
  methods: {
    contentChanger: function(arg) {
      this.rightImg = this.products[arg].imgSource;
      this.rightTitle = this.products[arg].productTittle;
      this.rightText = this.products[arg].productText;
    }
  }
};
</script>

<style scoped>
button {
  border: none;
  color: #fff;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;
}

div {
  text-align: center;
}

button.red {
  background: red;
}
button.green {
  background: green;
}
.right_content {
  max-width: 50%;
  flex: 0 0 50%;
}

.right_main_content {
  width: 100%;
  height: 100%;
  padding: 0 10px;
}

.main_section img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.right_main_content img {
  width: 100%;
  height: 500px;
}
.main_section {
  display: flex;
}
.left_content {
  max-width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: scroll;
  height: 700px;
}
.left_content > div {
  flex: 0 0 48%;
  background-color: lightcoral;
  max-width: 48%;
  margin-bottom: 20px;
  padding: 15px;
  transition: all 0.4s;
  cursor: pointer;
}

.left_content > div:hover {
  background-color: antiquewhite;
}
</style>
