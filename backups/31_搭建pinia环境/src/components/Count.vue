<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
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
import { ref } from "vue";
//数据
let sum = ref(1);
let n = ref(1);

//方法
function add() {
  sum.value += n.value;
}

function minus() {
  sum.value -= n.value;
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
