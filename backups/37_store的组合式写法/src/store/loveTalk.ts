import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
/** 
 这里的是选项式写法
export const useTalkStore = defineStore("talk", {
  actions: {
    async getATalk() {
      //发请求

      let {
        data: { content: title },
      } = await axios.get("https://v1.jinrishici.com/all.json");
      //把请求回来的字符串包装成一个对象
      let obj = { id: nanoid(), title: title };
      this.talkList.unshift(obj);
    },
  },
  // 真正储存数据的地方
  state() {
    return {
      // as string 断言，说明肯定是string，而不存在为空的可能（JSON.parse（）不能处理null）
      //后面再用个空数组保底，保证最开始为空时程序也好使
      talkList: JSON.parse(localStorage.getItem("talkList") as string) || [],
    };
  },
  
});
*/

// store的组合式写法
import { reactive } from "vue";
export const useTalkStore = defineStore("talk", () => {
  //talkList就是state
  const talkList = reactive(
    JSON.parse(localStorage.getItem("talkList") as string) || []
  );
  //getATalk函数相当于action
  async function getATalk() {
    //发请求
    let {
      data: { content: title },
    } = await axios.get("https://v1.jinrishici.com/all.json");
    //把请求回来的字符串包装成一个对象
    let obj = { id: nanoid(), title: title };
    talkList.unshift(obj);
  }
  return { talkList, getATalk };
});
