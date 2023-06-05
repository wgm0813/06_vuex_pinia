<template>
  <div>
    <h1>ations的基本使用options api</h1>
    <!-- options api写法 -->
    <h2>当前计数：{{ $store.state.count }}</h2>
    <button @click="actionClick">发起actions</button>
  </div>
</template>

<script>
export default {
  methods: {
    actionClick(){
      this.$store.dispatch('increment')
    }
  }
}
</script>