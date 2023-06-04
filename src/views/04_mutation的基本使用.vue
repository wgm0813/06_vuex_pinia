<template>
  <div>
    <h1>mutation的基本使用</h1>
    <h2>{{ $store.state.name }}</h2>
    <button @click="updateName">mutation修改name</button>
  </div>
</template>

<script>
export default {
  methods:{
    updateName(){
      this.$store.commit('changeName','王高敏')
    }
  }
}
</script>

<style>

</style>