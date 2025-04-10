<!-- 需求：哥哥Child1把玩具给弟弟Child2玩 -->
<template>
  <div class="child1">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emitter.emit('send-toy', toy)">玩具给弟弟</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import emitter from "@/utils/emitter";
import { ref } from "vue";
//数据
let toy = ref("佩奇");
</script>

<style scoped>
.child1 {
  margin-top: 50px;
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
.child1 button {
  margin-right: 10px;
}
</style>
