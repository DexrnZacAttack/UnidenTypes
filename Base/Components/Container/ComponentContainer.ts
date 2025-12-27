import { Component } from '../Component';
import {ComponentType} from "../Components";

export interface ComponentContainer<T extends ComponentType> extends Component<T> {
	Children?: Array<Component<any>>
}