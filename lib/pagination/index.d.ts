declare const BkPagination: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            small: boolean;
            align: string;
            type: string;
            disabled: boolean;
            layout: string[];
            location: string;
            count: number;
            modelValue: number;
            beforeChange: (...args: any[]) => any;
            prevText: string;
            nextText: string;
            limit: number;
            limitList: number[];
            showLimit: boolean;
            showTotalCount: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            modelValue: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            count: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            } & {
                required: true;
            };
            limit: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            limitList: import("vue-types").VueTypeDef<number[]> & {
                default: () => number[];
            };
            showLimit: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            type: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            location: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            align: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
            small: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showTotalCount: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            prevText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            nextText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
            layout: import("vue-types").VueTypeDef<string[]> & {
                default: () => string[];
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onUpdate:limit"?: (...args: any[]) => any;
            onLimitChange?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "small" | "align" | "type" | "disabled" | "layout" | "location" | "count" | "modelValue" | "beforeChange" | "prevText" | "nextText" | "limit" | "limitList" | "showLimit" | "showTotalCount">;
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
        $emit: (event: "change" | "update:modelValue" | "update:limit" | "limitChange", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            count: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            } & {
                required: true;
            };
            limit: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            limitList: import("vue-types").VueTypeDef<number[]> & {
                default: () => number[];
            };
            showLimit: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            type: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            location: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            align: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
            small: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showTotalCount: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            prevText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            nextText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
            layout: import("vue-types").VueTypeDef<string[]> & {
                default: () => string[];
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onUpdate:limit"?: (...args: any[]) => any;
            onLimitChange?: (...args: any[]) => any;
        }, {
            totalPageNum: import("vue").Ref<number>;
            renderTotal: ({ isFirst, isLast }: {
                isFirst: any;
                isLast: any;
            }) => JSX.Element;
            renderList: ({ isFirst, isLast }: {
                isFirst: any;
                isLast: any;
            }) => JSX.Element;
            renderLimit: ({ isFirst, isLast }: {
                isFirst: any;
                isLast: any;
            }) => JSX.Element;
            renderSmallList: () => JSX.Element;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "update:limit" | "limitChange")[], string, {
            small: boolean;
            align: string;
            type: string;
            disabled: boolean;
            layout: string[];
            location: string;
            count: number;
            modelValue: number;
            beforeChange: (...args: any[]) => any;
            prevText: string;
            nextText: string;
            limit: number;
            limitList: number[];
            showLimit: boolean;
            showTotalCount: boolean;
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
        modelValue: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        count: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        } & {
            required: true;
        };
        limit: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        limitList: import("vue-types").VueTypeDef<number[]> & {
            default: () => number[];
        };
        showLimit: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        type: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
        location: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
        align: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
        size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
        small: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        showTotalCount: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        prevText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        nextText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        layout: import("vue-types").VueTypeDef<string[]> & {
            default: () => string[];
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onUpdate:limit"?: (...args: any[]) => any;
        onLimitChange?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        totalPageNum: import("vue").Ref<number>;
        renderTotal: ({ isFirst, isLast }: {
            isFirst: any;
            isLast: any;
        }) => JSX.Element;
        renderList: ({ isFirst, isLast }: {
            isFirst: any;
            isLast: any;
        }) => JSX.Element;
        renderLimit: ({ isFirst, isLast }: {
            isFirst: any;
            isLast: any;
        }) => JSX.Element;
        renderSmallList: () => JSX.Element;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    count: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    } & {
        required: true;
    };
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    limitList: import("vue-types").VueTypeDef<number[]> & {
        default: () => number[];
    };
    showLimit: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    location: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    align: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    small: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showTotalCount: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    prevText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    nextText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    layout: import("vue-types").VueTypeDef<string[]> & {
        default: () => string[];
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:limit"?: (...args: any[]) => any;
    onLimitChange?: (...args: any[]) => any;
}, {
    totalPageNum: import("vue").Ref<number>;
    renderTotal: ({ isFirst, isLast }: {
        isFirst: any;
        isLast: any;
    }) => JSX.Element;
    renderList: ({ isFirst, isLast }: {
        isFirst: any;
        isLast: any;
    }) => JSX.Element;
    renderLimit: ({ isFirst, isLast }: {
        isFirst: any;
        isLast: any;
    }) => JSX.Element;
    renderSmallList: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "update:limit" | "limitChange")[], "change" | "update:modelValue" | "update:limit" | "limitChange", {
    small: boolean;
    align: string;
    type: string;
    disabled: boolean;
    layout: string[];
    location: string;
    count: number;
    modelValue: number;
    beforeChange: (...args: any[]) => any;
    prevText: string;
    nextText: string;
    limit: number;
    limitList: number[];
    showLimit: boolean;
    showTotalCount: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkPagination;
export { BkPagination, };
