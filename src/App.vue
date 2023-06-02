<template>
  <div>
    <h1>Vue3</h1>
    <!-- store中的counter -->
    <h2>compositions api当前计数{{ $store.state.count }}</h2>
    <h2>options api当前计数{{ storeCount }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<!-- 如果是在options api里面写在computed里面然后使用较好 -->
<script>
export default {
  computed:{
    storeCount() {
      return this.$store.state.count
    }
  }
}
</script>
<script setup>
  // import { ref } from "vue";

  // const count = ref(100)
  import { useStore } from 'vuex';
  const store = useStore()
  function increment(){
    store.commit('increment')
  }
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
