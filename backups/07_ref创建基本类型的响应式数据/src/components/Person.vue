<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!-- 这个script负责控制组件名字 -->
<!-- <script lang="ts">
export default {
  name: "Person1234",
};
</script> -->
<!-- 如果没有lang="ts"，会认为上面的script中的是ts语言，而下面这个只是js语言，导致语言不统一而报错。所以要加上lang="ts"，使得下面的语句也声明为ts -->
<!-- 下面这个加上setup既是代表写了setup(){}并且自动在大括号里面返回了所有数据方法 -->
<!-- 这个script负责setup -->
<script lang="ts" setup name="Person">
//引入ref，使得可以使用响应式数据
import { ref } from "vue";
//数据
let name = ref("张三");
let age = ref(18);
let tel = "124243";
let address = "东北林业大学";
console.log(name);
console.log(age);
console.log(tel);
//方法
function changeName() {
  name.value = "zhang-san"; //注意：这样修改name，页面是没有变化的
  console.log(name); //name的值确实改了，但是name不是响应式的
}
function changeAge() {
  age.value += 1; //同上
}
function showTel() {
  alert(tel);
}
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
</style>
