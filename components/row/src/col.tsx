import { defineComponent, inject } from "vue"

export default defineComponent({
  name: "ZCol",
  props: {
    span: Number,
  },
  setup(props, { slots }) {
    const gutter = (inject("gutter") as number) / 2
    const { span } = props
    return () => (
      <div
        class={"z-col"}
        style={[span && `flex:${span};`, `padding:0 ${gutter}px`]}
      >
        {slots.default && slots.default()}
      </div>
    )
  },
})
