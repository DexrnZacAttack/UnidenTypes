import {Footer} from './Footer';
import {PlainText} from './PlainText';
import {InfoArea1, InfoArea2, InfoArea3} from './InfoArea';
import {PopupScreen} from './Container/PopupScreen';
import {Button} from './Controls/Button';
import {OverWrite} from './OverWrite';
import {MenuItem} from './Controls/Menu/MenuItem';
import {MenuErrorMsg} from './Controls/Menu/MenuErrorMsg';
import {MenuInput} from './Controls/Menu/MenuInput';
import {MenuInfo} from '../../SDS100/MenuInformation';
import {MenuLocation} from "./Controls/Menu/MenuLocation";

export enum ComponentType {
    Footer = "Footer",
    PlainText = "PlainText",
    InfoArea1 = "InfoArea1",
    InfoArea2 = "InfoArea2",
    InfoArea3 = "InfoArea3",
    PopupScreen = "PopupScreen",
    Button = "Button",
    OverWrite = "OverWrite",
    MSI = "MSI",
    MenuItem = "MenuItem",
    MenuErrorMsg = "MenuErrorMsg",
    MenuInput = "MenuInput",
	MenuLocation = "MenuLocation",
}

export type Components = {
    Footer: Footer,
    PlainText: PlainText,
    InfoArea1: InfoArea1,
    InfoArea2: InfoArea2,
    InfoArea3: InfoArea3,
    PopupScreen: PopupScreen,
    Button: Button,
    OverWrite: OverWrite,
    MSI: MenuInfo,
    MenuItem: MenuItem,
    MenuErrorMsg: MenuErrorMsg,
    MenuInput: MenuInput,
	MenuLocation: MenuLocation,
}