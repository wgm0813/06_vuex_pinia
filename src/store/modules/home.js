export default {
  // 命名空间，有了之后就会不受全局注册的影响，只会在自己模块里面有用。注意拿的时候语法$store.getters['count/doubleCount']类似这样的写法
  // namespaced: true,
  state: () => ({
    //服务器数据
    banner: [],
    recommend: []
  }),
  mutations: {
    setBanner(state, banner) {
      state.banner = banner;
    },
    setCommend(state, recommend) {
      state.recommend = recommend;
    }
  },
  actions: {
    async fetchHomeMultidataAction(context) {
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
      const res = await fetch("http://123.207.32.32:8000/home/multidata");
      const data = await res.json();
      console.log(data);
      // 想要修改state里面的数据，只能通过
      context.commit("setBanner", data.data.banner.list);
      context.commit("setCommend", data.data.recommend.list);
    },

    fetchHomeMultidataActionPromise(context) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve) => {
        const res = await fetch("http://123.207.32.32:8000/home/multidata");
        const data = await res.json();

        context.commit("setBanner", data.data.banner.list);
        context.commit("setCommend", data.data.recommend.list);

        resolve("dddd");
      });
    }
  }
};