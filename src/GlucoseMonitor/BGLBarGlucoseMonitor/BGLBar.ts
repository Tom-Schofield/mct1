import { BGL } from '../../BGL/BGL';

export interface IDependencies {
    Bars: BossBarAPI;
    sender: BukkitPlayer;
    textcomponent: TextComponent;
}

/**
 *
 * BGLBar creates a UI Bar to display the user's Blood Glucose Level
 *
 * Dependencies are injected to facilitate unit testing with mock objects
 *
 * The Bar progress is between 0 and 0.99, so it needs to be scaled wrt
 * the BGL, which is represented internally as mmol/L
 *
 * @class BGLBar
 */
export class BGLBar {

    public bar: BossBar;
    public Bars: BossBarAPI;
    private BGL: BGL;

    constructor(BGL: BGL, deps: IDependencies) {
        const { Bars, sender, textcomponent } = deps;
        this.Bars = Bars;
        this.BGL = BGL;
        this.bar = Bars.addBar(sender,
            textcomponent("BGL"),
            Bars.Color.RED,
            Bars.Style.NOTCHED_20,
            0.0 // Progress (0.0 - 1.0)
        );
    }

    makeBarGreen() {
        this.bar.setColor(this.Bars.Color.GREEN);
    }

    makeBarRed() {
        this.bar.setColor(this.Bars.Color.RED);
    }

    update() {
        const bgl = this.BGL.getBGL();
        // Bar progress is 0 - 0.99
        const scaledBGL = Math.max(bgl/30, 0.99);
        this.bar.setProgress(scaledBGL);
        if (this.BGL.BGLinRange) {
            this.makeBarGreen();
        } else {
            this.makeBarRed();
        }
    }
}