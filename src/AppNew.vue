<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
  	name: 'App',
  	// 生命周期
	created() {
		console.warn('created')
	},
	pageVisible() {
		console.warn('页面显示出来了')
	},
	pageHidden() {
		console.warn('页面隐藏了')
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
