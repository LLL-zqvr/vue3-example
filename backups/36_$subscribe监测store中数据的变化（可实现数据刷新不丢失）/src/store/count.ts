import { defineStore } from "pinia";

// 两个参数值，第一个是id，最好和文件名保持一致；第二个是配置对象,state是一个函数，并且要返回一个对象
//state是真正存储数据的地方
export const useCountStore = defineStore("count", {
  // 接下来的actions是为了写修改数据的第三种方法
  //actions里面放置的是一个个的方法，用于响应组件中的“动作”

  actions: {
    // 自定义方法
    // 声明一下value是number类型的，不然会警告（未知类型的直接加法很危险）
    increment(value: number) {
      console.log("increment被调用了", value);

      //修改数据,this指的是当前的store
      this.sum += value;
    },
  },

  state() {
    return {
      // 求和count的初始值,设定为6
      sum: 6,
      school: "linda",
      address: "啦啦啦",
    };
  },
  getters: {
    /**
    bigSum(state) {
      return state.sum * 10;
    },
     */
    //上面的代码直接写成箭头函数
    bigSum: (state) => state.sum * 10,
    // upperSchool(state) {
    //   return state.school.toUpperCase();
    // },
    // this指的是store，第一行的string是规定一下类型，不然它不知道返回的是字符串，会报错
    upperSchool(): string {
      return this.school.toUpperCase();
    },
  },
});
