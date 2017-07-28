"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BGL_1 = require("../BGL/BGL");
var env = require("../util/env");
var T1Player = (function () {
    function T1Player(name) {
        if (name === void 0) { name = "default"; }
        this.BGL = new BGL_1.BGL();
        this.name = (env.isNode) ? name
            : magikcraft.io.getSender().getName();
    }
    T1Player.prototype.eatFood = function (food, portions) {
        if (portions === void 0) { portions = 1; }
        for (var i = 0; i < portions; i++) {
            food.eat(this);
        }
    };
    T1Player.prototype.takeInsulin = function (insulin, amount) {
        insulin.take(amount, this);
    };
    return T1Player;
}());
exports.T1Player = T1Player;
