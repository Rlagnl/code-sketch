<template>
	<div class="home-wrapper">
		<img alt="Vue logo" :src="logoImage" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script lang='ts'>
import vue from 'vue'
import Component from 'vue-class-component'
import HelloWorld from '../components/HelloWorld.vue'
import logoImage from '../assets/images/logo.png'

@Component({
	components: {
		HelloWorld
	}
})
export default class App extends vue {
	private logoImage: string = logoImage
	private pageVisible(): void {
		console.warn('home 页面显示出来了')
	}
	private pageHidden(): void {
		console.warn('home 页面隐藏了')
	}
}
</script>

<style>
.home-wrapper {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
