import Vue from 'vue'
//图片组件设置
var imgOptions = {
	props: ['data'],
	render: function (createElement: any): any {
		return createElement('div', [
			createElement('p', '图片组件'),
			createElement('img', {
				attrs: {
					src: (this as any).data.url,
					height: 300,
					weight: 400
				}
			})
		])
	}
}

//视频组件设置
var videoOptions = {
	props: ['data'],
	render: function (createElement: any): any {
		return createElement('div', [
			createElement('p', '视频组件'),
			createElement('video', {
				attrs: {
					src: (this as any).data.url,
					controls: 'controls',
					autoplay: 'autoplay'
				}
			})
		])
	}
}

//文本组件设置
var textOptions = {
	props: ['data'],
	render: function (createElement: any): any {
		return createElement('div', [
			createElement('p', '文本组件'),
			createElement('p', (this as any).data.content)
		])
	}
}

export default {
	name: 'smart-component',
	//设置为函数化组件
	functional: true,
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	render: function (createElement: any, context: any) {
		function get() {
			var data = context.props.data
			console.warn('context', context)
			console.warn('context.data', context.data)
			console.log('smart-component/type:' + data.type)
			//判断是哪一种类型的组件
			switch (data.type) {
				case 'img':
					return imgOptions
				case 'video':
					return videoOptions
				case 'text':
					return textOptions
				default:
					console.log('data 类型不合法：' + data.type)
			}
		}

		return createElement(
			get(),
			context,
			context.children
		)
	}
}
