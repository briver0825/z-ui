import { App } from "vue"

import Row from "./row"

Row.install = (app: App) => {
  app.component(Row.name, Row)
}

export default Row
