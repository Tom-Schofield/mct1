import { log } from './util/log';
import { BGLBarGlucoseMonitor } from './GlucoseMonitor/BGLBarGlucoseMonitor/BGLBarGlucoseMonitor';
import { mct1 } from './util/mct1';
import { T1Player } from './Player/T1Player';

mct1.version = '1.3.0';
log(`MCT1 version ${mct1.version}`);
log(`This is a test...`);
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
    query
}

function query() {
    log(`BGL: ${mct1.T1Player.BGL.getBGL}`);
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