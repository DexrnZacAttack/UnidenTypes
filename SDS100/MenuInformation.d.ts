import { MenuItem } from '../Base/Components/MenuItem';
import { Footer } from '../Base/Components/Footer';

export interface MenuInfo {
	Name: string;
	Index: string;
	MenuType: string;
	Value: string;
	Selected: string;
	Children: Array<MenuItem | Footer>
}