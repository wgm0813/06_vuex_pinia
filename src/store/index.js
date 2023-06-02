import { createStore} from 'vuex'

const store = createStore({
  state:()=> ({
    count: 10,
    name: 'wanggaomin',
    level: 100,
    users: [
      {id:111,name:'why',age:11},
      {id:112,name:'why2',age:12},
      {id:113,name:'why3',age:13},
    ]
  }),
  getters: {
    doubleCount(state){
      return state.count*2
    },
    totalAge(state) {
      return state.users.reduce((pre,item) => {
        return pre + item.age
      },0)
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
