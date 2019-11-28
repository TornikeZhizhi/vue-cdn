<template>
  <div>
    <h3>Some User Details user load had id = {{ $route.params.id }}</h3>
    <router-link
      tag="li"
      :to="{ name: 'userEdit', params: { id: $route.params.id } }"
      >test</router-link
    >
  </div>
</template>

<script>
export default {};
</script>
