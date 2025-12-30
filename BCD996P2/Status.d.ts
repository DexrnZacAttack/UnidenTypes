import {Mode} from '../Base/Mode';
import {IntegerBool} from "../Base/Uniden";
import {LedColor} from "../Base/Types/LedColor";
import {Signal} from "../Base/Types/Signal";

export interface Line {
    string: string;
    mode: Array<Mode>;
}

export enum DisplayBrightness {
    Off = "0",
    Low = "1",
    Middle = "2",
    High = "3",
}

export type WeatherAlertStatus = IntegerBool | "$$$";

export interface Status {
    form: string;
    lines: Array<Line>;
    squelchState: IntegerBool;
    mute: IntegerBool;
    reserved: "0";
    wat: WeatherAlertStatus;
    ccLed: IntegerBool;
    alertLed: IntegerBool;
    signal: Signal;
    displayColor: LedColor;
    displayBrightness: DisplayBrightness;
}