import { defineComponent } from "vue"
import { getClass } from "../../../utils/style"

import "./card.scss"

export default defineComponent({
  name: "ZCard",
  props: {
    title: String,
    headerBg: String,
    headerHeight: String,
  },
  setup(props, { slots }) {
    const { title, headerBg, headerHeight } = props
    return () => (
      <div class={"z-card " + getClass(props)}>
        {(slots.header || title || headerBg) && (
          <div
            class={"card-header"}
            style={[
              headerBg &&
                `background:url(${headerBg}) no-repeat;background-size:cover;`,
              headerHeight && `height:${headerHeight};`,
            ]}
          >
            {title}
            {slots.header && slots.header()}
          </div>
        )}

        <div class={"card-body"}>{slots.default && slots.default()}</div>
      </div>
    )
  },
})
