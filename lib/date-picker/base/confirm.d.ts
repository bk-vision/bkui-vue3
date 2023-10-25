import type { ExtractPropTypes } from 'vue';
declare const confirmProps: {
    readonly showTime: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
    readonly isTime: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly timeDisabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type ConfirmProps = Readonly<ExtractPropTypes<typeof confirmProps>>;
declare const _default: import("vue").DefineComponent<{
    readonly showTime: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
    readonly isTime: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly timeDisabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {
    labels: import("vue").ComputedRef<{
        time: string;
        clear: string;
        ok: string;
    }>;
    handleClear: () => void;
    handleSuccess: () => void;
    handleToggleTime: () => void;
    handleTab: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick-clear" | "pick-success" | "pick-toggle-time")[], "pick-clear" | "pick-success" | "pick-toggle-time", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly showTime: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
    readonly isTime: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly timeDisabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & {
    "onPick-clear"?: (...args: any[]) => any;
    "onPick-success"?: (...args: any[]) => any;
    "onPick-toggle-time"?: (...args: any[]) => any;
}, {
    clearable: boolean;
    isTime: boolean;
    timeDisabled: boolean;
}>;
export default _default;
