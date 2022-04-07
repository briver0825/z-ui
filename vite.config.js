const path = require("path")

import vueJsx from "@vitejs/plugin-vue-jsx"

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, "./index.ts"),
      name: "ZUi",
      fileName: (format) => `z-ui.${format}.js`,
    },
  },
  plugins: [vueJsx()],
}
