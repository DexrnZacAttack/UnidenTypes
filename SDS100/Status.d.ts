import { Mode } from '../Base/Mode';

export interface Line {
	string: string;
	mode: Array<Mode>;
}

export interface Status {
	form: number;
	lines: Array<Line>;
	reserved: Array<string>;
}