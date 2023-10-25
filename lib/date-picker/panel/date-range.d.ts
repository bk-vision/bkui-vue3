import type { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { DatePickerShortcutsType, DatePickerValueType, DisabledDateType, PickerTypeType, SelectionModeType } from '../interface';
declare const dateRangePanelProps: {
    readonly modelValue: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly type: {
        readonly type: PropType<PickerTypeType>;
        readonly default: "date";
        readonly validator: (value: any) => boolean;
    };
    readonly shortcuts: {
        readonly type: PropType<DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    readonly shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly splitPanels: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showTime: {
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
    readonly upToNow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabledDate: PropType<DisabledDateType>;
    readonly focusedDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
    readonly confirm: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "yyyy-MM-dd";
    };
    readonly timePickerOptions: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
};
export declare type DateRangePanelProps = Readonly<ExtractPropTypes<typeof dateRangePanelProps>>;
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly type: {
        readonly type: PropType<PickerTypeType>;
        readonly default: "date";
        readonly validator: (value: any) => boolean;
    };
    readonly shortcuts: {
        readonly type: PropType<DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    readonly shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly splitPanels: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showTime: {
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
    readonly upToNow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabledDate: PropType<DisabledDateType>;
    readonly focusedDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
    readonly confirm: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "yyyy-MM-dd";
    };
    readonly timePickerOptions: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
}, {
    isTime: import("vue").ComputedRef<boolean>;
    hasShortcuts: import("vue").ComputedRef<number | import("vue").Slot>;
    prevYear: (panel: any) => void;
    nextYear: (panel: any) => void;
    prevMonth: (panel: any) => void;
    nextMonth: (panel: any) => void;
    leftDatePanelLabel: import("vue").ComputedRef<{
        separator: any;
        labels: any[];
    }>;
    rightDatePanelLabel: import("vue").ComputedRef<{
        separator: any;
        labels: any[];
    }>;
    leftDatePanelView: import("vue").ComputedRef<string>;
    rightDatePanelView: import("vue").ComputedRef<string>;
    leftShowLabelFirst: import("vue").ComputedRef<boolean>;
    leftShowLabelSecond: import("vue").ComputedRef<boolean>;
    rightShowLabelFirst: import("vue").ComputedRef<boolean>;
    rightShowLabelSecond: import("vue").ComputedRef<boolean>;
    preSelecting: import("vue").ComputedRef<{
        left: boolean;
        right: boolean;
    }>;
    panelPickerHandlers: import("vue").ComputedRef<{
        left: (panelPosition: any, value: any) => void;
        right: (panelPosition: any, value: any) => void;
    }>;
    timeDisabled: import("vue").ComputedRef<boolean>;
    handleShortcutClick: (shortcut: any, index: any) => boolean;
    reset: () => void;
    onToggleVisibility: (open: any) => void;
    handleRangePick: (val: any, type: any) => void;
    handleChangeRange: (val: any) => void;
    handleToggleTime: () => void;
    handlePickSuccess: () => void;
    handlePickClear: () => void;
    handlePickClick: () => void;
    timePickerRef: any;
    t: import("vue").ComputedRef<{
        selectDate: string;
        selectTime: string;
        clear: string;
        ok: string;
        weekdays: {
            sun: string;
            mon: string;
            tue: string;
            wed: string;
            thu: string;
            fri: string;
            sat: string;
        };
        hour: string;
        min: string;
        sec: string;
        toNow: string;
    }>;
    currentView: import("vue").Ref<SelectionModeType>;
    leftPickerTable: import("vue").Ref<string>;
    rightPickerTable: import("vue").Ref<string>;
    leftPanelDate: import("vue").Ref<any>;
    rightPanelDate: import("vue").Ref<{
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number) => number;
        setUTCSeconds: (sec: number, ms?: number) => number;
        setMinutes: (min: number, sec?: number, ms?: number) => number;
        setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
        setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
        setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number) => number;
        setUTCMonth: (month: number, date?: number) => number;
        setFullYear: (year: number, month?: number, date?: number) => number;
        setUTCFullYear: (year: number, month?: number, date?: number) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    }>;
    rangeState: import("vue").Ref<{
        from: any;
        to: any;
        selecting: boolean;
    }>;
    upToNowEnable: import("vue").Ref<boolean>;
    dates: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick-clear" | "pick-success" | "pick" | "pick-click")[], "pick-clear" | "pick-success" | "pick" | "pick-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly type: {
        readonly type: PropType<PickerTypeType>;
        readonly default: "date";
        readonly validator: (value: any) => boolean;
    };
    readonly shortcuts: {
        readonly type: PropType<DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    readonly shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly splitPanels: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showTime: {
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
    readonly upToNow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabledDate: PropType<DisabledDateType>;
    readonly focusedDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
    readonly confirm: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "yyyy-MM-dd";
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
}, {
    confirm: boolean;
    type: PickerTypeType;
    clearable: boolean;
    format: string;
    timePickerOptions: {};
    splitPanels: boolean;
    shortcuts: DatePickerShortcutsType;
    shortcutClose: boolean;
    upToNow: boolean;
    showTime: boolean;
    selectionMode: SelectionModeType;
}>;
export default _default;
