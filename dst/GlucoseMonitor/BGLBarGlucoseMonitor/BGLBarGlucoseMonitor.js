"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BGLBar_1 = require("./BGLBar");
var log_1 = require("../../util/log");
var GlucoseMonitor_1 = require("../GlucoseMonitor");
var BGLBarGlucoseMonitor = (function (_super) {
    __extends(BGLBarGlucoseMonitor, _super);
    function BGLBarGlucoseMonitor(player, sampleRate) {
        var _this = _super.call(this, player, sampleRate) || this;
        // Pass the player's BGL in to the bar, so the bar has access to its range alerts.
        _this.BGLBar = new BGLBar_1.BGLBar(_this.player.BGL, {
            Bars: magikcraft.io.Bars,
            sender: magikcraft.io.getSender(),
            textcomponent: magikcraft.io.TextComponent
        });
        return _this;
    }
    BGLBarGlucoseMonitor.prototype.monitor = function () {
        // We don't need to pass in the BGL value, because the bar has a reference to the player's BGL
        this.BGLBar.update();
        log_1.log('Monitor triggered');
    };
    return BGLBarGlucoseMonitor;
}(GlucoseMonitor_1.GlucoseMonitor));
exports.BGLBarGlucoseMonitor = BGLBarGlucoseMonitor;
