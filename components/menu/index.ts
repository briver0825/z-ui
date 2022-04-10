import { withInstall } from "../../utils/make-installer"

import "./src/style.scss"

import Row from "./src/row"
import Col from "./src/col"

export const ZRow = withInstall(Row)
export const ZCol = withInstall(Col)
