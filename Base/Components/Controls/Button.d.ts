import { Component } from '../Component';
import {ComponentType} from "../Components";

export type Button = Component<ComponentType.Button> & {
	Text: string;
	KeyCode: string;
}