import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
var __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            includePublic: true,
            exclude: ['node_modules'],
            include: './src/assets/img',
            jpg: { quality: 70 },
            png: { quality: 80 },
            webp: { quality: 70, lossless: true },
            svg: {
                multipass: true,
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                removeViewBox: false,
                            },
                        },
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        },
    },
});
