import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// mock插件提供方法
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        enable: command === "serve", //保证开发阶段可以使用mock接口
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnable: true,
          additionalData: "@import './src/styles/variable.scss';",
        },
      },
    },
  };
});
