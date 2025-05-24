// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Без алиасов — по умолчанию будут резолвиться в ./src
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})
