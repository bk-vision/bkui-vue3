import type { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
declare const pickerDropdownProps: {
    readonly placement: {
        readonly type: PropType<import("@popperjs/core").ComputedPlacement>;
        readonly default: "bottom-start";
        readonly validator: (value: any) => boolean;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly extPopoverCls: {
        readonly type: StringConstructor;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
    };
    readonly triggerRef: {
        readonly type: ObjectConstructor;
    };
    readonly onClick: PropType<(e: MouseEvent) => void>;
};
export declare type PickerDropdownProps = Readonly<ExtractPropTypes<typeof pickerDropdownProps>>;
declare const _default: import("vue").DefineComponent<{
    readonly placement: {
        readonly type: PropType<import("@popperjs/core").ComputedPlacement>;
        readonly default: "bottom-start";
        readonly validator: (value: any) => boolean;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly extPopoverCls: {
        readonly type: StringConstructor;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
    };
    readonly triggerRef: {
        readonly type: ObjectConstructor;
    };
    readonly onClick: PropType<(e: MouseEvent) => void>;
}, {
    refContentRef: any;
    forceUpdate: () => void;
    updateDropdown: () => void;
    destoryDropdown: () => void;
    styles: import("vue").Ref<{}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "changeVisible"[], "changeVisible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly placement: {
        readonly type: PropType<import("@popperjs/core").ComputedPlacement>;
        readonly default: "bottom-start";
        readonly validator: (value: any) => boolean;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly extPopoverCls: {
        readonly type: StringConstructor;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
    };
    readonly triggerRef: {
        readonly type: ObjectConstructor;
    };
    readonly onClick: PropType<(e: MouseEvent) => void>;
}>> & {
    onChangeVisible?: (...args: any[]) => any;
}, {
    placement: import("@popperjs/core").ComputedPlacement;
    appendToBody: boolean;
}>;
export default _default;
