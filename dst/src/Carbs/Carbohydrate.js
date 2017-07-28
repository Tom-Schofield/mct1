"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timer_1 = require("../util/timer");
var Carbohydrate = (function () {
    function Carbohydrate(grams, glycemicIndex, glycemicLoad) {
        this.grams = grams;
        this.glycemicIndex = glycemicIndex;
        this.glycemicLoad = glycemicLoad;
    }
    Carbohydrate.prototype.digest = function () {
        // do Digestion
        // Convert some grams to bgl
        var digestedGlucose = Math.min(1 * this.grams * this.glycemicIndex);
        // decrement grams
        // impact player BGL
        this.player.BGL.applyBGLchange(digestedGlucose);
        // if grams <= 0; stop digestion
        if (this.grams <= 0) {
            clearInterval(this.digestionLoop);
        }
    };
    Carbohydrate.prototype.eat = function (player) {
        this.player = player;
        this.digestionLoop = timer_1.Interval.setInterval(this.digest, 1000);
    };
    return Carbohydrate;
}());
exports.Carbohydrate = Carbohydrate;
