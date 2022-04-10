import { App } from "vue"

import "./taiwind.scss"

export * from "./components/button"
export * from "./components/card"
export * from "./components/row"
export * from "./components/layout"

import ZButton from "./components/button"
import ZCard from "./components/card"
import { ZRow, ZCol } from "./components/row"
import {
  ZLayout,
  ZLayoutContainer,
  ZLayoutContent,
  ZLayoutHeader,
  ZLayoutSider,
} from "./components/layout"

const components = [
  ZButton,
  ZCard,
  ZRow,
  ZCol,
  ZLayout,
  ZLayoutContainer,
  ZLayoutContent,
  ZLayoutHeader,
  ZLayoutSider,
]

const install = (app: App) => {
  components.forEach((component) => {
    component.use(app)
  })
}
export default install
