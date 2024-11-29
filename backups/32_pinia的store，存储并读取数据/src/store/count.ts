import { defineStore } from "pinia";

// 两个参数值，第一个是id，最好和文件名保持一致；第二个是配置对象,state是一个函数，并且要返回一个对象
//state是真正存储数据的地方
export const useCountStore = defineStore("count", {
  state() {
    return {
      // 求和count的初始值,设定为6
      sum: 6,
    };
  },
});
