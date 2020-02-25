"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, id, account) {
        if (account === void 0) { account = null; }
        this.name = name;
        this.id = id;
        this.account = account;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getAccount = function () {
        return this.account;
    };
    return User;
}());
exports.User = User;
