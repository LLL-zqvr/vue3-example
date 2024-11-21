<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我sum + 1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
//生命周期有四个阶段。分别为：创建，挂载，更新，销毁，每个阶段两个钩子，一前一后
//vue会在合适时机调用特定函数，这些特定函数被统称为：生命周期钩子
//创建 setup
// 挂载 onBeforeMount
//挂载完毕 onMounted
//更新前 onBeforeUpdate
//更新完毕 onUpdated
//卸载前 onBeforeUnmount
//卸载完毕 onUnmounted
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

//数据
let sum = ref(0);

//方法
function add() {
  sum.value += 1;
}

//创建
console.log("创建");

//挂载前
onBeforeMount(() => {
  console.log("挂载前");
});

//挂载完毕
onMounted(() => {
  console.log("子----挂载完毕");
});

//更新前
onBeforeUpdate(() => {
  console.log("更新前");
});

//更新完毕
onUpdated(() => {
  console.log("更新完毕");
});

//卸载前
onBeforeUnmount(() => {
  console.log("卸载前");
});

//卸载完毕
onUnmounted(() => {
  console.log("卸载完毕");
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
