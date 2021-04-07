"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
var inversify_koa_utils_1 = require("inversify-koa-utils");
require("reflect-metadata");
require("./ioc/loader");
var bodyParser = require("koa-bodyparser");
var logger_1 = require("./middlewares/logger");
// koa - bodyparser没有处理文件上传的功能，而koa - better - body处理了文件上传功能
// koa - bodyparserh会将请求体挂载在ctx.request.body，而koa - better - body将请求体挂载在ctx.request.fields
var container = new inversify_1.Container();
container.load(inversify_binding_decorators_1.buildProviderModule());
var server = new inversify_koa_utils_1.InversifyKoaServer(container);
server.setConfig(function (app) {
    // add body parser
    app.use(bodyParser());
    app.use(logger_1.handleLogger);
});
var app = server.build();
app.listen(3000, function () {
    console.log('InversifyKoaServer 启动成功！');
});
