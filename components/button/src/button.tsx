import { defineComponent } from "vue"
import { getClass } from "../../../utils/style"

import "./button.scss"

export default defineComponent({
  name: "ZButton",
  props: {
    plain: Boolean,
    primary: Boolean,
    danger: Boolean,
    success: Boolean,
    info: Boolean,
    warning: Boolean,
    round: Boolean,
  },
  setup(props, { slots }) {
    return () => (
      <button class={"z-btn " + getClass(props)}>
        {slots.default && slots.default()}
      </button>
    )
  },
})
