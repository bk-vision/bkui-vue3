declare const _default: import("vue").DefineComponent<{
    itemClick: {
        type: FunctionConstructor;
    };
    name: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    content: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    isFormList: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
    modelValue: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    alone: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "after-leave" | "before-enter")[], "change" | "update:modelValue" | "after-leave" | "before-enter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    itemClick: {
        type: FunctionConstructor;
    };
    name: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    content: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    isFormList: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
    modelValue: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    alone: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onAfter-leave"?: (...args: any[]) => any;
    "onBefore-enter"?: (...args: any[]) => any;
}, {
    name: string | number;
    content: string;
    disabled: boolean;
    modelValue: boolean;
    isFormList: boolean;
    alone: boolean;
}>;
export default _default;
