import { createStore} from 'vuex'

const store = createStore({
  state:()=> ({
    count: 10,
    name: 'wanggaomin',
    level: 100,
  }),
  getters: {
    doubleCount(state){
      return state.count*2
    }
  },
  // vuex早期需要用mutations进行修改
  mutations:{
    increment(state){
      state.count++
    }
  }
})

export default store
