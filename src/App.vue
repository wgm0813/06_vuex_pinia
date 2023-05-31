<template>
  <div>
    <h1>Vue3</h1>
    <h2>当前计数{{ count }}</h2>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const count = ref(100)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
