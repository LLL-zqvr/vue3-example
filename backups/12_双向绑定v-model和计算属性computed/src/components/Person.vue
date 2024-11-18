<template>
  <div class="person">
    <!-- 
      不加v-bind则输入框中只有firstName,不是其表示的值。
      姓：<input type="text" v-bind:value="firstName" /><br />
      名：<input type="text" v-bind:value="lastName" /><br />
      其中，v-bind可以缩略成: ，则如下：
     -->
    <!-- 
      姓：<input type="text" :value="firstName" /><br />
    名：<input type="text" :value="lastName" /><br />
    但是这样的话，是单向的修改，只能由数据流向页面，当页面中的输入框值变化时，数据的值不会变
    所以要改成： （value可省） 
   -->
    姓：<input type="text" v-model="firstName" /><br />
    名：<input type="text" v-model="lastName" /><br />
    <button @click="changeFullName">将全名改成lili</button>
    <!-- 全名：<span>{{ firstName }}-{{ lastName }} </span>-->

    <!-- 需求：将英文名首字母变成大写，下面的代码不能写在模板里面，太长太臃肿 -->
    <!-- 
      全名：<span
      >{{ firstName.slice(0, 1).toUpperCase() + firstName.slice(1) }}-{{
        lastName
      }}
      </span
    > 
  -->
    全名：<span>{{ fullName }}</span>
    <br />
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from "vue";

let firstName = ref("张");
let lastName = ref("三");

//这么定义的fullName是一个计算属性，只读，修改的是firstName，lastName，从而fullName被改，而不是直接改fullName这个值
/*
let fullName = computed(() => {
  return (
    firstName.value.slice(0, 1).toUpperCase() +
    firstName.value.slice(1) +
    "-" +
    lastName.value
  );
});
*/
//可读可写的计算属性
let fullName = computed({
  get() {
    return (
      firstName.value.slice(0, 1).toUpperCase() +
      firstName.value.slice(1) +
      "-" +
      lastName.value
    );
  },
  set(val) {
    const [str1, str2] = val.split("-");
    firstName.value = str1;
    lastName.value = str2;
    console.log("set", val);
  },
});
function changeFullName() {
  console.log(fullName.value);
  fullName.value = "li-si";
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
li {
  font-size: 20px;
}
</style>
