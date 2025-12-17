import { UnidenBool } from '../Base/Uniden';
import { Component } from '../Base/Components/Component';

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

export type Avoid = "Avoid" | "T-Avoid" | "Off";
export type Modulation = "Auto" | "AM" | "NFM" | "FM" | "WFM" | "FMB";

export interface ScannerInfo {
	// Scan Mode
	MonitorList?:      MonitorList;
	System?:           System;
	Department?:       Department;
	ConvFrequency?:    ConvFrequency;
	DualWatch?:        DualWatch;
	Property?:         Property;
	// Menu tree
	MenuSummary?:     MenuSummary;
	ViewDescription:  Array<Component>;
	Mode:             ScannerMode
	V_Screen:         ScannerScreen;
}

export interface MenuSummary {
	index: string; // suddenly lowercase
	name: string;
}

export interface ConvFrequency {
	Name:    string;
	Index:   string;
	Avoid:   Avoid;
	Freq:    string;
	Mod:     Modulation;
	N_Tag:   string;
	Hold:    UnidenBool;
	SvcType: string;
	P_Ch:    UnidenBool;
	SAS:     string;
	SAD:     string;
	RecSlot: string;
	LVL:     string;
	IFX:     UnidenBool;
	TGID:    string;
	U_Id:    string;
}

export interface Department {
	Name:  string;
	Index: string;
	Avoid: Avoid;
	Q_Key: string;
	Hold:  UnidenBool;
}

export interface DualWatch {
	PRI: "Off" | "DND" | "Priority";
	CC:  "Off" | "DND" | "Priority";
	WX:  "Off" | "Priority";
}

export interface MonitorList {
	Name:       string;
	Index:      string;
	ListType:   string;
	Q_Key:      string;
	N_Tag:      string;
	DB_Counter: string;
}

export interface Property {
	F:         UnidenBool;
	VOL:       string;
	SQL:       string;
	Sig:       string;
	Att:       string;
	Rec:       string;
	KeyLock:   string;
	P25Status: "None" | "Data" | "P25" | "DMR" | "CAP" | "CON" | "DT3" | "XPT" | "NX9" | "NX4" | "ND9" | "ND4" | "IDS" | "NXD";
	/** Whether someone is talking on a frequency */
	Mute:      "Unmute" | "Mute";
	Backlight: string;
	A_Led:     "Off" | "Blue" | "Red" | "Magenta" | "Green" | "Cyan" | "Yellow" | "White";
	Dir:       "Up" | "Down";
	Rssi:      string;
}

export interface System {
	Name:       string;
	Index:      string;
	Avoid:      Avoid;
	SystemType: string;
	Q_Key:      string;
	N_Tag:      string;
	Hold:       UnidenBool;
}

export interface OverWrite {
	Text: string;
}