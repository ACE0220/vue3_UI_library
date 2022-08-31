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
  props: PropsType,
  setup(props, ctx) {
    return () => {
      return <div>{props.age}</div>;
    };
  },
});
