import { createApp, defineComponent, h } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

// import App from './App.vue';

const img = require('./assets/logo.png'); // eslint-disable-line

// h函数和createElement类似
const App = defineComponent({
  render() {
    return h('div', { id: 'app' }, [
      h('img', {
        alt: 'Vue logo',
        src: img,
      }),
      h(HelloWorld, {
        msg: 'Welcome to vue.js',
        age: 12,
      }),
    ]);
  },
});

createApp(App).mount('#app');
