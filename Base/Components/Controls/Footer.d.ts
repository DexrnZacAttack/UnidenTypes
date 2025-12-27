import { Component } from '../Component';
import {ComponentType} from "../Components";

export type Footer = Component<ComponentType.Footer> & {
	No: string;
	EOT: string;
}