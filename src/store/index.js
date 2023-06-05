import { createStore} from 'vuex'

const store = createStore({
  state: () => ({
    // 模拟数据
    count: 10,
    name: "wanggaomin",
    level: 100,
    users: [
      { id: 111, name: "why", age: 11 },
      { id: 112, name: "why2", age: 12 },
      { id: 113, name: "why3", age: 13 }
    ],

    //服务器数据
    banner: [],
    recommend: [],
  }),
  getters: {
    // 第一个参数是state,第二个参数相当于自己如果想要用回调
    doubleCount(state, getters) {
      return state.count * 2 + "所有年龄" + getters.totalAge;
    },

    // 指出返回函数，在页面调用的时候就可以任意传参，而不是写死
    useInfoById(state) {
      return function (id) {
        const friend = state.users.find((item) => item.id === id);
        return friend;
      };
    },

    totalAge(state) {
      return state.users.reduce((pre, item) => {
        return pre + item.age;
      }, 0);
    }
  },
  // vuex早期需要用mutations进行修改
  mutations: {
    increment(state) {
      state.count++;
    },
    changeName1(state){
      state.name ="杨幂";
    },
    changeName(state,payload) {
      state.name = payload;
    },
    setBanner(state,banner){
      state.banner = banner;
    },
    setCommend(state,recommend){
      state.recommend = recommend
    }
  },
  actions:{
    increment(context) {
      context.commit('increment');
    },
    async fetchHomeMultidataAction(context){
      //1、返回Promise,给Promise设置then
      // fetch("http://123.207.32.32:8000/home/multidata").then((res) => {
      //   res.json().then((data) => {
      //     console.log(data);
      //   });
      // });

      // 2、Promise链式调用
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   return res.json()
      // }).then(data => {
      //   console.log(data);
      // })

      // 3、await/async
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()
      console.log(data);
      // 想要修改state里面的数据，只能通过
      context.commit("setBanner",data.data.banner.list);
      context.commit("setCommend",data.data.recommend.list);
    }
  }
});

export default store
