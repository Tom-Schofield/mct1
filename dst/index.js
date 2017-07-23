"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
magikcraft.io.dixit('MCT1 loading...');
var log_1 = require("./util/log");
var BGLBarGlucoseMonitor_1 = require("./GlucoseMonitor/BGLBarGlucoseMonitor/BGLBarGlucoseMonitor");
var mct1_1 = require("./util/mct1");
var T1Player_1 = require("./Player/T1Player");
mct1_1.mct1.version = '1.3.0';
log_1.log("MCT1 version " + mct1_1.mct1.version);
log_1.log("This is a test");
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
    setBloodGlucoseLevel: setBloodGlucoseLevel
};
function query() {
    log_1.log("BGL: " + mct1_1.mct1.T1Player.BGL.getBGL);
}
function setBloodGlucoseLevel() {
    log_1.log("test new spell");
    mct1_1.mct1.T1Player.BGL.setBGL(30);
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
// const magik = magikcraft.io;
// const PlayerItemConsumeEvent = Java.type("org.bukkit.event.player.PlayerItemConsumeEvent");
// const EventPriority = Java.type("org.bukkit.event.EventPriority");
// const EventCallback = Java.type("io.magikcraft.EventCallback");
// // Bind the user who created the event into a closure
// const me = magik.getSender().getName();
// magik.getPlugin().registerEvent(
//         PlayerItemConsumeEvent.class,
//         EventPriority.MONITOR,
//         true,
//         // This callback will be called from Java.
//         // hopefully the closure with the playername is available at that time. 
//         // If it's not, we'll need to write a Java method that takes the username.
//         new EventCallback({
//             callback: function (event) {
//                 const userWhoTriggeredEvent = event.getPlayer().getName();
//                 if (userWhoTriggeredEvent !== me) {
//                    return; // Early return because triggered by another player
//                 }
//                 const itemType = magik.getItem().getType();
//                 // ^ returns one of https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html
//                 event.setCancelled(true); // set true to cancel the server effect of this consumption
//                 log("I consumed " + itemType.toString()); // .toString() may not be necessary
//             }
//         })); 
