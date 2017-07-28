"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * BGLBar creates a UI Bar to display the user's Blood Glucose Level
 *
 * Dependencies are injected to facilitate unit testing with mock objects
 *
 * The Bar progress is between 0 and 0.99, so it needs to be scaled wrt
 * the BGL, which is represented internally as mmol/L
 *
 * @class BGLBar
 */
var Insulin = (function () {
    function Insulin(updateInterval, player, deps) {
        var _this = this;
        var Bars = deps.Bars, sender = deps.sender, textcomponent = deps.textcomponent;
        // Max 0.5s - 2s update interval
        this.updateInterval = Math.min(Math.max(2000, updateInterval), 500);
        this.player = player;
        this.bar = Bars.addBar(sender, textcomponent("Insulin"), Bars.Color.BLUE, Bars.Style.NOTCHED_20, 0.0 // Progress (0.0 - 1.0)
        );
        this.updateLoop = magikcraft.io.setInterval(function () {
            _this.update();
        }, updateInterval);
    }
    Insulin.prototype.makeBarGreen = function () {
        this.bar.setColor(this.Bars.Color.GREEN);
    };
    Insulin.prototype.makeBarRed = function () {
        this.bar.setColor(this.Bars.Color.RED);
    };
    Insulin.prototype.update = function () {
        var bgl = this.player.BGL.getBGL();
        // Bar progress is 0 - 0.99
        var scaledBGL = Math.max(bgl / 30, 0.99);
        this.bar.setProgress(scaledBGL);
        if (this.player.BGL.BGLinRange) {
            this.makeBarGreen();
        }
        else {
            this.makeBarRed();
        }
    };
    return Insulin;
}());
exports.Insulin = Insulin;
