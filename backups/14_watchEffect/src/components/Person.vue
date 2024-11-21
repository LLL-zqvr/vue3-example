<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到8cm时给服务器发请求</h2>
    <h2>当前水温为：{{ temp }}°C</h2>
    <h2>当前水位为：{{ height }}cm</h2>
    <button @click="changeTemp">点我水温+10</button>
    <button @click="changeHeight">点我水位+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch, watchEffect } from "vue";

//数据
let temp = ref(10);
let height = ref(0);

//方法
function changeTemp() {
  temp.value += 10;
}
function changeHeight() {
  height.value += 1;
}
//监视 --watch实现
//要明确指出监视的数据
/** 
watch([temp, height], (newValue, oldValue) => {
  // console.log(newValue, oldValue);
  if (temp.value >= 60 || height.value >= 8) {
    console.log("给服务器发请求");
  }
});
*/

//此时，需求实现了，但是如果需要监视变化的数据更多呢？比如需要监视十个数据，难道要把这十个数据都写上吗？很明显，并不是，此时我们需要一个东西来帮忙——watchEffect

//监视 --watchEffect实现
//，不用指明监视对象，用到谁就监视谁
//但是对于或逻辑运算（如这次的例子）是有bug的
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 8) {
    console.log("给服务器发请求");
  }
});
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
