import type { ExtractPropTypes } from 'vue';
export declare const checkboxProps: {
    modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
    label: import("vue-types").VueTypeDef<string | number | boolean>;
    trueLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    falseLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    indeterminate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
        default: "small" | "default" | "large";
    };
    immediateEmitChange: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
};
export declare type CheckboxProps = Readonly<ExtractPropTypes<typeof checkboxProps>>;
declare const _default: import("vue").DefineComponent<{
    modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
    label: import("vue-types").VueTypeDef<string | number | boolean>;
    trueLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    falseLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    indeterminate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
        default: "small" | "default" | "large";
    };
    immediateEmitChange: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, {
    inputRef: import("vue").Ref<any>;
    isFocus: import("vue").Ref<boolean>;
    isChecked: import("vue").Ref<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    setChecked: (value?: boolean) => void;
    handleBlur: () => void;
    handleFocus: () => void;
    handleChange: (event: Event) => void;
    size: "small" | "default" | "large";
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
    label: import("vue-types").VueTypeDef<string | number | boolean>;
    trueLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    falseLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    indeterminate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
        default: "small" | "default" | "large";
    };
    immediateEmitChange: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    disabled: boolean;
    size: "small" | "default" | "large";
    trueLabel: string | number | boolean;
    falseLabel: string | number | boolean;
    checked: boolean;
    indeterminate: boolean;
    beforeChange: (...args: any[]) => any;
    immediateEmitChange: boolean;
}>;
export default _default;
