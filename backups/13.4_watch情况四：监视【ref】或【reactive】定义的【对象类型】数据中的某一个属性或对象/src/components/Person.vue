<template>
  <div class="person">
    <h1>
      情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某一个属性
    </h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from "vue";

//数据
let person = reactive({
  name: "张三",
  age: 18,
  car: {
    c1: "奔驰",
    c2: "宝马",
  },
});

//方法
function changeAge() {
  person.age += 1;
}

function changeName() {
  person.name += "~";
}

function changeC1() {
  person.car.c1 = "dfs";
}

function changeC2() {
  person.car.c2 = "fsd";
}

function changeCar() {
  // Object.assign(person.car, { c1: "sdf", c2: "dfs" });
  //对象中的对象可以直接改，如下。不能直接改的只是对象
  person.car = { c1: "雅迪", c2: "艾玛" };
}

//监视
/**
watch(person, (newValue, oldValue) => {
   console.log("person变化了", newValue, oldValue);
 });
  */
// watch 监视的只有四个：一个函数，返回一个值；ref；一个响应式对象（如 reactive）；或者由这些东西组成的数组.
// 若只想监视reactive中的一个值，如监视name，但直接写成监视person.name是不正确的，原因看上一行
// 所以要包装一下
/** 
watch(
  () => {
    return person.name;
  },
  (newValue, oldValue) => {
    // 此时监视得具体，所以新值旧值也正确了，而不仅仅是依靠对象地址来分辨
    console.log("person.name变化了", newValue, oldValue);
  }
);
*/
//监视，情况4.1：监视响应式对象中的某个属性，且该属性为基本类型时，要写成函数式
//又可以把箭头函数返回值简写成：
watch(
  () => person.name,
  (newValue, oldValue) => {
    // 此时监视得具体，所以新值旧值也正确了，而不仅仅是依靠对象地址来分辨
    console.log("person.name变化了", newValue, oldValue);
  }
);
//监视，情况4.2：监视响应式对象中的某个对象，可以直接编写，但是最好还是写成函数式

//这么写的话，能监视到car中的元素的变化，但是如果整个car改变的话监视不到（因为car对象变了，说明地址也不是原来的那个了，所以会改变。）
/** 
 watch(person.car, (newValue, oldValue) => {
  console.log("person.car变化了", newValue, oldValue);
});
*/
//所以还是写成函数式最好,此时car中属性的变化就不关心了，监视不到了；但是可以监视到整个car的变化：
// 另：如果想要监视car中属性的变化也是可以的——把deep声明为true
watch(
  () => person.car,
  (newValue, oldValue) => {
    console.log("person.car变化了", newValue, oldValue);
  },
  { deep: true }
);
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
