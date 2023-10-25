import type { ExtractPropTypes, PropType } from 'vue';
declare const timeSpinnerProps: {
    hours: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minutes: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    seconds: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showSeconds: {
        type: BooleanConstructor;
        default: boolean;
    };
    steps: {
        type: PropType<number[]>;
        default: () => any[];
    };
};
export declare type TimeSpinnerProps = Readonly<ExtractPropTypes<typeof timeSpinnerProps>>;
declare const _default: import("vue").DefineComponent<{
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
    hours: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minutes: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    seconds: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showSeconds: {
        type: BooleanConstructor;
        default: boolean;
    };
    steps: {
        type: PropType<number[]>;
        default: () => any[];
    };
}, {
    hoursList: import("vue").ComputedRef<any[]>;
    minutesList: import("vue").ComputedRef<any[]>;
    secondsList: import("vue").ComputedRef<any[]>;
    styles: import("vue").ComputedRef<{
        width: string;
    }>;
    hoursRef: any;
    minutesRef: any;
    secondsRef: any;
    getCellCls: (cell: any) => (string | {
        [x: string]: any;
    })[];
    handleClick: (type: any, cell: any) => void;
    updateScroll: () => void;
    padTime: (text: any) => any;
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
    spinerSteps: import("vue").Ref<number[]>;
    compiled: import("vue").Ref<boolean>;
    focusedColumn: import("vue").Ref<number>;
    focusedTime: import("vue").Ref<number[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "pick-click")[], "change" | "pick-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
    hours: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minutes: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    seconds: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showSeconds: {
        type: BooleanConstructor;
        default: boolean;
    };
    steps: {
        type: PropType<number[]>;
        default: () => any[];
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onPick-click"?: (...args: any[]) => any;
}, {
    steps: number[];
    width: number;
    disabledHours: unknown[];
    disabledMinutes: unknown[];
    disabledSeconds: unknown[];
    hideDisabledOptions: boolean;
    enterMode: boolean;
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
    showSeconds: boolean;
}>;
export default _default;
