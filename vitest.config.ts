import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './vitest.setup.ts',
    },
    resolve: {
        alias: [
            { find: /.*\.webp$/, replacement: path.resolve(__dirname, "./__mocks__/imageMock.ts") },
            { find: /.*\.png$/, replacement: path.resolve(__dirname, "./__mocks__/imageMock.ts") },
            { find: /.*\.jpg$/, replacement: path.resolve(__dirname, "./__mocks__/imageMock.ts") },
            { find: /.*\.svg$/, replacement: path.resolve(__dirname, "./__mocks__/imageMock.ts") },
            { find: "@", replacement: path.resolve(__dirname, "./") },
        ],
    },
})
