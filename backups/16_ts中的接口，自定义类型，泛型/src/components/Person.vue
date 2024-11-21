<template>
  <div class="person">？？？</div>
</template>

<script lang="ts" setup name="Person">
// 这里的@是指一下跳到最顶的路径上了
//声明引入接口时前面要加上type，以和普通的暴露出的值区分开
import { type PersonInter, type Persons } from "../types/index";

//这里是指，定义一个person，但改person必须符合接口规范
let person: PersonInter = { id: "sdfsa", name: "张三", age: 60 };

//定义一个数组，而且数组里面必须符合接口规范
/** 
let personList: Array<PersonInter> = [
  { id: "dfsd", name: "张三", age: 23 },
  { id: "sdfs", name: "sdfsd", age: 56 },
  { id: "sdfasdfs", name: "sdfdsfgf", age: 100 },
];
*/

//但是如果在index.ts中有相应的自定义类型了，则直接用即可(另，别忘了在前面的import处要引用那个类型)
let personList: Persons = [
  { id: "dfsd", name: "张三", age: 23 },
  { id: "sdfs", name: "sdfsd", age: 56 },
  { id: "sdfasdfs", name: "sdfdsfgf", age: 100 },
];
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
