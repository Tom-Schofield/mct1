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
var T1Player_1 = require("../Player/T1Player");
var GlucoseMonitor_1 = require("./GlucoseMonitor");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;
var TestMonitor = (function (_super) {
    __extends(TestMonitor, _super);
    function TestMonitor(player, sampleRate, enabled) {
        var _this = _super.call(this, player, sampleRate, enabled) || this;
        _this.count = 0;
        return _this;
    }
    TestMonitor.prototype.monitor = function (BGL) {
        this.count++;
    };
    return TestMonitor;
}(GlucoseMonitor_1.GlucoseMonitor));
var player = new T1Player_1.T1Player('test');
var testMonitor = new TestMonitor(player, 1000, false);
test('the monitor does not start when autostart is false', function () {
    expect(testMonitor.enabled).toBe(false);
});
test('the monitor starts with a zero count', function () {
    expect(testMonitor.count).toBe(0);
});
test('the monitor starts and functions', function (done) {
    function callback() {
        expect(testMonitor.count).toBeGreaterThan(4);
        done();
    }
    testMonitor.start();
    setTimeout(function () { return callback(); }, 5500);
});
