<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="12" />
  {{ name }}:{{ name2 }}:{{ state.name3 }}
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  // setup接受两个参数，props和ctx:{slots, attrs, emit}
  setup(props, { slots, attrs, emit }) {
    // ref推荐用于定义基本类型
    const nameRef = ref('ace1');

    // reactive推荐用于定义复杂类型

    const state = reactive({
      name3: 'ace3',
    });

    // computed
    const computedNameRef = computed(() => {
      return nameRef.value + '2';
    });

    // watchEffect里面只有用到了这个ref才会引起副作用
    watchEffect(() => {
      console.log(nameRef.value);
    });

    return {
      name: nameRef,
      name2: computedNameRef,
      state,
    };
  },
});
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
