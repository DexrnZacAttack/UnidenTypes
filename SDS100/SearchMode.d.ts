import {Modulation} from "../Base/Types/Modulation";
import {DualWatch, Frequency} from "./ScannerInformation";

export type SearchBanks = {
    BankNo: string;
    BankStatus: string;
    Index: string;
    Name: string;
}

export type SearchRange = {
    Lower: string;
    Upper: string;
    Mod: Modulation;
    Step: string;
}

export type SrchFrequency = Frequency;

export type SearchMode = {
    DualWatch: DualWatch;
    SearchBanks: SearchBanks;
    SearchRange: SearchRange;
    SrchFrequency: SrchFrequency;
}