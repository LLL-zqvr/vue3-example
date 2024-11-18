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

    全名：<span>{{ firstName }}-{{ lastName }}</span
    ><br />
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from "vue";
let firstName = ref("张");
let lastName = ref("三");
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
