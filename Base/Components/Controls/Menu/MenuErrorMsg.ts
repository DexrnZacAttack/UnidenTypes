import {Component} from '../../Component';
import {ComponentType} from "../../Components";

export type MenuErrorMsg = Component<ComponentType.MenuErrorMsg> & {
    Text: string;
    ScanButton: string; // bool (1/0)
}