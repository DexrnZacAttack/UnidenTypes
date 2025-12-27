import { Footer } from './Controls/Footer';
import { PlainText } from './Controls/PlainText';
import { InfoArea } from './Controls/InfoArea';
import { PopupScreen } from './Container/PopupScreen';
import { Button } from './Controls/Button';
import { OverWrite } from '../../SDS100/ScannerInformation';
import { MenuItem } from './Controls/Menu/MenuItem';
import { MenuErrorMsg } from './Controls/Menu/MenuErrorMsg';
import { MenuInput } from './Controls/Menu/MenuInput';
import { MenuInfo } from '../../SDS100/MenuInformation';

export enum ComponentType {
	Footer = "Footer",
	PlainText = "PlainText",
	InfoArea1 = "InfoArea1",
	InfoArea2 = "InfoArea2",
	PopupScreen = "PopupScreen",
	Button = "Button",
	OverWrite = "OverWrite",
	MSI = "MSI",
	MenuItem = "MenuItem",
	MenuErrorMsg = "MenuErrorMsg",
	MenuInput = "MenuInput",
}

export type Components = {
	Footer: Footer,
	PlainText: PlainText,
	InfoArea1: InfoArea,
	InfoArea2: InfoArea,
	PopupScreen: PopupScreen,
	Button: Button,
	OverWrite: OverWrite,
	MSI: MenuInfo,
	MenuItem: MenuItem,
	MenuErrorMsg: MenuErrorMsg,
	MenuInput: MenuInput
}