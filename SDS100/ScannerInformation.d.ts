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

export type SystemType = "Conventional" | "Motorola" | "EDACS" | "LTR" | "P25 Trunk" | "P25 One Frequency" | "MotoTRBO Trunk" | "DMR One Frequency" | "NXDN Trunk" | "NXDN One Frequency";

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

export type System = TypeEntry & Avoidable & Holdable & {
	SystemType: SystemType;
	Q_Key: string;
	N_Tag: string;
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

export type PortableProperties = {
	/** Current battery voltage
	 *
	 * Value is a floating point string
	 * 
	 * @idealType `number`
	 */
	Battery?: string; // float voltage string
	WiFi?: string; // Off, 0-3, or "AP"? Maybe AP means hooked through ethernet.
}

export type Direction = "Up" | "Down";

export type Property = Partial<PortableProperties> & {
    F: StringBool;
	/** Volume
	 * 
	 * @idealType `number`
	 */
    VOL: string;
	/** Squelch 
	 * 
	 * @idealType `number`
	 */
    SQL: string;
	/** Signal of the current talking frequency
	 * 
	 * @idealType `number`
	 */
    Sig: Signal;
    Att: string;
    Rec: StringBool;
    KeyLock: StringBool;
    P25Status: P25Status;
    /** Whether someone is talking on a frequency
	 * 
	 * @idealType `boolean` 
	 */
    Mute: "Unmute" | "Mute";
	/** Backlight brightness
	 * 
	 * @idealType `number`
	 */
    Backlight: string;
    A_Led: LedColor;
	/** Scan direction */
    Dir: Direction;
	/** RSSI
	 * 
	 * @idealType `number`
	 */
    Rssi: string;
}