import {ConvFrequency, Department, DualWatch, MonitorList, System} from "./ScannerInformation";

export type ScanMode = {
    DualWatch:       DualWatch;
    MonitorList:     MonitorList;
    System:          System;
    Department:      Department;
    ConvFrequency:   ConvFrequency; // channel
}