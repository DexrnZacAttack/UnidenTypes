export enum StatusForms {
	SimpleMode = 0b00110110110000,
	DetailMode = 0b00001010100000000,
	OtherMode = 0b00001110000000000, // set search/cc mode, set weather mode, set tone out mode
	MenuSelection = 0b1111111111,
}