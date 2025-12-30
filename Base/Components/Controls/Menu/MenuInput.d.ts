import {Component} from '../../Component';
import {ComponentType} from "../../Components";

export type MenuInput = Component<ComponentType.MenuInput> & {
    AddedInformation: string;
    EnableKeys: string; // string containing all allowed chars
    MaxLength: string;
}