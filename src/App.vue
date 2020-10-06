<template>
	<div id="app" class="main-app">
		<div class='bg'></div>
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// 注册钩子name
Component.registerHooks([
  'pageVisible',
  'pageHidden'
])

@Component
export default class App extends Vue {
	// 生命周期
	private created(): void {
		console.warn('created')
		if (window.Worker) {
			let worker = new Worker('./dw-ping-pong.js');
			worker.onmessage = (e) => {
				console.log(`Main: Received message - ${e.data}`);
			}
			worker.postMessage("PING");
		} else {
			console.log("呜呜呜，不支持 Web Worker");
		}
	}
	private pageVisible(): void {
		console.warn('APP 页面显示出来了')
	}
	private pageHidden(): void {
		console.warn('app 页面隐藏了')
	}
}
</script>

<style scoped>
.main-app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	width: 100%;
	height: 100%;
	position: relative;
}

.bg {
	background-color: aqua;
	position: absolute;
	left: 30px;
	right: 30px;
	top: 30px;
	bottom: 30px;
}
</style>
