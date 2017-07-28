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
var GlucoseMonitor_1 = require("./GlucoseMonitor");
var ConnectGlucoseMonitor = (function (_super) {
    __extends(ConnectGlucoseMonitor, _super);
    function ConnectGlucoseMonitor(player, sampleRate, autostart) {
        return _super.call(this, player, sampleRate, autostart) || this;
    }
    /**
     * The monitor event is called every {sampleRate} milliseconds
     *
     * @param {BGL} BGL
     * @memberof ConnectGlucoseMonitor
     */
    ConnectGlucoseMonitor.prototype.monitor = function (BGL) {
        var minecraftPlayername = this.player.name;
        // The current BGL Value in mmol/L:
        var bgl = BGL.getBGL();
        // HTTP Post this data somewhere
        //http.post();
    };
    return ConnectGlucoseMonitor;
}(GlucoseMonitor_1.GlucoseMonitor));
exports.ConnectGlucoseMonitor = ConnectGlucoseMonitor;
