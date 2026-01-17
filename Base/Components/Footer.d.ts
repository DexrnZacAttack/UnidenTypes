import {Component} from './Component';
import {ComponentType} from "./Components";
import {IntegerBool} from "../Uniden";

export type Footer = Component<ComponentType.Footer> & {
    No: string;
    EOT: IntegerBool;
}