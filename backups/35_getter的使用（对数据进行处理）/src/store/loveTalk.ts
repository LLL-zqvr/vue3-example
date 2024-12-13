import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
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
      talkList: [
        { id: "sfasfda01", title: "今天你有点怪，哪里怪？怪好看的！" },
        { id: "asdfasd02", title: "草莓，蓝莓，蔓越莓，基拟态梅" },
        { id: "sdfsdfs03", title: "心里给你留了块地，我的死心塌地" },
      ],
    };
  },
});
