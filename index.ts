import { App } from "vue"

import "./taiwind.scss"

import Button from "./components/button"
import Card from "./components/card"
import Row from "./components/row"
import Col from "./components/col"

const components = [Button, Card, Row, Col]

const install = (app: App) => {
  components.forEach((component) => {
    component.install(app)
  })
}
export default install
