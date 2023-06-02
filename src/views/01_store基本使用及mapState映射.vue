<template>
  <div class="app">
    <!-- 1、在模板中直接使用多个状态 -->
    <h1>在模板中直接使用多个状态</h1>
    <h2>name: {{ $store.state.name }}</h2>
    <h2>level: {{ $store.state.level }}</h2>
    <h2>count: {{ $store.state.count }}</h2>

    <!-- options api里面的 -->
    <!-- 2、计算属性（映射状态：数组语法） -->
    <!-- <h1>计算属性（映射状态：数组语法）</h1>
    <h2>name: {{ name }}</h2>
    <h2>level: {{ level }}</h2>
    <h2>count: {{ count }}</h2> -->

    <!-- 2、计算属性（映射状态：对象语法） -->
    <!-- <h1>计算属性（映射状态： 对象语法）</h1>
    <h2>stateName: {{ stateName }}</h2>
    <h2>stateLevel: {{ stateLevel }}</h2>
    <h2>stateCount: {{ stateCount }}</h2> -->

    <!-- comsitions api -->
    <!-- 3、compositions api计算属性（映射状态：对象语法） -->
    <!-- <h1>compositions api计算属性（映射状态： 对象语法）</h1>
    <h2>compositions api：cName: {{ cName }}</h2>
    <h2>compositions api：cLevel: {{ cLevel }}</h2> -->

    <!-- 3、compositions api独立代码逻辑到hooks文件里 -->
    <!-- <h2>hooks中name:{{ state.name.value }}</h2>
    <h2>hooks中level:{{ state.level }}</h2> -->

    <!-- 3、compositions api直接使用store -->
    <h2>store直接使用name:{{ name }}</h2>
    <h2>store直接使用level:{{ level }}</h2>
  </div>
</template>

<!-- <script>
import {mapState} from 'vuex'
// 模拟compotions api
export default {
  computed:{
    ...mapState(['name','level','count']),
    // 自定义名称，防止与data里面的变量冲突
    ...mapState({
      stateName: state => state.name,
      stateLevel: state => state.level,
      stateCount: state => state.count
    })
  }
}
</script> -->

<script setup>
// 1、一步步完成
// import {computed} from 'vue';
// import {mapState, useStore} from 'vuex';
// const {name,level} = mapState(['name', 'level'])
// const cName = computed(name.bind({$store: useStore()}));
// const cLevel = computed(level.bind({$store: useStore()}));

// 2、使用useState
// import useState from '../hooks/useState.js'
// const state= useState(['name', 'level']);

// 3、直接使用
import { toRefs } from 'vue';
import { useStore } from 'vuex';
// 这样直接使用，缺点：不是响应式
// const {name,level} = useStore();
// 但是可以通过toRefs来变成响应式
const { name , level }= toRefs(useStore().state);

</script>

<style>

</style>