import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
server:{
  proxy:{
    "/getProject":"http://localhost:3000",
    "/getBlog":"http://localhost:3000"
  }
}
},
)
