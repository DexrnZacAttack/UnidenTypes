import {Component} from '../../Component';
import {ComponentType} from "../../Components";
import {IntegerBool} from "../../../Uniden";

export type MenuErrorMsg = Component<ComponentType.MenuErrorMsg> & {
    Text: string;
    ScanButton: IntegerBool; // bool (1/0)
}