import {ComponentType} from './Components';

export type Component<T extends ComponentType> = {
    Type: T;
}