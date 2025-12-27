import { Component } from '../Component';
import {ComponentType} from "../Components";

// todo infoarea 1-2 extend InfoArea and Component
export type InfoArea = Component<ComponentType.InfoArea1> & {
	Text: string;
}