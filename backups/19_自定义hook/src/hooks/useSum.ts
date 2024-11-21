import { ref, onMounted, computed } from "vue";
import axios from "axios";

export default function () {
  //数据
  let sum = ref(0);
  //将数扩大十倍
  let bigSum = computed(() => {
    return sum.value * 10;
  });

  //方法
  function add() {
    sum.value += 1;
  }
  //钩子
  //一上来就+1
  onMounted(() => {
    add();
  });
  //给外部提供东西
  return { sum, add, bigSum };
}
