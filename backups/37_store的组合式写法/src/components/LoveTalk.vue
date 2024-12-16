<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句<del>土味情话</del>诗词</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useTalkStore } from "@/store/loveTalk";
import { storeToRefs } from "pinia";

// use之后开发者工具就有相应的store了
const talkStore = useTalkStore();
const { talkList } = storeToRefs(talkStore);

// mutate指的是本次修改信息，state是本次修改数据
talkStore.$subscribe((mutate, state) => {
  // console.log("talkStore里面保存的数据发生了变化", mutate, state);

  //浏览器的本地存储
  //localStorage里面存的都是字符串，如果不是字符串，底层会调toString（），如果是对象数组之类的话，可能会发生[object]之类的惨案，所以还要作处理（使用JSON.stringify()）
  localStorage.setItem("talkList", JSON.stringify(state.talkList));
});

//方法
async function getLoveTalk() {
  talkStore.getATalk();
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
