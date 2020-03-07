import Vue from 'vue'  //引入vue
import VueRouter from 'vue-router'  //引入路由

Vue.use(VueRouter)  //使用vue对路由进行注册

const Film = ()=>import('@/views/film.vue')
const Center = ()=>import('@/views/center.vue')
const Cinema = ()=>import('@/views/cinema.vue')
const nowPlaying = ()=>import('@/views/nowPlaying.vue')
const comingSoon = ()=>import('@/views/comingSoon.vue')

const router = new VueRouter({  //创建一个路由实例
	routes:[
		{ path: '/flim', component: Film, children:[
			{ path: 'nowplaying', component: nowPlaying },
			{ path: 'comingsoon', component: comingSoon}
		]},
		{ path: '/center', component: Center },
		{ path: '/cinema', component: Cinema }
	]
})

export default router  //抛出理由模块