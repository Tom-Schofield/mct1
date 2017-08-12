"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
magikcraft.io.dixit('MCT1 loading...');
var log_1 = require("./util/log");
var BGLBarGlucoseMonitor_1 = require("./GlucoseMonitor/BGLBarGlucoseMonitor/BGLBarGlucoseMonitor");
var mct1_1 = require("./util/mct1");
var T1Player_1 = require("./Player/T1Player");
mct1_1.mct1.version = '1.3.0';
log_1.log("MCT1 version " + mct1_1.mct1.version);
function _default() {
    if (!mct1_1.mct1.initialised) {
        initialise();
    }
}
/**
 * MGK-006-compliant interface
 * See: https://github.com/Magikcraft/product-board/issues/6
 */
exports.spells = {
    _default: _default,
    query: query
};
function query() {
    log_1.log("BGL: " + mct1_1.mct1.T1Player.BGL.getBGL);
}
function initialise(callback) {
    log_1.log('Initialising...');
    var player = new T1Player_1.T1Player();
    mct1_1.mct1.BGLBar = new BGLBarGlucoseMonitor_1.BGLBarGlucoseMonitor(player, 1000);
    mct1_1.mct1.T1Player = player;
    mct1_1.mct1.initialised = true;
    mct1_1.mct1.running = false;
    callback && callback();
}
