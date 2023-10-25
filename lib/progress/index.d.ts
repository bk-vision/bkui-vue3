declare const BkProgress: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            fixed: number;
            type: string;
            width: number;
            theme: "success" | "warning" | "danger" | "primary";
            color: string;
            extCls: string;
            strokeLinecap: string;
            strokeWidth: number;
            format: (...args: any[]) => any;
            percent: number;
            bgColor: string;
            titleStyle: {
                [key: string]: any;
            };
            showText: boolean;
            textInside: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            type: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
            } & {
                default: string;
            };
            percent: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
                default: "success" | "warning" | "danger" | "primary";
            };
            size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
            width: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            strokeWidth: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            strokeLinecap: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            textInside: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showText: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            color: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            bgColor: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            fixed: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
            } & {
                default: number;
            };
            format: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            } & {
                default: (...args: any[]) => any;
            };
            titleStyle: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            } & {
                default: () => {
                    [key: string]: any;
                };
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "fixed" | "type" | "width" | "theme" | "color" | "extCls" | "strokeLinecap" | "strokeWidth" | "format" | "percent" | "bgColor" | "titleStyle" | "showText" | "textInside">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            type: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
            } & {
                default: string;
            };
            percent: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
                default: "success" | "warning" | "danger" | "primary";
            };
            size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
            width: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            strokeWidth: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            strokeLinecap: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            textInside: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showText: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            color: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            bgColor: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            fixed: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
            } & {
                default: number;
            };
            format: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            } & {
                default: (...args: any[]) => any;
            };
            titleStyle: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            } & {
                default: () => {
                    [key: string]: any;
                };
            };
        }>>, {}, unknown, {}, {
            validPercent(percent?: number): number;
            renderProcessInfo(): JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            fixed: number;
            type: string;
            width: number;
            theme: "success" | "warning" | "danger" | "primary";
            color: string;
            extCls: string;
            strokeLinecap: string;
            strokeWidth: number;
            format: (...args: any[]) => any;
            percent: number;
            bgColor: string;
            titleStyle: {
                [key: string]: any;
            };
            showText: boolean;
            textInside: boolean;
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
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        type: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
        } & {
            default: string;
        };
        percent: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
            default: "success" | "warning" | "danger" | "primary";
        };
        size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
        width: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        strokeWidth: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        strokeLinecap: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        textInside: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        showText: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        color: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        bgColor: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        fixed: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
        } & {
            default: number;
        };
        format: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
            default: (...args: any[]) => any;
        };
        titleStyle: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        } & {
            default: () => {
                [key: string]: any;
            };
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & {} & {
        validPercent(percent?: number): number;
        renderProcessInfo(): JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
    } & {
        default: string;
    };
    percent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
        default: "success" | "warning" | "danger" | "primary";
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    width: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    strokeWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    strokeLinecap: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    textInside: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showText: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bgColor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fixed: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
    } & {
        default: number;
    };
    format: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    titleStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
}>>, {}, unknown, {}, {
    validPercent(percent?: number): number;
    renderProcessInfo(): JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    fixed: number;
    type: string;
    width: number;
    theme: "success" | "warning" | "danger" | "primary";
    color: string;
    extCls: string;
    strokeLinecap: string;
    strokeWidth: number;
    format: (...args: any[]) => any;
    percent: number;
    bgColor: string;
    titleStyle: {
        [key: string]: any;
    };
    showText: boolean;
    textInside: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkProgress;
