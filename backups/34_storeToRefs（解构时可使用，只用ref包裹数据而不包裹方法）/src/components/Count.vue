<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <h3>欢迎来到： {{ school }}，{{ address }}</h3>
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
import { reactive, ref, toRefs } from "vue";
//引入useCountStore
import { useCountStore } from "@/store/count";
//使用useCountStore,得到一个专门保存count相关的store
const countStore = useCountStore();

//解构，通过toRefs，但是不用，因为toRefs会将数据方法等全都转成ref类型，代价太大了
// const { sum, school, address } = toRefs(countStore);

//所以可以使用storeToRefs,只将store中的数据转成ref(只会关注store中的数据，不会对方法进行ref包裹),
import { storeToRefs } from "pinia";
const { sum, school, address } = storeToRefs(countStore);

//数据
let n = ref(1);

//方法
function add() {
  countStore.increment(n.value);
}

function minus() {
  countStore.sum -= n.value;
}
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
