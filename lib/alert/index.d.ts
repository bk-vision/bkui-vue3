declare const BkAlert: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            theme: "success" | "info" | "warning" | "danger";
            size: string;
            closable: boolean;
            closeText: string;
            showIcon: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                default: "success" | "info" | "warning" | "danger";
            };
            size: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            closable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            closeText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            showIcon: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onClose?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "theme" | "size" | "closable" | "closeText" | "showIcon">;
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
        $emit: (event: "close", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                default: "success" | "info" | "warning" | "danger";
            };
            size: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            closable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            closeText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            showIcon: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onClose?: (...args: any[]) => any;
        }, {
            state: {
                visible: boolean;
            };
            handleClose: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], string, {
            title: string;
            theme: "success" | "info" | "warning" | "danger";
            size: string;
            closable: boolean;
            closeText: string;
            showIcon: boolean;
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
        theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
            default: "success" | "info" | "warning" | "danger";
        };
        size: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        title: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        closable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        closeText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        showIcon: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>> & {
        onClose?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        state: {
            visible: boolean;
        };
        handleClose: () => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
        default: "success" | "info" | "warning" | "danger";
    };
    size: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    closable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    closeText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onClose?: (...args: any[]) => any;
}, {
    state: {
        visible: boolean;
    };
    handleClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", {
    title: string;
    theme: "success" | "info" | "warning" | "danger";
    size: string;
    closable: boolean;
    closeText: string;
    showIcon: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkAlert;
