import { createApp, defineComponent, h, createVNode, reactive, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

// import App from './App.vue';

const img = require('./assets/logo.png'); // eslint-disable-line

// h函数和createElement类似
const App = defineComponent({
  setup() {
    const state = reactive({
      name: 'ace',
    });

    const numberRef = ref(1);

    setInterval(() => {
      state.name += '1';
      numberRef.value += 1;
    }, 1000);

    // h函数其实是createVNode的简单封装
    return () => {
      const number = numberRef.value;
      return h('div', { id: 'app' }, [h('p', state.name + number)]);
    };
  },
});

createApp(App).mount('#app');
