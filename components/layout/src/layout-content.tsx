import { defineComponent } from "vue"

export default defineComponent({
  name: "ZLayoutContent",
  setup(props, { slots }) {
    return () => (
      <div class={"z-layout-content"}>{slots.default && slots.default()}</div>
    )
  },
})
