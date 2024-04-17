import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@components", replacement: path.resolve(__dirname, "./src/components/") },
      { find: "@utils", replacement: path.resolve(__dirname, "./src/utils/") },
      { find: "@style", replacement: path.resolve(__dirname, "./src/style/") },
      { find: "@pages", replacement: path.resolve(__dirname, "./src/pages/") },
      { find: "@assets", replacement: path.resolve(__dirname, "./src/assets/") }
    ]
  },
})
