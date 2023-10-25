import BreadcrumbItem from './breadcrumb-item';
declare const BkBreadcrumb: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            replace: boolean;
            separator: string;
            extCls: string;
            separatorClass: string;
            backRouter: string | {
                [key: string]: any;
            };
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            separator: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            separatorClass: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            replace: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            backRouter: import("vue-types").VueTypeDef<string | {
                [key: string]: any;
            }> & {
                default: string | (() => {
                    [key: string]: any;
                });
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "replace" | "separator" | "extCls" | "separatorClass" | "backRouter">;
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
            separator: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            separatorClass: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            replace: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            backRouter: import("vue-types").VueTypeDef<string | {
                [key: string]: any;
            }> & {
                default: string | (() => {
                    [key: string]: any;
                });
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            replace: boolean;
            separator: string;
            extCls: string;
            separatorClass: string;
            backRouter: string | {
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
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        separator: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        separatorClass: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        replace: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        backRouter: import("vue-types").VueTypeDef<string | {
            [key: string]: any;
        }> & {
            default: string | (() => {
                [key: string]: any;
            });
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    separator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    separatorClass: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    replace: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    backRouter: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    }> & {
        default: string | (() => {
            [key: string]: any;
        });
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    replace: boolean;
    separator: string;
    extCls: string;
    separatorClass: string;
    backRouter: string | {
        [key: string]: any;
    };
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    Item: import("vue").DefineComponent<{
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        to: import("vue-types").VueTypeDef<string | {
            [key: string]: any;
        }> & {
            default: string | (() => {
                [key: string]: any;
            });
        };
        replace: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        to: import("vue-types").VueTypeDef<string | {
            [key: string]: any;
        }> & {
            default: string | (() => {
                [key: string]: any;
            });
        };
        replace: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
    }, {
        replace: boolean;
        to: string | {
            [key: string]: any;
        };
        extCls: string;
    }>;
}>;
export { BkBreadcrumb, BreadcrumbItem as BkBreadcrumbItem, };
export default BkBreadcrumb;
