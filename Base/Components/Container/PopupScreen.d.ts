import {ComponentContainer} from './ComponentContainer';
import {ComponentType} from "../Components";

export interface PopupScreen extends ComponentContainer<ComponentType.PopupScreen> {
    Text: string;
}