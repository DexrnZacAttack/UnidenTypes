export type Mode = ""

export interface Line {
	string: string;
	mode: Mode;
}

export interface Status {
	form: number;
	lines: Array<Line>;
	reserved: Array<string>;
}