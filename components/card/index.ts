import { App } from "vue"

import Card from "./card"

Card.install = (app: App) => {
  app.component(Card.name, Card)
}

export default Card
