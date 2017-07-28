"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magik = magikcraft.io;
var EventPriority = magik.type("event.EventPriority");
var PlayerItemConsumeEvent = magik.type("event.player.PlayerItemConsumeEvent");
var PlayerQuitEvent = magik.type("event.player.PlayerQuitEvent");
var EventCallback = Java.type("io.magikcraft.EventCallback");
function events() {
    magik.getPlugin().registerEvent(PlayerItemConsumeEvent.class, EventPriority.MONITOR, true, new EventCallback({
        callback: function (event) {
            var username = event.player.playerListName;
            magik.dixit(event.ItemStack);
        }
    }));
}
exports.events = events;
