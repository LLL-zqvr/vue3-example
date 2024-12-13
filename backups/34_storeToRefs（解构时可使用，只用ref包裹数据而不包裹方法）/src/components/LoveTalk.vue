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
//数据

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
