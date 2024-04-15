import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import libCss from 'vite-plugin-libcss';
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [
    react(),
    libCss({})
  ],
  // 此处和tsconfig都需要配置别名，否则不生效
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@public': path.resolve('./public'),
      'kun-wu': path.resolve('./src/main.ts'),

    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ]
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 允许在 Less 中使用 JavaScript 表达式
        globalVars: {
          // 全局变量
        }
      },
    }
  },
  build: {
    lib: {
      // 入口文件将包含可以由你的包的用户导入的导出：
      entry: resolve(__dirname, "src/main.ts"),
      name: "kun-wu",
      fileName: (format) => `index.${format}.js`,
    },
    // 确保 rollupOptions 输出配置包含 preserveModules: true（如果适用）
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react", "react-dom"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "React",
          "react-dom": "react-dom",
        },
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
