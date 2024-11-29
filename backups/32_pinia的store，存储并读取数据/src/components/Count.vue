<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <!-- 方法二：加上.number -->
    <!-- <select v-model.number="n"> -->
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
//将在store中写的关于数的小仓库拿出来
import { useCountStore } from "@/store/count";

const countStore = useCountStore();
// 以下两种方式都可以拿到state中的数据
// console.log("@@@", countStore.sum);
// console.log("@@@", countStore.$state.sum);

/** 
 * 一个比较好玩的东西
let obj = reactive({
  a: 1,
  b: 2,
  c: ref(3),
});
console.log(obj.a);
console.log(obj.b);
// c用reactive包裹住了，所以c虽然是ref数据，但是其实已经被解包了，不用.value了
console.log(obj.c); //得出3
*/

//数据
let n = ref(1);

//方法
function add() {}

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
