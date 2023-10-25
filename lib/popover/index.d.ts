declare const BkPopover: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            placement: string;
            modifiers: unknown[];
            offset: number | {
                mainAxis?: number;
                crossAxis?: number;
                alignmentAxis?: number;
            };
            zIndex: number;
            content: string | number;
            trigger: string;
            width: string | number;
            height: string | number;
            maxHeight: string | number;
            arrow: boolean;
            isShow: boolean;
            always: boolean;
            disabled: boolean;
            theme: string;
            renderType: "auto" | "shown";
            padding: number;
            disableTeleport: boolean;
            autoPlacement: boolean;
            autoVisibility: boolean;
            disableOutsideClick: boolean;
            disableTransform: boolean;
            reference: any;
            popoverDelay: number | number[];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            onAfterHidden: FunctionConstructor;
            onAfterShow: FunctionConstructor;
            isShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            always: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            width: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            height: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            maxHeight: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            content: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            placement: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            theme: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            trigger: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            renderType: import("vue-types").VueTypeDef<"auto" | "shown"> & {
                default: "auto" | "shown";
            };
            arrow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            padding: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            offset: import("vue-types").VueTypeDef<number | {
                mainAxis?: number;
                crossAxis?: number;
                alignmentAxis?: number;
            }> & {
                default: number | (() => {
                    mainAxis?: number;
                    crossAxis?: number;
                    alignmentAxis?: number;
                });
            };
            boundary: import("vue-types").VueTypeDef<string | HTMLElement>;
            zIndex: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            disableTeleport: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            autoPlacement: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            autoVisibility: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disableOutsideClick: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disableTransform: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            reference: import("vue-types").VueTypeValidableDef<any> & {
                default: any;
            };
            modifiers: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            popoverDelay: import("vue-types").VueTypeDef<number | number[]> & {
                default: number | (() => number[]);
            };
        }>> & {
            onShow?: (...args: any[]) => any;
            onHide?: (...args: any[]) => any;
            onClickoutside?: (...args: any[]) => any;
            onContentMouseenter?: (...args: any[]) => any;
            onContentMouseleave?: (...args: any[]) => any;
            onStopHide?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "modifiers" | "offset" | "zIndex" | "content" | "trigger" | "width" | "height" | "maxHeight" | "arrow" | "isShow" | "always" | "disabled" | "theme" | "renderType" | "padding" | "disableTeleport" | "autoPlacement" | "autoVisibility" | "disableOutsideClick" | "disableTransform" | "reference" | "popoverDelay">;
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
        $emit: ((event: import("./const").EMIT_EVENTS.SHOW, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.HIDE, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.CLICK_OUTSIDE, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.CONTENT_MOUSEENTER, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.CONTENT_MOUSELEAVE, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.STOP_HIDE, ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            onAfterHidden: FunctionConstructor;
            onAfterShow: FunctionConstructor;
            isShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            always: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            width: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            height: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            maxHeight: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            content: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            placement: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            theme: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            trigger: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            renderType: import("vue-types").VueTypeDef<"auto" | "shown"> & {
                default: "auto" | "shown";
            };
            arrow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            padding: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            offset: import("vue-types").VueTypeDef<number | {
                mainAxis?: number;
                crossAxis?: number;
                alignmentAxis?: number;
            }> & {
                default: number | (() => {
                    mainAxis?: number;
                    crossAxis?: number;
                    alignmentAxis?: number;
                });
            };
            boundary: import("vue-types").VueTypeDef<string | HTMLElement>;
            zIndex: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            disableTeleport: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            autoPlacement: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            autoVisibility: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disableOutsideClick: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disableTransform: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            reference: import("vue-types").VueTypeValidableDef<any> & {
                default: any;
            };
            modifiers: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            popoverDelay: import("vue-types").VueTypeDef<number | number[]> & {
                default: number | (() => number[]);
            };
        }>> & {
            onShow?: (...args: any[]) => any;
            onHide?: (...args: any[]) => any;
            onClickoutside?: (...args: any[]) => any;
            onContentMouseenter?: (...args: any[]) => any;
            onContentMouseleave?: (...args: any[]) => any;
            onStopHide?: (...args: any[]) => any;
        }, {
            boundary: import("vue").Ref<any>;
            arrow: boolean;
            refDefaultReference: import("vue").Ref<any>;
            refContent: import("vue").Ref<any>;
            refArrow: import("vue").Ref<any>;
            content: string | number;
            theme: string;
            transBoundary: import("vue").ComputedRef<boolean>;
            handleClickOutside: (_e: MouseEvent) => void;
            updatePopover: (virtualEl?: any, props?: {}) => void;
            hide: () => void;
            show: () => void;
            stopHide: () => void;
            contentIsShow: import("vue").ComputedRef<boolean>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            show: (..._args: any[]) => boolean;
            hide: (..._args: any[]) => boolean;
            clickoutside: (..._args: any[]) => boolean;
            contentMouseenter: (..._args: any[]) => boolean;
            contentMouseleave: (..._args: any[]) => boolean;
            stopHide: (..._args: any[]) => boolean;
        }, string, {
            placement: string;
            modifiers: unknown[];
            offset: number | {
                mainAxis?: number;
                crossAxis?: number;
                alignmentAxis?: number;
            };
            zIndex: number;
            content: string | number;
            trigger: string;
            width: string | number;
            height: string | number;
            maxHeight: string | number;
            arrow: boolean;
            isShow: boolean;
            always: boolean;
            disabled: boolean;
            theme: string;
            renderType: "auto" | "shown";
            padding: number;
            disableTeleport: boolean;
            autoPlacement: boolean;
            autoVisibility: boolean;
            disableOutsideClick: boolean;
            disableTransform: boolean;
            reference: any;
            popoverDelay: number | number[];
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
        onAfterHidden: FunctionConstructor;
        onAfterShow: FunctionConstructor;
        isShow: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        always: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        width: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        height: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        maxHeight: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        content: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        placement: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
        theme: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        trigger: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
        renderType: import("vue-types").VueTypeDef<"auto" | "shown"> & {
            default: "auto" | "shown";
        };
        arrow: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        padding: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        offset: import("vue-types").VueTypeDef<number | {
            mainAxis?: number;
            crossAxis?: number;
            alignmentAxis?: number;
        }> & {
            default: number | (() => {
                mainAxis?: number;
                crossAxis?: number;
                alignmentAxis?: number;
            });
        };
        boundary: import("vue-types").VueTypeDef<string | HTMLElement>;
        zIndex: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        disableTeleport: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        autoPlacement: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        autoVisibility: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        disableOutsideClick: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        disableTransform: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        reference: import("vue-types").VueTypeValidableDef<any> & {
            default: any;
        };
        modifiers: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            default: () => unknown[];
        };
        popoverDelay: import("vue-types").VueTypeDef<number | number[]> & {
            default: number | (() => number[]);
        };
    }>> & {
        onShow?: (...args: any[]) => any;
        onHide?: (...args: any[]) => any;
        onClickoutside?: (...args: any[]) => any;
        onContentMouseenter?: (...args: any[]) => any;
        onContentMouseleave?: (...args: any[]) => any;
        onStopHide?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        boundary: import("vue").Ref<any>;
        arrow: boolean;
        refDefaultReference: import("vue").Ref<any>;
        refContent: import("vue").Ref<any>;
        refArrow: import("vue").Ref<any>;
        content: string | number;
        theme: string;
        transBoundary: import("vue").ComputedRef<boolean>;
        handleClickOutside: (_e: MouseEvent) => void;
        updatePopover: (virtualEl?: any, props?: {}) => void;
        hide: () => void;
        show: () => void;
        stopHide: () => void;
        contentIsShow: import("vue").ComputedRef<boolean>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    onAfterHidden: FunctionConstructor;
    onAfterShow: FunctionConstructor;
    isShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    always: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    maxHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    content: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    placement: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    theme: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    trigger: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    renderType: import("vue-types").VueTypeDef<"auto" | "shown"> & {
        default: "auto" | "shown";
    };
    arrow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    padding: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    offset: import("vue-types").VueTypeDef<number | {
        mainAxis?: number;
        crossAxis?: number;
        alignmentAxis?: number;
    }> & {
        default: number | (() => {
            mainAxis?: number;
            crossAxis?: number;
            alignmentAxis?: number;
        });
    };
    boundary: import("vue-types").VueTypeDef<string | HTMLElement>;
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    disableTeleport: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    autoPlacement: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    autoVisibility: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disableOutsideClick: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disableTransform: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    reference: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    modifiers: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    popoverDelay: import("vue-types").VueTypeDef<number | number[]> & {
        default: number | (() => number[]);
    };
}>> & {
    onShow?: (...args: any[]) => any;
    onHide?: (...args: any[]) => any;
    onClickoutside?: (...args: any[]) => any;
    onContentMouseenter?: (...args: any[]) => any;
    onContentMouseleave?: (...args: any[]) => any;
    onStopHide?: (...args: any[]) => any;
}, {
    boundary: import("vue").Ref<any>;
    arrow: boolean;
    refDefaultReference: import("vue").Ref<any>;
    refContent: import("vue").Ref<any>;
    refArrow: import("vue").Ref<any>;
    content: string | number;
    theme: string;
    transBoundary: import("vue").ComputedRef<boolean>;
    handleClickOutside: (_e: MouseEvent) => void;
    updatePopover: (virtualEl?: any, props?: {}) => void;
    hide: () => void;
    show: () => void;
    stopHide: () => void;
    contentIsShow: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    show: (..._args: any[]) => boolean;
    hide: (..._args: any[]) => boolean;
    clickoutside: (..._args: any[]) => boolean;
    contentMouseenter: (..._args: any[]) => boolean;
    contentMouseleave: (..._args: any[]) => boolean;
    stopHide: (..._args: any[]) => boolean;
}, string, {
    placement: string;
    modifiers: unknown[];
    offset: number | {
        mainAxis?: number;
        crossAxis?: number;
        alignmentAxis?: number;
    };
    zIndex: number;
    content: string | number;
    trigger: string;
    width: string | number;
    height: string | number;
    maxHeight: string | number;
    arrow: boolean;
    isShow: boolean;
    always: boolean;
    disabled: boolean;
    theme: string;
    renderType: "auto" | "shown";
    padding: number;
    disableTeleport: boolean;
    autoPlacement: boolean;
    autoVisibility: boolean;
    disableOutsideClick: boolean;
    disableTransform: boolean;
    reference: any;
    popoverDelay: number | number[];
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkPopover;
export { default as $bkPopover } from './plugin-popover';
export { PopoverProps, type PopoverPropTypes } from './props';
