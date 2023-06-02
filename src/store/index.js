import { createStore} from 'vuex'

const store = createStore({
  state:()=> ({
    count: 0,
    name: 'wanggaomin',
    level: 100,
  }),
  // vuex早期需要用mutations进行修改
  mutations:{
    increment(state){
      state.count++
    }
  }
})

export default store
