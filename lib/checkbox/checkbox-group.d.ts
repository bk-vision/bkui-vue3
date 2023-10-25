import type { ExtractPropTypes } from 'vue';
declare const checkboxGroupProps: {
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    modelValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
};
export declare type CheckboxGroupProps = Readonly<ExtractPropTypes<typeof checkboxGroupProps>>;
declare const _default: import("vue").DefineComponent<{
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    modelValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    modelValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    name: string;
    disabled: boolean;
    modelValue: unknown[];
    withValidate: boolean;
}>;
export default _default;
