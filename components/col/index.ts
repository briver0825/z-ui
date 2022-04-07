import { App } from "vue"

import Col from "./col"

Col.install = (app: App) => {
  app.component(Col.name, Col)
}

export default Col
