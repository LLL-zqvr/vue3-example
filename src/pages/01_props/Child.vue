<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>子有个玩具：{{ toy }}</h4>
    <button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from "vue";
let toy = ref("佩奇");
//声明接收props
defineProps(["sendToy"]);
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
