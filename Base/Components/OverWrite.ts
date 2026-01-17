import {Component} from "./Component";
import {ComponentType} from "./Components";

export type OverWrite = Component<ComponentType.OverWrite> & {
	Text: string;
}