import type { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { DatePickerShortcutsType, DatePickerValueType, DisabledDateType, SelectionModeType } from '../interface';
declare const datePanelProps: {
    readonly modelValue: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly shortcuts: {
        readonly type: PropType<DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly selectionMode: {
        readonly type: PropType<SelectionModeType>;
        readonly default: "date";
        readonly validator: (v: any) => boolean;
    };
    readonly startDate: {
        readonly type: DateConstructor;
    };
    readonly focusedDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
    readonly confirm: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showTime: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "yyyy-MM-dd";
    };
    readonly disabledDate: {
        readonly type: PropType<DisabledDateType>;
        readonly default: () => boolean;
    };
    readonly timePickerOptions: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
};
export declare type DatePanelProps = Readonly<ExtractPropTypes<typeof datePanelProps>>;
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly shortcuts: {
        readonly type: PropType<DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly selectionMode: {
        readonly type: PropType<SelectionModeType>;
        readonly default: "date";
        readonly validator: (v: any) => boolean;
    };
    readonly startDate: {
        readonly type: DateConstructor;
    };
    readonly focusedDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
    readonly confirm: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showTime: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "yyyy-MM-dd";
    };
    readonly disabledDate: {
        readonly type: PropType<DisabledDateType>;
        readonly default: () => boolean;
    };
    readonly timePickerOptions: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
}, {
    panelPickerHandlers: import("vue").ComputedRef<(value: any, type: any) => void>;
    datePanelLabel: import("vue").ComputedRef<{
        separator: any;
        labels: any[];
    }>;
    showLabelFirst: import("vue").ComputedRef<boolean>;
    showLabelSecond: import("vue").ComputedRef<boolean>;
    handleShortcutClick: (shortcut: any) => void;
    changeYear: (dir: any) => void;
    changeMonth: (dir: any) => void;
    reset: () => void;
    isTime: import("vue").ComputedRef<boolean>;
    hasShortcuts: import("vue").ComputedRef<boolean>;
    timeDisabled: import("vue").ComputedRef<boolean>;
    onToggleVisibility: (open: any) => void;
    handleToggleTime: () => void;
    handlePickSuccess: () => void;
    handlePickClear: () => void;
    handlePick: (value: any, type: any) => void;
    handlePickClick: () => void;
    timePickerRef: any;
    currentView: import("vue").Ref<SelectionModeType>;
    pickerTable: import("vue").Ref<string>;
    dates: import("vue").Ref<any>;
    panelDate: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick-clear" | "pick-success" | "pick" | "pick-click" | "selection-mode-change")[], "pick-clear" | "pick-success" | "pick" | "pick-click" | "selection-mode-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly shortcuts: {
        readonly type: PropType<DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly selectionMode: {
        readonly type: PropType<SelectionModeType>;
        readonly default: "date";
        readonly validator: (v: any) => boolean;
    };
    readonly startDate: {
        readonly type: DateConstructor;
    };
    readonly focusedDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
    readonly confirm: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showTime: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "yyyy-MM-dd";
    };
    readonly disabledDate: {
        readonly type: PropType<DisabledDateType>;
        readonly default: () => boolean;
    };
    readonly timePickerOptions: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
}>> & {
    "onPick-clear"?: (...args: any[]) => any;
    "onPick-success"?: (...args: any[]) => any;
    onPick?: (...args: any[]) => any;
    "onPick-click"?: (...args: any[]) => any;
    "onSelection-mode-change"?: (...args: any[]) => any;
}, {
    confirm: boolean;
    multiple: boolean;
    clearable: boolean;
    format: string;
    timePickerOptions: {};
    shortcuts: DatePickerShortcutsType;
    shortcutClose: boolean;
    disabledDate: DisabledDateType;
    showTime: boolean;
    selectionMode: SelectionModeType;
}>;
export default _default;
