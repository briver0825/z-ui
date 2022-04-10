import { App } from "vue"

export function withInstall(component: any) {
  component.use = function (app: App) {
    app.component(component.name, component)
  }

  return component
}
