magikcraft.io.dixit('MCT1 loading...');
import { log } from './util/log';
import { BGLBarGlucoseMonitor } from './GlucoseMonitor/BGLBarGlucoseMonitor/BGLBarGlucoseMonitor';
import { mct1 } from './util/mct1';
import { T1Player } from './Player/T1Player';

mct1.version = '1.3.0';
log(`MCT1 version ${mct1.version}`);
log(`This is a test`);

function _default() {
    if (!mct1.initialised) {
        initialise();
    }
}

/**
 * MGK-006-compliant interface
 * See: https://github.com/Magikcraft/product-board/issues/6
 */
export const spells = {
    _default,
    query,
    setBloodGlucoseLevel
}

function query() {
    log(`BGL: ${mct1.T1Player.BGL.getBGL}`);
}

function setBloodGlucoseLevel(){
    mct1.T1Player.BGL.setBGL(0.5);
    log(`BGL set to` + mct1.T1Player.BGL.getBGL);
}

function initialise(callback?: () => void) {
    log('Initialising...');
    const player = new T1Player();
    mct1.BGLBar = new BGLBarGlucoseMonitor(player, 1000);
    mct1.T1Player = player;
    mct1.initialised = true;
    mct1.running = false;
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