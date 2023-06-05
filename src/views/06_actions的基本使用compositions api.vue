<template>
  <div>
    <h1>ations的基本使用compositions api</h1>
    <h2>当前计数：{{ store.state.count }}</h2>
    <!-- <button @click="actionClick">发起actions</button> -->
    <button @click="increment">发起actions</button>
    <button @click="incrementActions">发起actions</button>
  </div>
</template>

<script setup>
  import { useStore,mapActions } from 'vuex';
  const store = useStore();
  // function actionClick(){
  //   store.dispatch('increment');
  // }

  // 此时内部执行的时候，还是执行的this.$store，所以需要按照之前的操作：如下
  // const {increment} = mapActions(['increment']);
  const actions = mapActions(['increment'])
  const newActions = {}
  Object.keys(actions).forEach(key => {
    newActions[key] = actions[key].bind({$store:store})
  })
  const {increment} = newActions;


  // 使用默认的做法
  function incrementActions(){
    store.dispatch('increment')
  }
</script>

<style>

</style>