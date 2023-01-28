import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { test } from "@/test"

test()
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ root: "./" })
    // {
    //   name: 'measure-startup-time-and-quit',
    //   resolveId() {
    //     console.log('Startup time:', process.uptime() + 's')
    //     process.exit()
    //   },
    // },
  ],
})
