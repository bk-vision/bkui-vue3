import type { ExtractPropTypes } from 'vue';
declare const radioGroupProps: {
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
};
export declare type RadioGroupProps = Readonly<ExtractPropTypes<typeof radioGroupProps>>;
declare const _default: import("vue").DefineComponent<{
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    name: string;
    type: string;
    disabled: boolean;
    withValidate: boolean;
}>;
export default _default;
