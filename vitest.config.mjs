"use strict";
exports.__esModule = true;
var config_1 = require("vitest/config");
exports["default"] = (0, config_1.defineConfig)({
    test: {
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: ['src/types/*.ts', 'vitest.config.mts']
        },
        environment: 'node'
    }
});
