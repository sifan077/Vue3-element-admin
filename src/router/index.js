import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import('../views/LoginView.vue')
    },
    {
        path: "/home",
        name: "home",
        component: () => import('../views/home/MyIndex.vue'),
        children: [
            {
                path: "/echarts",
                name: "echarts",
                meta: {
                    title: "数据展示"
                },
                component: () => import('../views/home/childrens/EchartsView.vue')
            },
            {
                path: "/pay",
                name: "pay",
                meta: {
                    title: "支付信息管理"
                },
                component: () => import('../views/home/childrens/PayList.vue')
            },
            {
                path: "/user",
                name: "user",
                meta: {
                    title: "住户信息"
                },
                component: () => import('../views/home/childrens/UserOne.vue'),
                children: [
                    {
                        path: "/list",
                        name: "list",
                        meta: {
                            classifyTitle: "用户信息",//分类标题
                            title: "住户列表"
                        },
                        component: () => import('../views/home/childrens/UserList.vue')
                    },
                    {
                        path: "/update",
                        name: "update",
                        meta: {
                            classifyTitle: "用户信息",//分类标题
                            title: "住户信息修改"
                        },
                        component: () => import('../views/home/childrens/UserUpdate.vue')
                    },
                ]
            },
            {
                path: '/:error*',
                name: 'notFound',
                meta: {
                    title: "未知页面"
                },
                component: () => import('../views/404View.vue')
            }
        ]
    },
    {
        path: "/",
        redirect: "/login"
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;