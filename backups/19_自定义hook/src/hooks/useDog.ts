import { reactive, onMounted } from "vue";
import axios from "axios";

export default function () {
  //数据

  let dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_292.jpg",
  ]);

  //方法

  async function getDog() {
    try {
      let result = await axios.get(
        "https://dog.ceo/api/breed/pembroke/images/random"
      );
      console.log(result.data.message);
      dogList.push(result.data.message);
    } catch (error) {
      alert(error);
    }
  }

  //钩子
  onMounted(() => {
    getDog();
  });

  //最后千万别忘了向外部提供东西,数组对象啥都行
  return { dogList, getDog };
}
