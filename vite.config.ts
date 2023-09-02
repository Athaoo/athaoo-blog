import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const { resolve } = path

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __APP_ENV__: {
        API_URL: env.VITE_API_URL,
        BLOG_URL: env.VITE_BLOG_URL,
        ADMIN_URL: env.VITE_ADMIN_URL,
        DEFAULT_BG_URL: env.VITE_DEFAULT_BG_URL,
        ROUTER_BASE: env.VITE_ROUTER_BASE,
      },
    },
    resolve: {
      alias: {
        '@src': resolve(__dirname, './src'),
        '@api': resolve(__dirname, './src/api'),
        '@utils': resolve(__dirname, './src/utils'),
        '@containers': resolve(__dirname, './src/containers'),
        '@assets': resolve(__dirname, './src/assets'),
        '@components': resolve(__dirname, './src/components'),
      },
    },
    // 因为开发环境blog和admin同时热更，所以端口不确定谁是谁，不用写server端口
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, './src/index.html'),
          admin: resolve(__dirname, './src/admin.html'),
        },
      },
      outDir: resolve(__dirname, './dist'),
      emptyOutDir: true, //清空dist
    },
    plugins: [react()],
    publicDir: resolve(__dirname, './public'),
    base: env.VITE_ROUTER_BASE ?? '',
  }
})
