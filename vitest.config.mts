import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: ['src/types/*.ts', 'vitest.config.mts']
        },
        environment: 'node'
    },
})