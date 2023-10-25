import type { ExtractPropTypes } from 'vue';
declare const radioProps: {
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    label: import("vue-types").VueTypeDef<string | number | boolean> & {
        required: true;
    };
    modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
};
export declare type RadioProps = Readonly<ExtractPropTypes<typeof radioProps>>;
declare const _default: import("vue").DefineComponent<{
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    label: import("vue-types").VueTypeDef<string | number | boolean> & {
        required: true;
    };
    modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, {
    isFocused: import("vue").Ref<boolean>;
    isChecked: import("vue").Ref<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    setChecked: (value?: boolean) => void;
    handleBlur: () => void;
    handleFocus: () => void;
    handleChange: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    label: import("vue-types").VueTypeDef<string | number | boolean> & {
        required: true;
    };
    modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
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
    modelValue: string | number | boolean;
    checked: boolean;
}>;
export default _default;
