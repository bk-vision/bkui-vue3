import DropdownItem from './dropdown-item';
import DropdownMenu from './dropdown-menu';
declare const BkDropdown: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            placement: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
            trigger: "hover" | "click" | "manual";
            isShow: boolean;
            disabled: boolean;
            extCls: string;
            popoverOptions: {
                [key: string]: any;
            };
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            isShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            placement: import("vue-types").VueTypeDef<"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end"> & {
                default: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
            };
            trigger: import("vue-types").VueTypeDef<"hover" | "click" | "manual"> & {
                default: "hover" | "click" | "manual";
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            popoverOptions: import("vue-types").VueTypeValidableDef<{
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
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        }>> & {
            onShow?: (...args: any[]) => any;
            onHide?: (...args: any[]) => any;
            onShowChange?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "trigger" | "isShow" | "disabled" | "extCls" | "popoverOptions">;
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
        $emit: (event: "hide" | "show" | "showChange", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            isShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            placement: import("vue-types").VueTypeDef<"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end"> & {
                default: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
            };
            trigger: import("vue-types").VueTypeDef<"hover" | "click" | "manual"> & {
                default: "hover" | "click" | "manual";
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            popoverOptions: import("vue-types").VueTypeValidableDef<{
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
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        }>> & {
            onShow?: (...args: any[]) => any;
            onHide?: (...args: any[]) => any;
            onShowChange?: (...args: any[]) => any;
        }, {
            afterShow: () => void;
            afterHidden: () => void;
            popoverRef: any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "show" | "showChange")[], string, {
            placement: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
            trigger: "hover" | "click" | "manual";
            isShow: boolean;
            disabled: boolean;
            extCls: string;
            popoverOptions: {
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
        isShow: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        placement: import("vue-types").VueTypeDef<"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end"> & {
            default: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
        };
        trigger: import("vue-types").VueTypeDef<"hover" | "click" | "manual"> & {
            default: "hover" | "click" | "manual";
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        popoverOptions: import("vue-types").VueTypeValidableDef<{
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
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & {
        onShow?: (...args: any[]) => any;
        onHide?: (...args: any[]) => any;
        onShowChange?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        afterShow: () => void;
        afterHidden: () => void;
        popoverRef: any;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    isShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    placement: import("vue-types").VueTypeDef<"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end"> & {
        default: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    };
    trigger: import("vue-types").VueTypeDef<"hover" | "click" | "manual"> & {
        default: "hover" | "click" | "manual";
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    popoverOptions: import("vue-types").VueTypeValidableDef<{
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
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>> & {
    onShow?: (...args: any[]) => any;
    onHide?: (...args: any[]) => any;
    onShowChange?: (...args: any[]) => any;
}, {
    afterShow: () => void;
    afterHidden: () => void;
    popoverRef: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "show" | "showChange")[], "show" | "hide" | "showChange", {
    placement: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    trigger: "hover" | "click" | "manual";
    isShow: boolean;
    disabled: boolean;
    extCls: string;
    popoverOptions: {
        [key: string]: any;
    };
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    DropdownMenu: import("vue").DefineComponent<{
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, {
        wrapperCLasses: import("vue").ComputedRef<any[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>>, {
        extCls: string;
    }>;
    DropdownItem: import("vue").DefineComponent<{
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, {
        wrapperCLasses: import("vue").ComputedRef<any[]>;
        handleClick: (evt: MouseEvent) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
    }, {
        extCls: string;
    }>;
}>;
export default BkDropdown;
export { BkDropdown, DropdownMenu as BkDropdownMenu, DropdownItem as BkDropdownItem, };
