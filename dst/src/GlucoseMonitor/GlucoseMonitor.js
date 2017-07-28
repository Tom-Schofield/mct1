"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timer_1 = require("../util/timer");
var GlucoseMonitor = (function () {
    function GlucoseMonitor(player, sampleRate, autostart) {
        if (sampleRate === void 0) { sampleRate = 1000; }
        if (autostart === void 0) { autostart = true; }
        this.player = player;
        this.sampleRate = sampleRate;
        this._enabled = autostart;
    }
    Object.defineProperty(GlucoseMonitor.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (nowEnabled) {
            var _this = this;
            if (nowEnabled === this._enabled) {
                // No state change
                return;
            }
            this._enabled = nowEnabled;
            if (nowEnabled) {
                if (this.monitor) {
                    this.loop = timer_1.Interval.setInterval(function () { return _this.monitor(_this.player.BGL); }, this.sampleRate);
                    return;
                }
            }
            else {
                timer_1.Interval.clearInterval(this.loop);
            }
        },
        enumerable: true,
        configurable: true
    });
    GlucoseMonitor.prototype.start = function () {
        this.enabled = true;
    };
    GlucoseMonitor.prototype.stop = function () {
        this.enabled = false;
    };
    return GlucoseMonitor;
}());
exports.GlucoseMonitor = GlucoseMonitor;
