<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <h3>欢迎来到： {{ countStore.school }}，{{ countStore.address }}</h3>
    <select v-model="n">
      <!-- 方法一 -->
      <!-- 加冒号，默认为表达式，而不是字符串 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="4">4</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { reactive, ref } from "vue";
//引入useCountStore
import { useCountStore } from "@/store/count";
//使用useCountStore,得到一个专门保存count相关的store
const countStore = useCountStore();

//数据
let n = ref(1);

//方法
function add() {
  // 第一种修改方式,直接摸到数据，这在vuex中是不被允许的，但是pinia支持
  // countStore.sum += 1;

  //第二种修改方式，patch意思为碎片，表示的是只修改之中的相应属性，多个数据同时发生变化时，最好用patch，因为它是整合成patch一次性地修改，会减少修改次数
  /**  countStore.$patch({
    sum: 888,
    school: "啊？",
  });
  */

  //第三种，使用actions（自定义方法），另：需要在store中的count声明actions
  countStore.increment(n.value);
}

function minus() {}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
