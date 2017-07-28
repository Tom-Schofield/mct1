"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = require("./env");
var _mct1;
if (env_1.isNode) {
    _mct1 = {};
}
else {
    _mct1 = magikcraft.io.global('mct1');
}
exports.mct1 = _mct1;
