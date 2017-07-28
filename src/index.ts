magikcraft.io.dixit('MCT1 loading...');
import { log } from './util/log';
import { BGLBarGlucoseMonitor } from './GlucoseMonitor/BGLBarGlucoseMonitor/BGLBarGlucoseMonitor';
import { mct1 } from './util/mct1';
import { T1Player } from './Player/T1Player';
import { Carbohydrate } from './Carbs/Carbohydrate';
import { Insulin } from './Insulin/Insulin';
import { bar, color, style } from 'magikcraft-lore-ui-bar';

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
    setBloodGlucoseLevel,
    getBloodGlucoseLevel,
    consumeApple,
    updateBar,
    takeInsulin,
    test
}

function query() {
    log(`BGL: ${mct1.T1Player.BGL.getBGL}`);
}

function getBloodGlucoseLevel(){
    log(`BGL is ` + mct1.T1Player.BGL.getBGL());
}

function setBloodGlucoseLevel(player){
    mct1.T1Player.BGL.setBGL(3);
    log(`BGL set to ` + mct1.T1Player.BGL.getBGL());
}

//const { bar, color, style } = require('magikcraft-lore-ui-bar');

const magik = magikcraft.io;
const setTimeout = magik.setTimeout;

function test() {
    const b = bar()
        .text("Hello")
        .color(color.GREEN)
        .style(style.NOTCHED_10)
        .progress(50)
        .show();

    // Change color
    setTimeout(() => b.color(color.RED), 2000);

    // Change progress
    setTimeout(() => b.progress(70), 4000);

    // Change message, color, and progress
    setTimeout(() => b.text("Goodbye").progress(65).color(color.PURPLE),
    6000);

    // Remove bar
    setTimeout(() => b.destroy(), 8000);
}

function updateBar(){
    mct1.BGLBar.monitor();
}

function consumeApple(){
    const apple = new Carbohydrate(16, 38, 6);
    mct1.T1Player.eatFood(apple, 1);
}

function takeInsulin(){
    log('Taking insulin...');
    let insulinDose = new Insulin(10, 100, 50, true);
    mct1.T1Player.takeInsulin(insulinDose, 1);
    log('Administered dose of Insulin');
}

function initialise(callback?: () => void) {
    log('Initialising...');
    const player = new T1Player();
    mct1.BGLBar = new BGLBarGlucoseMonitor(player, 1000);

    mct1.T1Player = player;
    mct1.initialised = true;
    mct1.running = true;
    callback && callback();
}   