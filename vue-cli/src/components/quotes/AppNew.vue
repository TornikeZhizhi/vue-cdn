 <template>
  <div>
    <slot></slot>
    <button @click="increase()">increase</button>
    <p>{{numb}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      numb: 0
    };
  },
  deactivated: function() {
    console.log("deactivated");
  },
  activated: function() {
    console.log("activated");
  },
  methods: {
    increase: function() {
      this.numb++;
    }
  }
};
</script>

<style scoped>
div {
  max-width: 1000px;
  margin: 30px auto 50px;
  border: 1px solid #000;
  padding: 30px;
  text-align: center;
}

h2 {
  color: green;
}
</style>