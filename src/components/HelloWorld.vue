<template>
  <div class="hello">{{ age }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// 手动告诉ts这是readonly
const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true,
  },
} as const;

export default defineComponent({
  name: 'HelloWorld',
  props: PropsType,
  mounted() {
    this.age; // 当PropsType不设置为as const的时候，age的属性是number或undefined，不符合我们的预期
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
