<template>
  <div class="app">
    <h1>这里是组件的结构，，倪浩啊~</h1>
    <Person />
  </div>
</template>

<script lang="ts">
import Person from "./components/Person.vue"; //要引入组件才能使用

//Js 或ts
export default {
  name: "App", //组件名
  components: { Person }, ////注册组件
};
</script>

<style>
/* 组件样式 */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
