declare const _default: import("vue").DefineComponent<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showText: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    isOutline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    onText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    offText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    isSquare: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    trueValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    falseValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    value: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showText: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    isOutline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    onText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    offText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    isSquare: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    trueValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    falseValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    value: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
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
    disabled: boolean;
    value: string | number | boolean;
    extCls: string;
    modelValue: string | number | boolean;
    withValidate: boolean;
    beforeChange: (...args: any[]) => any;
    showText: boolean;
    isOutline: boolean;
    onText: string;
    offText: string;
    isSquare: boolean;
    trueValue: string | number | boolean;
    falseValue: string | number | boolean;
}>;
export default _default;
