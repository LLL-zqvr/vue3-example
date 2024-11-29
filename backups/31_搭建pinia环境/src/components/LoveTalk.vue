<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句<del>土味情话</del>诗词</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from "vue";
import axios from "axios";
// nanoid——调用后会生成一个字符串
import { nanoid } from "nanoid";
//数据
let talkList = reactive([
  { id: "sfasfda01", title: "今天你有点怪，哪里怪？怪好看的！" },
  { id: "asdfasd02", title: "草莓，蓝莓，蔓越莓，基拟态梅" },
  { id: "sdfsdfs03", title: "心里给你留了块地，我的死心塌地" },
]);

//方法
async function getLoveTalk() {
  //发请求
  /**

  let result = await axios.get(
    "https://api.uomg.com/api/rand.qinghua?format=json"
  );
  */
  //上面的代码可以通过解构，直接得到想要的数据;另，解构得到content后，再将其重命名为title
  // 土味情话不管用力，只能整诗歌了
  let {
    data: { content: title },
  } = await axios.get("https://v1.jinrishici.com/all.json");
  //把请求回来的字符串包装成一个对象
  let obj = { id: nanoid(), title: title };
  talkList.unshift(obj);
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
