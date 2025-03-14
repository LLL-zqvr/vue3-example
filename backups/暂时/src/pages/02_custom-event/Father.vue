<template>
  <div class="father">
    <h3>父组件</h3>
    <h4 v-show="toy">子给的玩具:{{ toy }}</h4>

    <!-- 获取数据6，7，事件对象 -->
    <!-- <button @click="test(6, 7, $event)">点我</button> -->

    <!-- 将str变成哈哈 -->
    <!-- <h4>{{ str }}</h4> -->
    <!-- 在模板中ref数据可以不写.value -->
    <!-- <button @click="str = '哈哈'">点我</button> -->

    <Child @send-toy="saveToy" />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from "./Child.vue";
import { ref } from "vue";
//数据
// let str = ref("你好");

// 方法
/** 
function test(a: number, b: number, c: Event) {
  console.log(a, b, c);
}
*/

//数据
let toy = ref("");

//方法
//保存传递过来的玩具
function saveToy(value: string) {
  console.log("xyz", value);
  toy.value = value;
}
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
