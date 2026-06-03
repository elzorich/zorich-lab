import { Clock, ClockOptions } from "./clock";

export class ExtendedClock extends Clock {
    private precision: number;

    constructor(options: ClockOptions, precision: number = 1000) {
        super(options)
        this.precision = precision
    }

    public start(): void {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision)
    }

    protected render(): void {
        super.render();
        if(this.element) {
            const ms = String(new Date().getMilliseconds()).padStart(3, '0');
            this.element.textContent += '.' + ms
        }
    }

}

