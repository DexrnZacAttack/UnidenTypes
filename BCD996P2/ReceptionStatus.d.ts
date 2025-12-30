import {Modulation} from "../Base/Types/Modulation";
import {IntegerBool} from "../Base/Uniden";

// docs mention that the scanner can return this with all null fields, but we will not handle that here. It is up to the user to handle that.
// e.g. Partial<ReceptionStatus> or undefined for nullable
export type ReceptionStatus = {
    frequency: string; // can be tgid too
    modulation: Modulation;
    attenuation: IntegerBool;
    ctcss: string;
    systemName: string; // can be site or search name too
    groupName: string;
    channelName: string;
    squelchStatus: IntegerBool;
    mute: IntegerBool;
    systemTag: string;
    channelTag: string;
    p25Nac: string;
}