<template>
  <!-- vue3 可以像这样连续使用多个根目录，但是vue2的话如果想用多个根目录，还需要一个根目录把多个根目录包裹起来 -->
  <!-- <Person />
  <Person />
  <Person /> -->
  <person />
</template>

<script lang="ts">
import Person from "./components/Person.vue"; //要引入组件才能使用

//Js 或ts
export default {
  name: "App", //组件名
  components: { Person }, ////注册组件
};
</script>

<style></style>
