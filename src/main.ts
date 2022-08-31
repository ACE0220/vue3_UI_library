import { createApp, defineComponent, h, createVNode } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

import App from './App.vue';

const img = require('./assets/logo.png'); // eslint-disable-line

// h函数和createElement类似
// const App = defineComponent({
//   render() {
//     // h函数其实是createVNode的简单封装
//     return createVNode('div', { id: 'app' }, [
//       createVNode('img', {
//         alt: 'Vue logo',
//         src: img,
//       }),
//       createVNode(HelloWorld, {
//         msg: 'Welcome to vue.js',
//         age: 12,
//       }),
//     ]);
//   },
// });

createApp(App).mount('#app');
