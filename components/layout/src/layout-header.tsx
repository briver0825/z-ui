import { defineComponent } from "vue"

export default defineComponent({
  name: "ZLayoutHeader",
  setup(props, { slots }) {
    return () => <div>{slots.default && slots.default()}</div>
  },
})
