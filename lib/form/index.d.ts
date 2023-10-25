import ComposeFormItem from './compose-form-item';
import { formProps } from './form';
import FormItem from './form-item';
export * from './type';
declare const BkForm: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            labelWidth: string | number;
            rules: {
                [key: string]: any;
            };
            formType: string;
            model: {
                [key: string]: any;
            };
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            formType: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            labelWidth: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            labelPosition: import("vue-types").VueTypeDef<string>;
            model: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            rules: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
        }>> & {
            onSubmit?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "labelWidth" | "rules" | "formType" | "model">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "submit", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            formType: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            labelWidth: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            labelPosition: import("vue-types").VueTypeDef<string>;
            model: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            rules: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
        }>> & {
            onSubmit?: (...args: any[]) => any;
        }, {
            handleSubmit: (event: Event) => void;
            validate: (fields?: string | string[]) => Promise<{
                [key: string]: any;
            }>;
            clearValidate: (fields?: string | string[]) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], string, {
            labelWidth: string | number;
            rules: {
                [key: string]: any;
            };
            formType: string;
            model: {
                [key: string]: any;
            };
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        formType: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
        labelWidth: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        labelPosition: import("vue-types").VueTypeDef<string>;
        model: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        rules: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
    }>> & {
        onSubmit?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        handleSubmit: (event: Event) => void;
        validate: (fields?: string | string[]) => Promise<{
            [key: string]: any;
        }>;
        clearValidate: (fields?: string | string[]) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    formType: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    labelWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    labelPosition: import("vue-types").VueTypeDef<string>;
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
}>> & {
    onSubmit?: (...args: any[]) => any;
}, {
    handleSubmit: (event: Event) => void;
    validate: (fields?: string | string[]) => Promise<{
        [key: string]: any;
    }>;
    clearValidate: (fields?: string | string[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", {
    labelWidth: string | number;
    rules: {
        [key: string]: any;
    };
    formType: string;
    model: {
        [key: string]: any;
    };
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    FormItem: import("vue").DefineComponent<{
        label: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        labelWidth: import("vue-types").VueTypeDef<string | number>;
        labelPosition: import("vue-types").VueTypeDef<string>;
        property: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        required: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        email: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        max: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        min: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        maxlength: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        rules: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        autoCheck: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        description: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        errorDisplayType: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
    }, {
        isShowLabel: import("vue").ComputedRef<boolean>;
        labelStyles: import("vue").ComputedRef<any>;
        contentStyles: import("vue").ComputedRef<{
            "margin-left": any;
        }>;
        isFormTypeVertical: import("vue").ComputedRef<boolean>;
        validate: (trigger?: String) => Promise<boolean>;
        clearValidate: () => void;
        isError: import("vue").Ref<boolean>;
        errorMessage: import("vue").Ref<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        label: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        labelWidth: import("vue-types").VueTypeDef<string | number>;
        labelPosition: import("vue-types").VueTypeDef<string>;
        property: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        required: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        email: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        max: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        min: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        maxlength: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        rules: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        autoCheck: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        description: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        errorDisplayType: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
    }>>, {
        label: string;
        required: boolean;
        email: boolean;
        property: string;
        max: number;
        min: number;
        maxlength: number;
        rules: unknown[];
        autoCheck: boolean;
        description: string;
        errorDisplayType: string;
    }>;
    ComposeFormItem: import("vue").DefineComponent<{
        headBackgroundColor: {
            type: StringConstructor;
            default: string;
        };
        tailBackgroundColor: StringConstructor;
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        headBackgroundColor: {
            type: StringConstructor;
            default: string;
        };
        tailBackgroundColor: StringConstructor;
    }>>, {
        headBackgroundColor: string;
    }>;
}>;
export default BkForm;
export { BkForm, FormItem as BkFormItem, ComposeFormItem as BkComposeFormItem, };
export type { formProps, };
