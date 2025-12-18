import { Component } from './Component';

export interface ComponentContainer extends Component {
	Children: Array<Component>
}