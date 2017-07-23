import { BGLBar } from './BGLBar';
import { T1Player } from '../../Player/T1Player';
import { log } from '../../util/log';
import { GlucoseMonitor } from '../GlucoseMonitor';

export class BGLBarGlucoseMonitor extends GlucoseMonitor {
    BGLBar: BGLBar;

    constructor(player: T1Player, sampleRate: number) {
        super(player, sampleRate);
        // Pass the player's BGL in to the bar, so the bar has access to its range alerts.
        this.BGLBar = new BGLBar(this.player.BGL, {
            Bars: magikcraft.io.Bars,
            sender: magikcraft.io.getSender(),
            textcomponent: magikcraft.io.TextComponent
        });
    }

    monitor() {
        // We don't need to pass in the BGL value, because the bar has a reference to the player's BGL
        this.BGLBar.update();
        log('Monitor triggered');
    }
}