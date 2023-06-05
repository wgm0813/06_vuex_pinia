<template>
  <div>
    <h1>HomePage</h1>
    <ul>
      <template v-for="item in $store.state.banner" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
//告诉Vuex 发送网络请求
const store= useStore();
store.dispatch('fetchHomeMultidataAction')
</script>

<style>

</style>