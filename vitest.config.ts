import { defineVitestConfig } from "@nuxt/test-utils/config";
import {resolve} from 'path';

export default defineVitestConfig({
    resolve: {
        alias: {
            'bun:test': resolve('./vitest.config.ts'),
        },
    },
    test: {
        environment: 'nuxt',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html', 'lcov'],
            reportsDirectory: './coverage'
        },
        fileParallelism: false
    },
    server: {
        watch: {
            ignored: [
                '**/.nuxt/**',
                '**/.output/**',
                '**/.data/**',
                '**/coverage/**'
            ],
        }
    }
});