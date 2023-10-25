import type { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import type { DatePickerValueType, DisabledDateType } from '../interface';
declare const dateTableProps: {
    readonly tableDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
    readonly disabledDate: PropType<DisabledDateType>;
    readonly selectionMode: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly modelValue: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly rangeState: {
        readonly type: ObjectConstructor;
        readonly default: () => {
            from: any;
            to: any;
            selecting: boolean;
        };
    };
    readonly focusedDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
};
export declare type DateTableProps = Readonly<ExtractPropTypes<typeof dateTableProps>>;
declare const _default: import("vue").DefineComponent<{
    readonly tableDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
    readonly disabledDate: PropType<DisabledDateType>;
    readonly selectionMode: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly modelValue: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly rangeState: {
        readonly type: ObjectConstructor;
        readonly default: () => {
            from: any;
            to: any;
            selecting: boolean;
        };
    };
    readonly focusedDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
}, {
    headerDays: import("vue").ComputedRef<string[]>;
    cells: import("vue").ComputedRef<any>;
    getCellCls: (cell: any) => (string | {
        [x: string]: any;
    })[];
    handleClick: (cell: any) => void;
    handleMouseMove: (cell: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "pick-click" | "changeRange")[], "pick" | "pick-click" | "changeRange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly tableDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
    readonly disabledDate: PropType<DisabledDateType>;
    readonly selectionMode: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly modelValue: {
        readonly type: PropType<DatePickerValueType>;
    };
    readonly rangeState: {
        readonly type: ObjectConstructor;
        readonly default: () => {
            from: any;
            to: any;
            selecting: boolean;
        };
    };
    readonly focusedDate: {
        readonly type: DateConstructor;
        readonly required: true;
    };
}>> & {
    onPick?: (...args: any[]) => any;
    "onPick-click"?: (...args: any[]) => any;
    onChangeRange?: (...args: any[]) => any;
}, {
    rangeState: Record<string, any>;
}>;
export default _default;
