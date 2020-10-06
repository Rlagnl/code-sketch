// @ts-nocheck
import { createContext, removeContext } from '@alicloud/console-os-browser-vm';
const _promise = createContext({});

const run = (context) => { 
  console.log('run')
  ;(function({window}) {
    window.eval(`
      window.test = 1;
      console.warn('111111  window.test', window.test)
    `)
  })(context)
  console.warn('222222  window.test', window.test)
}

_promise.then(context => {
  console.warn('context.window', context.window);
  console.warn('context.window.location', context.window.location.href);
  run(context.window)
  removeContext( _promise );
})

// 销毁一个 context
// await removeContext( context );

// function create(conf: any) {
//     return new Promise((resolve) => {
//       const iframe = document.createElement( 'iframe' );
  
//       // TODO: change src to a reasonable value.
//       iframe.setAttribute( 'src', conf.url ? conf.url : '/api.json');
//       iframe.style.cssText = 'position: absolute; top: -20000px; width: 1px; height: 1px;';
  
//       document.body.append( iframe );
  
//       iframe.onload = () => {
//         resolve( console.log ('iframe', iframe));
//       }
//     })
//   }
  
//   const context = create({url: 'about:blank'})
//   console.warn('context', context)

export default {}