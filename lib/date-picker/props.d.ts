import type { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { DatePickerShortcutsType, DatePickerValueType, DisabledDateType, PickerTypeType } from './interface';
export declare const datePickerProps: {
    readonly type: {
        readonly type: PropType<PickerTypeType>;
        readonly default: "date";
        readonly validator: (value: any) => boolean;
    };
    readonly extPopoverCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly format: StringConstructor;
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly editable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly open: {
        readonly type: () => boolean | null;
        readonly default: any;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly timePickerOptions: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
    readonly splitPanels: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly startDate: DateConstructor;
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placement: {
        readonly type: PropType<import("@popperjs/core").ComputedPlacement>;
        readonly default: "bottom-start";
        readonly validator: (value: any) => boolean;
    };
    readonly transfer: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shortcuts: {
        readonly type: PropType<DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    readonly shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly modelValue: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly value: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly fontSize: {
        readonly type: PropType<"normal" | "large" | "medium">;
        readonly default: "normal";
    };
    readonly upToNow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly useShortcutText: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shortcutSelectedIndex: {
        readonly type: NumberConstructor;
        readonly default: -1;
    };
    readonly headerSlotCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly footerSlotCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly allowCrossDay: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly behavior: {
        readonly type: PropType<"simplicity" | "normal">;
        readonly default: "normal";
        readonly validator: (v: any) => boolean;
    };
    readonly disabledDate: PropType<DisabledDateType>;
    readonly withValidate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type DatePickerProps = Readonly<ExtractPropTypes<typeof datePickerProps>>;
export declare const timePanelProps: {
    readonly disabledHours: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    readonly disabledMinutes: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    readonly disabledSeconds: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    readonly hideDisabledOptions: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 261;
    };
    readonly enterMode: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type TimePanelProps = Readonly<ExtractPropTypes<typeof timePanelProps>>;
export declare const timePickerProps: {
    type: {
        type: PropType<PickerTypeType>;
        default: string;
        validator(value: any): boolean;
    };
    allowCrossDay: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type TimePickerProps = Readonly<ExtractPropTypes<typeof timePickerProps>>;
