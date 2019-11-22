<template>
  <div id="main_q">
    <div class="quuote_header">
      <h2>Quoted Added</h2>
      <div class="progress_bar">
        <div :style="{ width: progresIndex + '0%' }">
          <span>{{ progresIndex }}/10</span>
        </div>
      </div>
    </div>

    <div class="quote_body">
      <h3>Quote</h3>
      <textarea
        type="text"
        value="sdasdada"
        v-on:keyup.enter="clickHandler"
        ref="textArea"
      ></textarea>

      <button @click="clickHandler">Add Quote</button>
    </div>

    <div class="blog_box">
      <div
        @click="deleteBox(index)"
        v-for="(value, index) in text.length"
        :key="value"
      >
        <p>{{ text[index] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      progresIndex: 0,
      limit: 10,
      text: [],
      boxIndex: 0,
      stopAdd: true
    };
  },
  methods: {
    clickHandler: function(event) {
      if (
        this.progresIndex !== this.limit &&
        this.$refs.textArea.value.replace(/\s+/g, "").length !== 0
      ) {
        this.progresIndex++;
        var textAreaValue = this.$refs.textArea.value;
        this.text.unshift(textAreaValue);
        this.boxIndex++;
        this.$refs.textArea.value = "";
      }
    },
    deleteBox: function(arg) {
      if (this.progresIndex < this.limit) {
        this.stopAdd = true;
      }
      this.text.splice(arg, 1);
      this.progresIndex--;
    }
  }
};
</script>

<style scoped>
.quote_body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.blog_box {
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-family: "Dancing Script", cursive;
  font-weight: bold;
  font-size: 21px;
}
.blog_box div {
  margin-bottom: 20px;
  flex: 0 0 24%;
  max-width: 24%;
  margin-right: 10px;
}
.blog_box div:hover {
  background: red;
  cursor: pointer;
}

button {
  border: none;
  outline: none;
  background-color: orange;
  color: #fff;
  font-size: 23px;
  padding: 10px;
  border-radius: 10px;
}

button:active {
  transform: translateY(6px);
}
.blog_box div {
  padding: 10px;
  border: 3px solid #000;
  max-width: 300px;
}
.quote_body textarea {
  width: 400px;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px;
}

.quote_body textarea:focus {
  outline: none;
  border: 2px solid orange;
}

.progress_bar {
  width: 100%;
  border: 1px solid #000;
  border-radius: 10px;
  height: 40px;
  background-color: antiquewhite;
  background-size: 10%;
  overflow: hidden;
}
.progress_bar div span {
  color: #fff;
  font-size: 20px;
  padding-left: 40px;
}
.progress_bar div {
  width: 2%;
  display: flex;
  transition: all 0.3s;
  align-items: center;
  background-color: orange;
  height: 100%;
}

#main_q {
  margin: 60px auto 60px;
  max-width: 1200px;
}
</style>
