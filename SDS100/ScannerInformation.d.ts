import {StringBool} from '../Base/Uniden';
import {Component} from '../Base/Components/Component';
import {Avoidable} from '../Base/Avoidable';
import {Holdable} from '../Base/Holdable';
import {TypeEntry} from '../Base/TypeEntry';
import {Modulation} from '../Base/Types/Modulation';
import {P25Status} from '../Base/Types/P25Status';
import {LedColor} from '../Base/Types/LedColor';
import {SearchMode} from "./SearchMode";
import {ScanMode} from "./ScanMode";
import {Signal} from "../Base/Types/Signal";

export type ScannerMode = "Scan Mode"
    | "Scan Hold"
    | "Tone-Out"
    | "Custom Search"
    | "Custom Search Hold"
    | "Quick Search"
    | "Quick Search Hold"
    | "Service Scan"
    | "Service Scan Hold"
    | "Trunk Scan"
    | "Trunk Scan Hold"
    | "Close Call Only"
    | "Close Call"
    | "Menu tree";

export type ScannerScreen = "plain_text"
    | "conventional_scan"
    | "trunk_scan"
    | "custom_with_scan"
    | "cchits_with_scan"
    | "custom_search"
    | "quick_search"
    | "close_call"
    | "cc_searching"
    | "tone_out"
    | "wx_alert"
    | "discovery_conventional"
    | "discovery_trunking"
    | "reverse_frequency"
    | "repeater_find"
    | "direct_entry"
    | "menu_selection"
    | "menu_input"
    | "analyze_system_status"
    | "analyze";

export type ScannerInfo = Partial<ScanMode> & Partial<SearchMode> & {
    Property?: Property;
    // Menu tree
    MenuSummary?: MenuSummary;
    ViewDescription: Array<Component<any>>;
    Mode: ScannerMode
    V_Screen: ScannerScreen;
}

export type MenuSummary = {
    index: string; // suddenly lowercase
    name: string;
}

export type Frequency = TypeEntry & Avoidable & Holdable & {
    Freq: string;
    Mod: Modulation;
    IFX: StringBool;
    RecSlot: string;
    SAD: string;
    TGID: string;
    U_Id: string;
}

export type ConvFrequency = Frequency & {
    N_Tag: string;
    SvcType: string;
    P_Ch: StringBool;
    SAS: string;
    LVL: string;
}

export type Department = TypeEntry & Avoidable & Holdable & {
    Q_Key: string;
}

export type DualWatch = {
    PRI: "Off" | "DND" | "Priority";
    CC: "Off" | "DND" | "Priority";
    WX: "Off" | "Priority";
}

export type MonitorList = TypeEntry & {
    ListType: string;
    Q_Key: string;
    N_Tag: string;
    DB_Counter: string;
}

export type Property = {
    F: StringBool;
    VOL: string;
    SQL: string;
    Sig: Signal;
    Att: string;
    Rec: string;
    KeyLock: string;
    P25Status: P25Status;
    /** Whether someone is talking on a frequency */
    Mute: "Unmute" | "Mute";
    Backlight: string;
    A_Led: LedColor;
    Dir: "Up" | "Down";
    Rssi: string;
}

export type System = TypeEntry & Avoidable & Holdable & {
    SystemType: string;
    Q_Key: string;
    N_Tag: string;
}

export type OverWrite = Component & {
    Text: string;
}