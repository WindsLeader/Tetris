import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 出现波浪线错误，安装 @types/node
export default defineConfig({
    plugins: [vue()],
    // 配置文件夹别名
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
})