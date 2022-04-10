import { defineComponent } from "vue"

export default defineComponent({
  name: "ZLayout",
  setup(props, { slots }) {
    return () => (
      <div class={"z-layout"}>{slots.default && slots.default()}</div>
    )
  },
})
