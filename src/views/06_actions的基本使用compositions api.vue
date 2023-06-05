<template>
  <div>
    <h1>ations的基本使用compositions api</h1>
    <h2>当前计数：{{ store.state.count }}</h2>
    <button @click="actionClick">发起actions</button>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex';
  const store = useStore();
  function actionClick(){
    store.dispatch('increment');
  }
</script>

<style>

</style>