<template>
  <div class="main_inut">
    <div class="colorInfo">
      <h1>Color - GAME</h1>
      <h2>
        Find This Color -
        <span>{{ winnerColor }}</span>
        You Have
        <span>{{ chanceIndex }}</span> Chance
      </h2>
      <h3>
        You -
        <span>{{ yourScore }}</span> - Enemy -
        <span>{{ enemyScore }}</span>
      </h3>
    </div>

    <div class="color_fluid">
      <div
        class="color_box"
        ref="colorEl"
        @click="pickColor(value)"
        v-for="(index, value) in colorbox"
        :key="index"
        v-bind:style="{ background: colors[value] }"
      >
        <span
          ref="spanEl"
          v-bind:style="{ filter: 'blur(' + blurIndex + 'px)' }"
          >{{ colors[value] }}</span
        >
      </div>
    </div>

    <div class="gamesbutton">
      <div class="eazygame" @click="easygame">
        <span>Easy Game</span>
      </div>
      <div class="play_again" @click="resetGame">
        <span>Play Again</span>
      </div>

      <div class="hardgame" @click="hardgame">
        <span>Hard GAME</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      colors: [],
      displayN: "none",
      displayB: "block",
      easygameIndex: 6,
      hardgameIndex: 9,
      colorbox: 6,
      yourScore: 0,
      enemyScore: 0,
      clickQuantity: 0,
      winnerColor: null,
      chanceIndex: 3,
      blurIndex: 4,
      lostColor: "rgb(0, 0, 0)",
      clickColorForSpan: null,
      stopGame: true
    };
  },

  methods: {
    resetGame: function() {
      this.clickQuantity = 0;
      this.blurIndex = 5;
      this.stopGame = true;
      this.colors = [];
      var winnerRandomIndex = Math.floor(Math.random() * this.colorbox);
      for (var index = 0; index < this.colorbox; index++) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        this.colors.unshift(rgb);
        this.$refs.spanEl[index].style.display = this.displayB;
      }
      this.winnerColor = this.colors[winnerRandomIndex];
    },
    pickColor: function(arg) {
      if (this.stopGame) {
        if (this.$refs.colorEl[arg].style.background !== this.lostColor) {
          this.clickQuantity++;
          this.blurIndex--;
        }

        var globalThis = this;
        var clickColor = this.$refs.colorEl[arg].style.background;
        this.clickColorForSpan = clickColor;
        if (clickColor !== this.winnerColor) {
          this.$refs.colorEl[arg].style.background = this.lostColor;
          this.$refs.spanEl[arg].style.display = this.displayN;
          if (this.clickQuantity >= this.chanceIndex) {
            for (var index = 0; index < this.colorbox; index++) {
              this.$refs.colorEl[index].style.background = this.lostColor;
              this.$refs.spanEl[index].style.display = this.displayN;
            }
            this.stopGame = false;
            setTimeout(function() {
              globalThis.clickQuantity = 0;

              globalThis.enemyScore++;
            }, 400);
          }
        } else {
          this.yourScore++;
          for (let index = 0; index < this.colorbox; index++) {
            this.$refs.spanEl[index].style.display = this.displayN;
            this.$refs.colorEl[index].style.background = this.winnerColor;
            this.stopGame = false;
            setTimeout(function() {
              globalThis.clickQuantity = 0;
            }, 1000);
          }
        }
      }
    },
    easygame: function() {
      if (this.colorbox !== this.easygameIndex) {
        this.resetHandler(this.easygameIndex, 3);
      }
    },
    hardgame: function() {
      if (this.colorbox !== this.hardgameIndex) {
        this.resetHandler(this.hardgameIndex, 4);
      }
    },
    resetHandler: function(boxArg, chanceARG) {
      this.colorbox = boxArg;
      this.chanceIndex = chanceARG;
      this.enemyScore = 0;
      this.yourScore = 0;
      this.clickQuantity = 0;
      this.blurIndex = 5;
      this.stopGame = true;
      this.colors = [];
      var winnerRandomIndex = Math.floor(Math.random() * this.colorbox);
      for (var index = 0; index < this.colorbox; index++) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        this.colors.unshift(rgb);
      }
      this.winnerColor = this.colors[winnerRandomIndex];
    }
  },
  mounted: function() {
    this.colors = [];
    var winnerRandomIndex = Math.floor(Math.random() * this.colorbox);

    for (var index = 0; index < this.colorbox; index++) {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
      this.colors.unshift(rgb);
    }
    this.winnerColor = this.colors[winnerRandomIndex];
  }
};
</script>

<style scoped>
.colorInfo {
  text-align: center;
  color: tomato;
  padding: 0px 10px 40px;
}

.gamesbutton {
  text-align: center;
  color: #fff;
}

.gamesbutton {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gamesbutton span {
  width: 200px;
  background-color: green;
  display: inline-block;
  font-size: 22px;
  padding: 10px;
  transition: all 0.4s;
  cursor: pointer;
  border-radius: 5px;
}

.play_again span:active {
  transform: translateY(7px);
}

.colorInfo span {
  background-color: #000;
  color: #fff;
  padding: 15px 15px;
  border-radius: 10px;
}
.color_box {
  flex: 0 0 32%;
  max-width: 32%;
  height: 200px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.5s;
  will-change: background-color;
  position: relative;
}
.color_box span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #000;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  white-space: nowrap;
  border-radius: 5px;
  opacity: 0;
  transition: all 0.4s;
}
.color_box:hover span {
  opacity: 1;
  filter: blur(4px);
}
.color_fluid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.main_inut {
  margin: 100px auto;
  max-width: 1000px;
}

h3 {
  margin-top: 70px;
}
h3 span {
  background-color: green !important;
}
</style>
