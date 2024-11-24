<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <select>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button>加</button>
    <button>减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from "vue";
//数据
let sum = ref(1);
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
