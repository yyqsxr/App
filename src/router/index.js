// 引入vue
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用
Vue.use(VueRouter)

//引入组件
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Content from '../components/Content.vue'

//定义路由
export default new VueRouter({
	routes:[
		{
			path:'/home',
			name:'home',
			component: Home
		},
		{
			path:'/list/:times',
			name:'list',
			component: List
		},
		{
			path:'/content/:content',
			name:'content',
			component: Content
		},
		{
			path : '/*',
			redirect : '/home'
		}
	]
})