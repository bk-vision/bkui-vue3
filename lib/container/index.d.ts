import Col from './col';
import Row from './row';
declare const BkContainer: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            col: number;
            flex: boolean;
            extCls: string;
            margin: number;
            gutter: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            col: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            gutter: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            margin: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            flex: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        }>> & {
            [x: string & `on${any}`]: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "col" | "flex" | "extCls" | "margin" | "gutter">;
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
        $emit: (event: any, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            col: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            gutter: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            margin: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            flex: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        }>> & {
            [x: string & `on${any}`]: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], string, {
            col: number;
            flex: boolean;
            extCls: string;
            margin: number;
            gutter: number;
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
        col: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        gutter: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        margin: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        flex: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & {
        [x: string & `on${any}`]: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    col: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    gutter: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    margin: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    flex: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>> & {
    [x: string & `on${any}`]: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, {
    col: number;
    flex: boolean;
    extCls: string;
    margin: number;
    gutter: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    Row: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
        [x: string & `on${any}`]: (...args: any[]) => any;
    }, {}>;
    Col: import("vue").DefineComponent<{
        span: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        offset: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        pull: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        push: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        span: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        offset: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        pull: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        push: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
    }>> & {
        [x: string & `on${any}`]: (...args: any[]) => any;
    }, {
        span: number;
        offset: number;
        push: number;
        pull: number;
    }>;
}>;
export default BkContainer;
export { BkContainer, Row as BkRow, Col as BkCol, };
