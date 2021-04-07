"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var path_1 = require("path");
var config = {
    viewDir: path_1.join(__dirname, '..', 'views'),
    staticDir: path_1.join(__dirname, '..', 'assets'),
};
if (process.env.NODE_ENV === 'development') {
    var localConfig = {
        port: 8080,
        memoryFlag: false,
        proxyHost: 'http://127.0.0.1:8081/'
    };
    config = lodash_1.extend(config, localConfig);
}
if (process.env.NODE_ENV === 'production') {
    var prodConfig = {
        port: 80,
        memoryFlag: 'memory',
        proxyHost: 'http://127.0.0.1:8082/'
    };
    config = lodash_1.extend(config, prodConfig);
}
exports.default = config;
