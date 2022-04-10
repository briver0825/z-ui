import { withInstall } from "../../utils/make-installer"

import "./src/style.scss"

import Layout from "./src/layout"
import LayoutContainer from "./src/layout-container"
import LayoutHeader from "./src/layout-header"
import LayoutContent from "./src/layout-content"
import LayoutSider from "./src/layout-sider"

export const ZLayout = withInstall(Layout)
export const ZLayoutContainer = withInstall(LayoutContainer)
export const ZLayoutHeader = withInstall(LayoutHeader)
export const ZLayoutContent = withInstall(LayoutContent)
export const ZLayoutSider = withInstall(LayoutSider)
