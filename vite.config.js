// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath, URL } from 'url'

// превратить import.meta.url в путь к папке
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // теперь @ точно смотрит в src вашего проекта
      '@': path.resolve(__dirname, 'src'),
      // или можно сразу так:
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})
