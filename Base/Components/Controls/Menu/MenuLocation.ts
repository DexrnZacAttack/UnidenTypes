import {MenuInput} from "./MenuInput";
import {ComponentType} from "../../Components";
import {Component} from "../../Component";
import {IntegerBool} from "../../../Uniden";

export type MenuLocation = Omit<MenuInput, keyof Component<ComponentType.MenuInput>> & Component<ComponentType.MenuLocation> & {
	IsLatitude: IntegerBool
}