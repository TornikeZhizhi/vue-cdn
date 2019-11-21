 <template>
  <div>
    <slot></slot>
    <p>2</p>
  </div>
</template>

<script>
export default {};
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