import Vue from 'vue'
Vue.component('hello-world', () => import('./HelloWorld.vue'))

interface Options {
	data: any
	children: any
}

Vue.component('functional-button', {
	name: 'functional-button',
	functional: true,
	render(createElement: any, context: Options) {
		const data = context.data
        const children = context.children
        
        console.log('this', this) // => null
        console.log('children', children)
        console.log('data', data)

		// return createElement('button', data, children)
		return createElement('hello-world', data, children)
	}
})
