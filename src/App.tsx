import { defineComponent, reactive, ref } from 'vue';
const img = require('./assets/logo.png'); // eslint-disable-line

import HelloWorld from './components/HelloWorld';

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'ace',
    });

    const numberRef = ref(1);

    function renderHelloWorld(num: number) {
      return <HelloWorld age={num} />;
    }

    return () => {
      const number = numberRef.value;
      return (
        <div id="app">
          <img src={img} alt="" />
          <p>{state.name + number}</p>
          {renderHelloWorld(12)}
        </div>
      );
    };
  },
});
