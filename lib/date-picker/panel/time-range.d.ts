import type { ExtractPropTypes, PropType } from 'vue';
declare const timeRangeProps: {
    steps: {
        type: PropType<number[]>;
        default: () => any[];
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: ArrayConstructor;
        required: boolean;
    };
    allowCrossDay: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type TimeRangePanelProps = Readonly<ExtractPropTypes<typeof timeRangeProps>>;
declare const _default: import("vue").DefineComponent<{
    steps: {
        type: PropType<number[]>;
        default: () => any[];
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: ArrayConstructor;
        required: boolean;
    };
    allowCrossDay: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledHours: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    disabledMinutes: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    disabledSeconds: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    hideDisabledOptions: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    width: {
        readonly type: NumberConstructor;
        readonly default: 261;
    };
    enterMode: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    type: {
        readonly type: PropType<import("../interface").PickerTypeType>;
        readonly default: "date";
        readonly validator: (value: any) => boolean;
    };
    extPopoverCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    editable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    open: {
        readonly type: () => boolean;
        readonly default: any;
    };
    multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    timePickerOptions: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
    splitPanels: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    startDate: DateConstructor;
    placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    placement: {
        readonly type: PropType<import("@popperjs/core").ComputedPlacement>;
        readonly default: "bottom-start";
        readonly validator: (value: any) => boolean;
    };
    transfer: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    shortcuts: {
        readonly type: PropType<import("../interface").DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    modelValue: {
        readonly type: PropType<import("../interface").DatePickerValueType>;
    };
    options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    fontSize: {
        readonly type: PropType<"normal" | "large" | "medium">;
        readonly default: "normal";
    };
    upToNow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    useShortcutText: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    shortcutSelectedIndex: {
        readonly type: NumberConstructor;
        readonly default: -1;
    };
    headerSlotCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    footerSlotCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    behavior: {
        readonly type: PropType<"simplicity" | "normal">;
        readonly default: "normal";
        readonly validator: (v: any) => boolean;
    };
    disabledDate: PropType<import("../interface").DisabledDateType>;
    withValidate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {
    showSeconds: import("vue").ComputedRef<boolean>;
    leftDatePanelLabel: import("vue").ComputedRef<any>;
    rightDatePanelLabel: import("vue").ComputedRef<any>;
    handleStartChange: (date: any) => void;
    handleEndChange: (date: any) => void;
    handlePickClick: () => void;
    updateScroll: () => void;
    timeSpinnerRef: any;
    timeSpinnerEndRef: any;
    showDate: import("vue").Ref<boolean>;
    dateStart: import("vue").Ref<{
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
    dateEnd: import("vue").Ref<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "pick-click")[], "pick" | "pick-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    steps: {
        type: PropType<number[]>;
        default: () => any[];
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: ArrayConstructor;
        required: boolean;
    };
    allowCrossDay: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledHours: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    disabledMinutes: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    disabledSeconds: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    hideDisabledOptions: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    width: {
        readonly type: NumberConstructor;
        readonly default: 261;
    };
    enterMode: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    type: {
        readonly type: PropType<import("../interface").PickerTypeType>;
        readonly default: "date";
        readonly validator: (value: any) => boolean;
    };
    extPopoverCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    editable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    open: {
        readonly type: () => boolean;
        readonly default: any;
    };
    multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    timePickerOptions: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
    splitPanels: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    startDate: DateConstructor;
    placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    placement: {
        readonly type: PropType<import("@popperjs/core").ComputedPlacement>;
        readonly default: "bottom-start";
        readonly validator: (value: any) => boolean;
    };
    transfer: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    shortcuts: {
        readonly type: PropType<import("../interface").DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    modelValue: {
        readonly type: PropType<import("../interface").DatePickerValueType>;
    };
    options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    fontSize: {
        readonly type: PropType<"normal" | "large" | "medium">;
        readonly default: "normal";
    };
    upToNow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    useShortcutText: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    shortcutSelectedIndex: {
        readonly type: NumberConstructor;
        readonly default: -1;
    };
    headerSlotCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    footerSlotCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    behavior: {
        readonly type: PropType<"simplicity" | "normal">;
        readonly default: "normal";
        readonly validator: (v: any) => boolean;
    };
    disabledDate: PropType<import("../interface").DisabledDateType>;
    withValidate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & {
    onPick?: (...args: any[]) => any;
    "onPick-click"?: (...args: any[]) => any;
}, {
    placement: import("@popperjs/core").ComputedPlacement;
    options: Record<string, any>;
    behavior: "simplicity" | "normal";
    type: import("../interface").PickerTypeType;
    steps: number[];
    transfer: boolean;
    width: number;
    disabled: boolean;
    fontSize: "normal" | "large" | "medium";
    open: boolean;
    multiple: boolean;
    placeholder: string;
    clearable: boolean;
    readonly: boolean;
    withValidate: boolean;
    extPopoverCls: string;
    format: string;
    editable: boolean;
    timePickerOptions: {};
    splitPanels: boolean;
    appendToBody: boolean;
    shortcuts: import("../interface").DatePickerShortcutsType;
    shortcutClose: boolean;
    upToNow: boolean;
    useShortcutText: boolean;
    shortcutSelectedIndex: number;
    headerSlotCls: string;
    footerSlotCls: string;
    allowCrossDay: boolean;
    disabledHours: unknown[];
    disabledMinutes: unknown[];
    disabledSeconds: unknown[];
    hideDisabledOptions: boolean;
    enterMode: boolean;
}>;
export default _default;
