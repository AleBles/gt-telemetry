const prefix: string[] =  [
    ' %c %c %c GT Telemetry %c %c %c ',
    'background: #278CEB',
    'background: #006db6',
    'color: #fff; ' +
    'background: #001c4a;',
    'background: #006db6',
    'background: #278CEB', ''];

class Logger {
    private debug: boolean = false;

    public log(...data: any[]): void {
        if (!this.debug) {
            return;
        }

        console.log.apply(console, prefix.concat(...data));
    }

    public setDebug(dbg: boolean = false): boolean {
        return (this.debug = dbg);
    }
}

export default new Logger();