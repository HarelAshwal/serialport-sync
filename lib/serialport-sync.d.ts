import serialport = require('serialport');
import * as Collections from 'typescript-collections';
export declare class SerialPort {
    comPort: string;
    baudRate: number;
    showDebugData: boolean;
    myQueue: Collections.Queue<{}>;
    currentData: string;
    port: serialport;
    private isOpen;
    constructor(comPort: string, baudRate: number, showDebugData?: boolean);
    GetPendingLines(): number;
    IsOpen(): boolean;
    Open(): Promise<void>;
    READLINE_RETRY_COUNT: number;
    READLINE_RETRY_DELAY: number;
    LastLine: string;
    ReadLastLine(): string;
    ReadLine(ignoreEcho?: boolean): Promise<string>;
    WriteLine(data: string): Promise<number>;
    CloseAndTest(): Promise<void>;
    Close(): Promise<void>;
    Write(data: string): void;
    Query(data: any, delayAfterWrite: any): Promise<string>;
    Delay(milliseconds: number): Promise<void>;
    ShowExisting(): string;
    ReadExisting(addNewLine?: boolean): Promise<string>;
}
