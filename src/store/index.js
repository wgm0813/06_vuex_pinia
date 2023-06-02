import { createStore} from 'vuex'

const store = createStore({
  state:()=> ({
    count: 0
  }),
  // vuex早期需要用mutations进行修改
  mutations:{
    increment(state){
      state.count++
    }
  }
})

export default store
