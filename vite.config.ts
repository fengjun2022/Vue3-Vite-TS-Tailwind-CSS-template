import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  path from 'path';
import eslint from 'vite-plugin-eslint' // 新增
// eslint-disable-next-line @typescript-eslint/no-var-requires

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),eslint()],
  // 设置@路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  server: {
    host: "0.0.0.0",

    proxy: {
      "/api": {
        // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
        target: 'http://localhost:8081',

        // target: 'http://139.196.53.82:8081',
        // target: 'http://192.168.10.115:8081',
        changeOrigin: true, // 允许跨域
        ws: true, // 允许websocket代理
        // 重写路径 --> 作用与vue配置pathRewrite作用相同
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  build: {
    outDir: 'dist', // 输出路径，默认为 dist
    assetsDir: 'assets', // 静态资源文件夹名
    assetsInlineLimit: 4096, // 小于此大小的导入或引用资源将内联为 base64 编码，以减少 HTTP 请求
    cssCodeSplit: true, // 启用/禁用 CSS 代码拆分
    sourcemap: false, // 构建后是否生成 source map 文件
    rollupOptions: {
      // Rollup 打包配置
      // input: '/path/to/your/entry/main.js', // 自定义入口文件
      output: {
        // 输出配置
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
      external: [], // 排除打包的外部依赖
      plugins: [], // Rollup 插件配置
    },
    terserOptions: {
      // Terser 压缩配置
      compress: {
        // 打包时去除所有console与debugger
        drop_console: true,
        drop_debugger: true,
      },
    },
    manifest: true, // 是否生成 asset manifest 文件
    minify: 'terser', // 指定压缩器，默认为 terser，可设为 'esbuild'
    // 更多配置...
  }


})
