<template>
  <div class="functional-wrapper">
    <smart-component :data='data' />
    <button @click="change('img')">图片组件</button>
    <button @click="change('video')">视频组件</button>
    <button @click="change('text')">文本组件</button>
		<functional-button @click="log">click me</functional-button>
  </div>
</template>

<script lang='ts'>
import vue from 'vue'
import Component from 'vue-class-component'
import SmartComponent from "../components/SmartComponent"
import '../components/FunctionalButton'

@Component ({
  components: {
    SmartComponent
  }
})
export default class App extends vue {
  private data: any = {}
  // 生命周期
	private created(): void {
    //默认为图片组件
		this.change('img')
  }
  //
  private change (type: any): any {
    console.log('输入类型：' + type)
    switch (type) {
      case 'img':
       this.data = {
          type: 'img',
          url: 'http://pic-bucket.ws.126.net/photo/0001/2019-02-07/E7D8PON900AO0001NOS.jpg'
        }
        break
      case 'video':
        this.data = {
          type: 'video',
          url: 'https://www.runoob.com/try/demo_source/movie.mp4'
        }
        break
      case 'text':
        this.data = {
          type: 'text',
          content: '《流浪地球》中的科学：太阳何时吞并地球？科学家已经给出时间表'
        }
        break
      default:
        console.log('data 类型不合法：' + type)
    }
  }
	//
	private log(): void {
		console.log('click')
	}
}
</script>

<style>
.functional-wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
