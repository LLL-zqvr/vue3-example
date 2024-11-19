<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h3>年龄：{{ person.age }}</h3>
    <button @click="changName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <hr />
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="test">修改obj</button>
    <button></button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from "vue";
//数据
let person = reactive({
  name: "张三",
  age: 18,
});
let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
});
//方法
function changeAge() {
  person.age += 1;
}
function changName() {
  person.name += "~";
}
function changePerson() {
  // reative不能这么改
  // person = { name: "lisi", age: 90 };
  // 要这么写,但是实际上reactive是无法更改整个对象的，所以这里只是批量修改了person的值，而不是像ref换了一个对象。前者修改属性值，后者修改了对象地址，既真正意义的换了对象
  Object.assign(person, { name: "李四", age: 80 });
}

function test() {
  obj.a.b.c = 888;
}

//监视，情况三：监视【reactive】定义的【对象类型】数据,且默认是开启深度监视的
watch(person, (newValue, oldValue) => {
  console.log("person变化了", newValue, oldValue);
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
