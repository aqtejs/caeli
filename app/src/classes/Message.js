"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(content, from, to) {
        if (to === void 0) { to = null; }
        this.from = from;
        this.content = content;
        this.to = to;
    }
    return Message;
}());
exports.Message = Message;
