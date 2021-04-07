"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexService = void 0;
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
var tags_1 = require("../constant/tags");
var IndexService = /** @class */ (function () {
    function IndexService() {
        this.userStorage = [{
                email: '1231@qq.com',
                name: '小明'
            }, {
                email: '2131231@qq.com',
                name: '小w'
            }];
    }
    IndexService.prototype.getUser = function (id) {
        var result;
        result = this.userStorage[id];
        return result;
    };
    IndexService.prototype.addUser = function (user) {
        this.userStorage.push(user);
    };
    IndexService = __decorate([
        inversify_binding_decorators_1.provide(tags_1.default.IndexService)
    ], IndexService);
    return IndexService;
}());
exports.IndexService = IndexService;
