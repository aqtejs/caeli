"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Room = /** @class */ (function () {
    function Room(name, newUser) {
        if (newUser === void 0) { newUser = null; }
        this.name = name;
        if (newUser)
            this.users = __spreadArrays(this.users, [newUser]);
    }
    Room.prototype.addUser = function (newUser) {
        this.users = __spreadArrays(this.users, [newUser]);
    };
    return Room;
}());
exports.Room = Room;
