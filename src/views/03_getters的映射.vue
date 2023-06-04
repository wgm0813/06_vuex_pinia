<template>
  <div>
    <h1>getters的映射</h1>
    <!-- options api -->
    <!-- <h2>doubleCount {{ doubleCount }}</h2>
    <h2>totalAge {{ totalAge }}</h2>
    <h2>useInfoById {{ useInfoById(111) }}</h2> -->

    <!-- compositions api -->
    <h2>doubleCount {{ doubleCount }}</h2>
    <h1>{{ useInfo(111) }}</h1>
  </div>
</template>

<!-- <script>
// 使用options api映射mapGetters
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters(['doubleCount','totalAge', 'useInfoById'])
  }
}
</script> -->

<script setup>
  // import {computed, toRefs} from 'vue';
  import {computed} from 'vue';
  import {mapGetters,useStore} from  'vuex';
  const store = useStore();

  // 1、使用mapGetters
  const {useInfoById} = mapGetters(['useInfoById'])
  const useInfo = computed(useInfoById.bind({$store: store}))

  // 直接解构，并且包裹成ref,要有toRefs才会是响应式
  // const {doubleCount,totalAge} = toRefs(store.getters);

  // 这个写法直接是响应式
  const doubleCount = computed(() => store.getters.doubleCount)
</script>

<style>

</style>