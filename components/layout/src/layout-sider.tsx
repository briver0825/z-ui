import { defineComponent } from "vue"

export default defineComponent({
  name: "ZLayoutSider",
  setup(props, { slots }) {
    return () => (
      <div class={"z-layout-sider"}>{slots.default && slots.default()}</div>
    )
  },
})
