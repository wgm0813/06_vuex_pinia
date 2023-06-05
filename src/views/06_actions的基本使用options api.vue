<template>
  <div>
    <h1>ations的基本使用options api</h1>
    <!-- options api写法 -->
    <h2>当前计数：{{ $store.state.count }}</h2>
    <!-- <button @click="actionClick">发起actions</button> -->
    <button @click="increment">发起actions</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // 使用辅助函数
    ...mapActions(['increment']),
    // actionClick(){
    //   this.$store.dispatch('increment')
    // }
  }
}
</script>