// 对外暴露配置路由
export const constantRoute = [
  {
    // 登录
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: "登录",
      hidden: true,
    },
  },
  {
    // 登录成功展示数据的路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "layout",
      hidden: false,
      icon: "HomeFilled",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  {
    path: "/screen",
    component: () => import("@/views/screen/index.vue"),
    name: "Screen",
    meta: {
      title: "数据大屏",
      hidden: false,
      icon: "Platform",
    },
  },
  {
    path: "/analyse",
    component: () => import("@/layout/index.vue"),
    name: "analyse",
    meta: {
      title: "数据分析",
      hidden: false,
      icon: "DataLine",
    },
    children: [
      {
        path: "/analyse/reduce",
        component: () => import("@/views/analyse/reduce/index.vue"),
        meta: {
          title: "属性约简",
          hidden: false,
          icon: "Filter",
        },
      },
      {
        path: "/analyse/detection",
        component: () => import("@/views/analyse/detection/index.vue"),
        meta: {
          title: "异常检测",
          hidden: false,
          icon: "Aim",
        },
      },
      {
        path: "/analyse/classification",
        component: () => import("@/views/analyse/classification/index.vue"),
        meta: {
          title: "异常识别",
          hidden: false,
          icon: "View",
        },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "Any",
      hidden: true,
    },
  },
];
