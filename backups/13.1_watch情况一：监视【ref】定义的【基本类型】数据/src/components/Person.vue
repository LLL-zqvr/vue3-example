<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum + 1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from "vue";
//数据
let sum = ref(0);

function changeSum() {
  sum.value += 1;
}

//监视
// watch(谁？，回调函数)
// 情况一：监视【ref】定义的【基本类型】数据
// watch()返回的是一个停止监视的方法
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log("sum变化了", newValue, oldValue);
  if (newValue >= 10) {
    // 引用停止监视的方法
    stopWatch();
  }
});
console.log(stopWatch);
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
li {
  font-size: 20px;
}
</style>
