import { defineStore } from "pinia";

export const useTalkStore = defineStore("talk", {
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
