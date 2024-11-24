<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <RouterLink
          :to="{
            // 不能用path只能用name了
            name: 'xijie',
            params: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
          >{{ news.title }}</RouterLink
        >
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts" name="News">
import { reactive } from "vue";
import { RouterView, RouterLink, useRouter } from "vue-router";

const newsList = reactive([
  { id: "safsdf01", title: "好累", content: "nnd！不响学辣！" },
  { id: "safsdf02", title: "如何一夜暴富", content: "梦里什么都有" },
  { id: "safsdf03", title: "震惊！万万没想到", content: "明天星期六捏，嘻嘻" },
  {
    id: "safsdf04",
    title: "哭了",
    content: "虽然明天周六，但是要上课，要开会；后天还要答辩。。不嘻嘻",
  },
  {
    id: "safsdf05",
    title: "还有高手？！",
    content: "下周连考两门期末，还有一堆小组作业，乐。",
  },
]);

const router = useRouter();

interface NewsInter {
  id: string;
  title: string;
  content: string;
}

function showNewsDetail(news: NewsInter) {
  router.push({
    name: "xijie",
    params: {
      id: news.id,
      title: news.title,
      content: news.content,
    },
  });
}
</script>
<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
/* marker是列表前面的小点点，这里改一下它的颜色 */
.news li::marker {
  color: #64967e;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
