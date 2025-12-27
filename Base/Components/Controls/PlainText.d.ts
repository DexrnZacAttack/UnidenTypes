import { Component } from '../Component';
import {ComponentType} from "../Components";

export type PlainText = Component<ComponentType.PlainText> & {
	Text?: string;
}