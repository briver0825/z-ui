import { defineComponent } from "vue"

export default defineComponent({
  name: "ZLayoutContainer",
  setup(props, { slots }) {
    return () => (
      <div class={"z-layout-container"}>{slots.default && slots.default()}</div>
    )
  },
})
