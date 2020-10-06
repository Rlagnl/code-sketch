import VueRouter, { Route } from 'vue-router'

// 扩充
declare module 'vue/types/vue' {
	interface Vue {
		$router: VueRouter // 这表示this下有这个东西
		$route: Route
		$https: any
		$urls: any
		$Message: any
		$Modal: any
	}
}

