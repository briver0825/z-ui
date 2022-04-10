import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig } from "vite"
import Markdown from "vite-plugin-md"
import path from "path"

export default defineConfig({
  resolve: {
    alias: {
      "@demos": path.resolve(__dirname, "src/demos"),
    },
  },
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), vueJsx({}), Markdown()],
})
