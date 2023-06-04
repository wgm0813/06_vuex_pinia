<template>
  <div>
    <h1>mapMutations映射</h1>
    <h2>name: {{ $store.state.name }}</h2>
    <button @click="changeName1">修改name</button>
    <button @click="changeName('王高敏')">修改name</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  // methods:{
  //   ...mapMutations(['changeName1','changeName'])
  // }
}
</script>

<script setup>
import { useStore } from 'vuex';
const store = useStore();
const mutations = mapMutations(['changeName', 'changeName1']);
const newMatations = {};
Object.keys(mutations).forEach(key => {
  newMatations[key] = mutations[key].bind({$store: store})
})
const {changeName, changeName1} = newMatations;
</script>
<style>

</style>