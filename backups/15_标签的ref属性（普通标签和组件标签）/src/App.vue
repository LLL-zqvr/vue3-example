<template>
  <div class="person"><h2 ref="title2">你好啊</h2></div>
  <!-- <button @click="showLog">点我输出h2(ﾟДﾟ*)ﾉ</button> -->
  <button @click="showLog">点我输出子组件的refﾉ</button>
  <!-- person是组件标签 -->
  <!-- 在组件标签中用ref会有点特殊-->
  <person ref="ren" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue"; //要引入组件才能使用
import { ref } from "vue";

let title2 = ref();
let ren = ref();

function showLog() {
  // console.log(title2.value);
  // ref=“ren”绑定在person组件上，上面又将ref（）赋值给ren，此时打出ren，则是想打出person中的ref实例级对象。（此时打出的也确实是实例级对象，但是不做些处理是看不到子组件person中ref的具体值的。因为保护机制。所以要在子组件那里声明ref的哪些是可以被看到的，详细可见person.vue中）
  console.log(ren.value);
}
</script>
