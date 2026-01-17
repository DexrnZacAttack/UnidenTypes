import {ComponentContainer} from '../Base/Components/Container/ComponentContainer';
import {ComponentType} from "../Base/Components/Components";

export type MenuType = "TypeLocation" | "TypeSelect" | "TypeInput" | "TypeError";

export interface MenuInfo extends ComponentContainer<ComponentType.MSI> {
    Name?: string;
    Index?: string;
    MenuType?: MenuType;
    Value?: string;
    Selected?: string;
}