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
          path: "detail/:id/:title/:content",
          component: Detail,
          // 有了props，默认父传给子组件的值就是这些了,这些值会跟着detail组件

          //以一种写法：将路由收到的所有params参数作为props传给路由组件
          props: true,

          //第二种写法（写成函数）：可以自己决定将什么作为props给路由组件
          /** 
          props(route) {
            // 此时返回的就是路由
            // return route.params;
            return route.query;
          },
          */

          //第三种写法（对象写法，因为数写死了所以很少用）可以自己决定将什么作为props给路由组件
          /** 
          props: {
            a: 100,
            b: 200,
            c: 300,
          },
          */
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
