declare const BkVirtualRender: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            enabled: boolean;
            width: string | number;
            height: string | number;
            list: unknown[];
            lineHeight: any;
            minHeight: number;
            className: string | {
                [key: string]: any;
            };
            scrollEvent: boolean;
            contentClassName: string | {
                [key: string]: any;
            };
            contentStyle: {
                [key: string]: any;
            };
            scrollXName: string;
            scrollYName: string;
            groupItemCount: number;
            preloadItemCount: number;
            renderAs: string;
            contentAs: string;
            scrollOffsetTop: number;
            scrollPosition: string;
            abosuteHeight: string | number;
            throttleDelay: number;
            rowKey: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            onContentScroll: FunctionConstructor;
            list: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            enabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            scrollEvent: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            lineHeight: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            minHeight: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            height: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            width: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            className: import("vue-types").VueTypeDef<string | string[] | {
                [key: string]: any;
            } | {
                [key: string]: any;
            }[]> & {
                default: string | (() => {
                    [key: string]: any;
                }) | (() => string[]) | (() => {
                    [key: string]: any;
                }[]);
            };
            contentClassName: import("vue-types").VueTypeDef<string | string[] | {
                [key: string]: any;
            } | {
                [key: string]: any;
            }[]> & {
                default: string | (() => {
                    [key: string]: any;
                }) | (() => string[]) | (() => {
                    [key: string]: any;
                }[]);
            };
            contentStyle: import("vue-types").VueTypeValidableDef<{
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
            scrollXName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            scrollYName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            groupItemCount: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            preloadItemCount: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            renderAs: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            contentAs: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            scrollOffsetTop: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            scrollPosition: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            abosuteHeight: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            throttleDelay: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            rowKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "enabled" | "width" | "height" | "list" | "lineHeight" | "minHeight" | "className" | "scrollEvent" | "contentClassName" | "contentStyle" | "scrollXName" | "scrollYName" | "groupItemCount" | "preloadItemCount" | "renderAs" | "contentAs" | "scrollOffsetTop" | "scrollPosition" | "abosuteHeight" | "throttleDelay" | "rowKey">;
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
        $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            onContentScroll: FunctionConstructor;
            list: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            enabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            scrollEvent: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            lineHeight: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            minHeight: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            height: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            width: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            className: import("vue-types").VueTypeDef<string | string[] | {
                [key: string]: any;
            } | {
                [key: string]: any;
            }[]> & {
                default: string | (() => {
                    [key: string]: any;
                }) | (() => string[]) | (() => {
                    [key: string]: any;
                }[]);
            };
            contentClassName: import("vue-types").VueTypeDef<string | string[] | {
                [key: string]: any;
            } | {
                [key: string]: any;
            }[]> & {
                default: string | (() => {
                    [key: string]: any;
                }) | (() => string[]) | (() => {
                    [key: string]: any;
                }[]);
            };
            contentStyle: import("vue-types").VueTypeValidableDef<{
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
            scrollXName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            scrollYName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            groupItemCount: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            preloadItemCount: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            renderAs: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            contentAs: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            scrollOffsetTop: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            scrollPosition: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            abosuteHeight: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            throttleDelay: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            rowKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
        }>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {
            enabled: boolean;
            width: string | number;
            height: string | number;
            list: unknown[];
            lineHeight: any;
            minHeight: number;
            className: string | {
                [key: string]: any;
            };
            scrollEvent: boolean;
            contentClassName: string | {
                [key: string]: any;
            };
            contentStyle: {
                [key: string]: any;
            };
            scrollXName: string;
            scrollYName: string;
            groupItemCount: number;
            preloadItemCount: number;
            renderAs: string;
            contentAs: string;
            scrollOffsetTop: number;
            scrollPosition: string;
            abosuteHeight: string | number;
            throttleDelay: number;
            rowKey: string;
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
        onContentScroll: FunctionConstructor;
        list: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            default: () => unknown[];
        };
        enabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        scrollEvent: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        lineHeight: import("vue-types").VueTypeDef<any> & {
            default: any;
        };
        minHeight: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        height: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        width: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        className: import("vue-types").VueTypeDef<string | string[] | {
            [key: string]: any;
        } | {
            [key: string]: any;
        }[]> & {
            default: string | (() => {
                [key: string]: any;
            }) | (() => string[]) | (() => {
                [key: string]: any;
            }[]);
        };
        contentClassName: import("vue-types").VueTypeDef<string | string[] | {
            [key: string]: any;
        } | {
            [key: string]: any;
        }[]> & {
            default: string | (() => {
                [key: string]: any;
            }) | (() => string[]) | (() => {
                [key: string]: any;
            }[]);
        };
        contentStyle: import("vue-types").VueTypeValidableDef<{
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
        scrollXName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        scrollYName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        groupItemCount: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        preloadItemCount: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        renderAs: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        contentAs: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        scrollOffsetTop: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        scrollPosition: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        abosuteHeight: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        throttleDelay: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    onContentScroll: FunctionConstructor;
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    enabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    scrollEvent: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    lineHeight: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    minHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    className: import("vue-types").VueTypeDef<string | string[] | {
        [key: string]: any;
    } | {
        [key: string]: any;
    }[]> & {
        default: string | (() => {
            [key: string]: any;
        }) | (() => string[]) | (() => {
            [key: string]: any;
        }[]);
    };
    contentClassName: import("vue-types").VueTypeDef<string | string[] | {
        [key: string]: any;
    } | {
        [key: string]: any;
    }[]> & {
        default: string | (() => {
            [key: string]: any;
        }) | (() => string[]) | (() => {
            [key: string]: any;
        }[]);
    };
    contentStyle: import("vue-types").VueTypeValidableDef<{
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
    scrollXName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    scrollYName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    groupItemCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    preloadItemCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    renderAs: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    contentAs: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    scrollOffsetTop: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    scrollPosition: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    abosuteHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    throttleDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "content-scroll", {
    enabled: boolean;
    width: string | number;
    height: string | number;
    list: unknown[];
    lineHeight: any;
    minHeight: number;
    className: string | {
        [key: string]: any;
    };
    scrollEvent: boolean;
    contentClassName: string | {
        [key: string]: any;
    };
    contentStyle: {
        [key: string]: any;
    };
    scrollXName: string;
    scrollYName: string;
    groupItemCount: number;
    preloadItemCount: number;
    renderAs: string;
    contentAs: string;
    scrollOffsetTop: number;
    scrollPosition: string;
    abosuteHeight: string | number;
    throttleDelay: number;
    rowKey: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkVirtualRender;
