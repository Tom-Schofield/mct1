"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectGlucoseMonitor_1 = require("./ConnectGlucoseMonitor");
var T1Player_1 = require("../Player/T1Player");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;
var player = new T1Player_1.T1Player('test');
var testConnectMonitor = new ConnectGlucoseMonitor_1.ConnectGlucoseMonitor(player, 1000, false);
test('the monitor does not start when autostart is false', function () {
    expect(testConnectMonitor.enabled).toBe(false);
});
test('the monitor starts and functions', function (done) {
    function callback() {
        expect(testConnectMonitor.enabled).toBe(true);
        done();
    }
    testConnectMonitor.start();
    setTimeout(function () { return callback(); }, 500);
});
