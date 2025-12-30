import {ComponentContainer} from '../Base/Components/Container/ComponentContainer';
import {ComponentType} from "../Base/Components/Components";

export interface MenuInfo extends ComponentContainer<ComponentType.MSI> {
    Name?: string;
    Index?: string;
    MenuType?: string;
    Value?: string;
    Selected?: string;
}