<template>
  <div>
    <!-- 这里默认也能使用vue的this.语法 -->
    <h1>{{ $store.getters.doubleCount }}</h1>

    <!-- 2、使用compositions api/vue3语法 -->
    <h1>compositions api显示getters:{{ store.getters.doubleCount }}</h1>
    <h1>compositions api显示年龄总和:{{ store.getters.totalAge }}</h1>

    <!-- 根据id获取某一个用户的信息 -->
    <h1>id-111用户的信息: {{ store.getters.useInfoById(111) }}</h1>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex';
  const store = useStore()
</script>

<style>

</style>