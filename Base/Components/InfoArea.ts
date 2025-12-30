import {Component} from './Component';
import {ComponentType} from "./Components";

export type InfoArea<T extends (ComponentType.InfoArea1 | ComponentType.InfoArea2 | ComponentType.InfoArea3)> = Component<T> & {
    Text: string;
}

export type InfoArea1 = InfoArea<ComponentType.InfoArea1>;
export type InfoArea2 = InfoArea<ComponentType.InfoArea2>;
export type InfoArea3 = InfoArea<ComponentType.InfoArea3>;