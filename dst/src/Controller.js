"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("./util/log");
var mct1_1 = require("./util/mct1");
var Controller = (function () {
    function Controller() {
    }
    Controller.prototype.start = function () {
        log_1.log('Initiating MCT1 Game Loop');
        mct1_1.mct1.running = true;
    };
    Controller.prototype.stop = function () {
    };
    Controller.prototype.reset = function () {
    };
    Controller.prototype.version = function () {
        log_1.log(mct1_1.mct1.version);
    };
    return Controller;
}());
exports.Controller = Controller;
