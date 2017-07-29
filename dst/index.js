"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
magikcraft.io.dixit('MCT1 loading...');
var log_1 = require("./util/log");
var BGLBarGlucoseMonitor_1 = require("./GlucoseMonitor/BGLBarGlucoseMonitor/BGLBarGlucoseMonitor");
var mct1_1 = require("./util/mct1");
var T1Player_1 = require("./Player/T1Player");
var Carbohydrate_1 = require("./Carbs/Carbohydrate");
var Insulin_1 = require("./Insulin/Insulin");
var magikcraft_lore_ui_bar_1 = require("magikcraft-lore-ui-bar");
mct1_1.mct1.version = '1.3.0';
log_1.log("MCT1 version " + mct1_1.mct1.version);
log_1.log("This is a test");
var magik = magikcraft.io;
var setTimeout = magik.setTimeout;
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
    query: query,
    setBloodGlucoseLevel: setBloodGlucoseLevel,
    getBloodGlucoseLevel: getBloodGlucoseLevel,
    consumeApple: consumeApple,
    updateBar: updateBar,
    takeInsulin: takeInsulin,
    test: test,
    getArgs: getArgs
};
function query() {
    log_1.log("BGL: " + mct1_1.mct1.T1Player.BGL.getBGL);
}
function getBloodGlucoseLevel() {
    log_1.log("BGL is " + mct1_1.mct1.T1Player.BGL.getBGL());
}
function setBloodGlucoseLevel(player) {
    mct1_1.mct1.T1Player.BGL.setBGL(3);
    log_1.log("BGL set to " + mct1_1.mct1.T1Player.BGL.getBGL());
}
function getArgs(arg1, arg2, arg3) {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        log_1.log(i + "");
    }
}
function test() {
    var b = magikcraft_lore_ui_bar_1.bar()
        .text("Hello")
        .color(magikcraft_lore_ui_bar_1.color.GREEN)
        .style(magikcraft_lore_ui_bar_1.style.NOTCHED_10)
        .progress(50)
        .show();
    // Change color
    setTimeout(function () { return b.color(magikcraft_lore_ui_bar_1.color.RED); }, 2000);
    // Change progress
    setTimeout(function () { return b.progress(70); }, 4000);
    // Change message, color, and progress
    setTimeout(function () { return b.text("Goodbye").progress(65).color(magikcraft_lore_ui_bar_1.color.PURPLE); }, 6000);
    // Remove bar
    setTimeout(function () { return b.destroy(); }, 8000);
}
/*
 * Creates a BGL and sets it to the current players BGL level
 */
function createBGLBar(bgl) {
    var b = magikcraft_lore_ui_bar_1.bar()
        .text("BGL " + bgl)
        .color(magikcraft_lore_ui_bar_1.color.GREEN)
        .style(magikcraft_lore_ui_bar_1.style.NOTCHED_10)
        .progress(50)
        .show();
    return b;
}
/*
 * Function for updating BGL bar
 */
function updateBar(bar, player) {
    bar.text = "BGL " + player.BGL.getBGL;
}
function consumeApple() {
    var apple = new Carbohydrate_1.Carbohydrate(16, 38, 6);
    mct1_1.mct1.T1Player.eatFood(apple, 1);
}
function takeInsulin() {
    log_1.log('Taking insulin...');
    var insulinDose = new Insulin_1.Insulin(10, 100, 50, true);
    mct1_1.mct1.T1Player.takeInsulin(insulinDose, 1);
    log_1.log('Administered dose of Insulin');
}
function initialise(callback) {
    log_1.log('Initialising...');
    var player = new T1Player_1.T1Player();
    mct1_1.mct1.BGLBar = new BGLBarGlucoseMonitor_1.BGLBarGlucoseMonitor(player, 1000);
    var bar = createBGLBar(player.BGL.getBGLmmolL());
    // Set the BGL bar to periodically update every 200ms
    setInterval(function () { updateBar(bar, player); }, 6000);
    mct1_1.mct1.T1Player = player;
    mct1_1.mct1.initialised = true;
    mct1_1.mct1.running = true;
    callback && callback();
}
