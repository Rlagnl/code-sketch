// 引入样式文件，用于清除浏览器默认样式
import './assets/css/cssreset-min.css'
import './public-path.js'
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import CustomLifeCycle from './utils/customLifeCycle'

// rem适配方案，初始化 html 的 fontSize 逻辑
const designWidth: number = 375;
const ratio = innerWidth / designWidth * devicePixelRatio
document.getElementsByTagName('html')[0].style.fontSize = (ratio * 5) + 'px'

// 初始化Vue实例
Vue.config.productionTip = false

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function render(props: any = {}) {
  const { container } = props;
  const vm = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app');

  console.warn('vm', vm)
  // 将rootVm 绑定到生命周期函数监听里面
  CustomLifeCycle(vm)

  window.$Vm = vm
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */

export async function mount(props: any) {
  console.log('app mount', props);
  render(props)
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('app unmount');
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: any) {
  console.log('update props', props);
}
