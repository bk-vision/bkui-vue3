import { ExtractPropTypes } from 'vue';
import Collapse from './collapse';
import CollapsePanel from './collapse-panel';
import { propsCollapse, propsCollapsePanel } from './props';
declare const BkCollapse: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            list: any[];
            idFiled: string;
            titleField: string;
            contentField: string;
            accordion: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            list: import("vue-types").VueTypeDef<any[]> & {
                default: () => any[];
            };
            idFiled: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            titleField: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            contentField: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            modelValue: import("vue-types").VueTypeDef<number | string[] | number[]>;
            accordion: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onAfter-leave"?: (...args: any[]) => any;
            "onBefore-enter"?: (...args: any[]) => any;
            "onItem-click"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "list" | "idFiled" | "titleField" | "contentField" | "accordion">;
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
        $emit: (event: "update:modelValue" | "after-leave" | "before-enter" | "item-click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            list: import("vue-types").VueTypeDef<any[]> & {
                default: () => any[];
            };
            idFiled: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            titleField: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            contentField: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            modelValue: import("vue-types").VueTypeDef<number | string[] | number[]>;
            accordion: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onAfter-leave"?: (...args: any[]) => any;
            "onBefore-enter"?: (...args: any[]) => any;
            "onItem-click"?: (...args: any[]) => any;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "after-leave" | "before-enter" | "item-click")[], string, {
            list: any[];
            idFiled: string;
            titleField: string;
            contentField: string;
            accordion: boolean;
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
    } & Readonly<ExtractPropTypes<{
        list: import("vue-types").VueTypeDef<any[]> & {
            default: () => any[];
        };
        idFiled: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        titleField: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        contentField: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        modelValue: import("vue-types").VueTypeDef<number | string[] | number[]>;
        accordion: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onAfter-leave"?: (...args: any[]) => any;
        "onBefore-enter"?: (...args: any[]) => any;
        "onItem-click"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    list: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    idFiled: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    titleField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    contentField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    modelValue: import("vue-types").VueTypeDef<number | string[] | number[]>;
    accordion: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onAfter-leave"?: (...args: any[]) => any;
    "onBefore-enter"?: (...args: any[]) => any;
    "onItem-click"?: (...args: any[]) => any;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "after-leave" | "before-enter" | "item-click")[], "update:modelValue" | "after-leave" | "before-enter" | "item-click", {
    list: any[];
    idFiled: string;
    titleField: string;
    contentField: string;
    accordion: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    CollapsePanel: import("vue").DefineComponent<{
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
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "after-leave" | "before-enter")[], "change" | "update:modelValue" | "after-leave" | "before-enter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}>;
export declare type CollapseProps = Partial<ExtractPropTypes<typeof propsCollapse>>;
export declare type CollapsePanelProps = Partial<ExtractPropTypes<typeof propsCollapsePanel>>;
export { Collapse, CollapsePanel as BkCollapsePanel, };
export default BkCollapse;
