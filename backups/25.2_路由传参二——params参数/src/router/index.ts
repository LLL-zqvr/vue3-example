// 创建一个路由器，并暴露出去

//第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";

//引入一个一个可能要呈现的组件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";

const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  routes: [
    //一个一个的路由规则
    {
      name: "zhuye",

      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",

      path: "/news",
      component: News,
      children: [
        {
          name: "xijie",
          // 子集不用写斜杠！！
          // 路由使用params参数时需要在path这里提前占位
          path: "detail/:id/:title/:content",
          component: Detail,
        },
      ],
    },
    {
      name: "guanyu",

      path: "/about",
      component: About,
    },
  ],
});

//将写好的路由暴露出去
export default router;
//注意，此时还要在main.ts处引用路由，这才能真正地使用路由
