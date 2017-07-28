"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require("./env");
exports.log = (env.isNode) ? console.log
    : magikcraft.io.dixit;
