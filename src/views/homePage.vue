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

store.dispatch('fetchHomeMultidataActionPromise').then(res => {
  console.log('home中的then被回调',res);
})
</script>

<style>

</style>