import type { ComputedPlacement } from '@popperjs/core';
import type { DatePickerProps } from './props';
export declare type DatePickerPlacementType = ComputedPlacement;
export declare type DatePickerTypeType = 'year' | 'month' | 'date' | 'daterange' | 'datetime' | 'datetimerange';
export declare type TimePickerTypeType = 'time' | 'timerange';
export declare type PickerTypeType = DatePickerTypeType | TimePickerTypeType;
export interface IDatePickerShortcut {
    text: string;
    value?: () => Date[];
    onClick?: (picker: any) => void;
}
export declare type DatePickerShortcutsType = IDatePickerShortcut[];
declare type ValueType = Date | string | number;
export declare type DatePickerValueType = ValueType | [ValueType, ValueType];
export declare type DisabledDateType = (date: number | Date) => boolean;
export interface IDatePickerCtx {
    props: DatePickerProps;
    focus: () => void;
}
export interface ITimePickerCtx {
    parentName: string;
    panelDate?: Date | string | number;
    dates?: ValueType | [ValueType, ValueType];
}
export declare type DatePickerPanelType = 'DateRangePanel' | 'DatePanel' | 'RangeTimePickerPanel' | 'TimePickerPanel';
export declare type SelectionModeType = 'year' | 'month' | 'date' | 'time';
export interface IDisabledHMS {
    disabledHours?: number[];
    disabledMinutes?: number[];
    disabledSeconds?: number[];
}
export {};
