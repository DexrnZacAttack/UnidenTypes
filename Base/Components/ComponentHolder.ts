import { Component } from './Component';

export interface ComponentHolder extends Component {
	Children: Array<Component>
}