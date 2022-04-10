import { defineComponent, provide } from "vue"

export default defineComponent({
  name: "ZRow",
  props: {
    gutter: Number,
  },
  setup(props, { slots }) {
    provide("gutter", props.gutter)
    return () => <div class={"z-row"}>{slots.default && slots.default()}</div>
  },
})
