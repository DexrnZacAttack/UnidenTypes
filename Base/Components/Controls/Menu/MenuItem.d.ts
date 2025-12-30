import {Component} from '../../Component';
import {ComponentType} from "../../Components";

export type MenuItem = Component<ComponentType.MenuItem> & {
    Name: string;
    Index: string;
}