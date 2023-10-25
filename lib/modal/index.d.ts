import { propsMixin } from './props.mixin';
declare const BkModal: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            visible: boolean;
            closeTimer: any;
        };
        $props: Partial<{
            title: string;
            multiInstance: boolean;
            zIndex: string | number;
            showMask: boolean;
            direction: string;
            transfer: boolean;
            width: string | number;
            height: string | number;
            maxHeight: string;
            isShow: boolean;
            extCls: string | unknown[];
            draggable: boolean;
            quickClose: boolean;
            scrollable: boolean;
            closeIcon: boolean;
            escClose: boolean;
            fullscreen: boolean;
            animateType: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            isShow: import("vue-types").VueTypeValidableDef<boolean> & {
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
            extCls: (import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            }) | (import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            });
            scrollable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showMask: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            escClose: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            fullscreen: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            size: import("vue-types").VueTypeDef<"small" | "normal" | "large" | "medium">;
            draggable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            quickClose: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            transfer: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            zIndex: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            maxHeight: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            direction: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            animateType: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
            beforeClose: import("vue-types").VueTypeDef<unknown>;
            dialogType: import("vue-types").VueTypeDef<"show" | "operation" | "confirm" | "process">;
            multiInstance: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            infoType: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
        }>> & {
            onClose?: (...args: any[]) => any;
            onHidden?: (...args: any[]) => any;
            "onQuick-close"?: (...args: any[]) => any;
            onQuickClose?: (...args: any[]) => any;
            onShown?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "multiInstance" | "zIndex" | "showMask" | "direction" | "transfer" | "width" | "height" | "maxHeight" | "isShow" | "extCls" | "draggable" | "quickClose" | "scrollable" | "closeIcon" | "escClose" | "fullscreen" | "animateType">;
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
        $emit: (event: "close" | "hidden" | "quick-close" | "quickClose" | "shown", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            isShow: import("vue-types").VueTypeValidableDef<boolean> & {
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
            extCls: (import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            }) | (import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            });
            scrollable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showMask: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            escClose: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            fullscreen: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            size: import("vue-types").VueTypeDef<"small" | "normal" | "large" | "medium">;
            draggable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            quickClose: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            transfer: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            zIndex: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            maxHeight: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            direction: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            animateType: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
            beforeClose: import("vue-types").VueTypeDef<unknown>;
            dialogType: import("vue-types").VueTypeDef<"show" | "operation" | "confirm" | "process">;
            multiInstance: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            infoType: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
        }>> & {
            onClose?: (...args: any[]) => any;
            onHidden?: (...args: any[]) => any;
            "onQuick-close"?: (...args: any[]) => any;
            onQuickClose?: (...args: any[]) => any;
            onShown?: (...args: any[]) => any;
        }, unknown, {
            visible: boolean;
            closeTimer: any;
        }, {
            dialogWidth(): String | Number;
            dialogHeight(): String | Number;
            compStyle(): any;
            fullscreenStyle(): any;
        }, {
            handleClickOutSide(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "hidden" | "quick-close" | "quickClose" | "shown")[], string, {
            title: string;
            multiInstance: boolean;
            zIndex: string | number;
            showMask: boolean;
            direction: string;
            transfer: boolean;
            width: string | number;
            height: string | number;
            maxHeight: string;
            isShow: boolean;
            extCls: string | unknown[];
            draggable: boolean;
            quickClose: boolean;
            scrollable: boolean;
            closeIcon: boolean;
            escClose: boolean;
            fullscreen: boolean;
            animateType: string;
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
        width: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        height: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        extCls: (import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        }) | (import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        });
        scrollable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        showMask: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        closeIcon: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        escClose: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        fullscreen: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        size: import("vue-types").VueTypeDef<"small" | "normal" | "large" | "medium">;
        draggable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        quickClose: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        transfer: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        zIndex: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        maxHeight: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        title: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        animateType: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
        beforeClose: import("vue-types").VueTypeDef<unknown>;
        dialogType: import("vue-types").VueTypeDef<"show" | "operation" | "confirm" | "process">;
        multiInstance: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        infoType: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    }>> & {
        onClose?: (...args: any[]) => any;
        onHidden?: (...args: any[]) => any;
        "onQuick-close"?: (...args: any[]) => any;
        onQuickClose?: (...args: any[]) => any;
        onShown?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {
        visible: boolean;
        closeTimer: any;
    } & {
        dialogWidth: String | Number;
        dialogHeight: String | Number;
        compStyle: any;
        fullscreenStyle: any;
    } & {
        handleClickOutSide(): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    isShow: import("vue-types").VueTypeValidableDef<boolean> & {
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
    extCls: (import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    }) | (import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    });
    scrollable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showMask: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    escClose: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    fullscreen: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    size: import("vue-types").VueTypeDef<"small" | "normal" | "large" | "medium">;
    draggable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    quickClose: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    transfer: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    zIndex: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    maxHeight: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    animateType: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
    beforeClose: import("vue-types").VueTypeDef<unknown>;
    dialogType: import("vue-types").VueTypeDef<"show" | "operation" | "confirm" | "process">;
    multiInstance: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    infoType: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
}>> & {
    onClose?: (...args: any[]) => any;
    onHidden?: (...args: any[]) => any;
    "onQuick-close"?: (...args: any[]) => any;
    onQuickClose?: (...args: any[]) => any;
    onShown?: (...args: any[]) => any;
}, unknown, {
    visible: boolean;
    closeTimer: any;
}, {
    dialogWidth(): String | Number;
    dialogHeight(): String | Number;
    compStyle(): any;
    fullscreenStyle(): any;
}, {
    handleClickOutSide(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "hidden" | "quick-close" | "quickClose" | "shown")[], "close" | "shown" | "hidden" | "quick-close" | "quickClose", {
    title: string;
    multiInstance: boolean;
    zIndex: string | number;
    showMask: boolean;
    direction: string;
    transfer: boolean;
    width: string | number;
    height: string | number;
    maxHeight: string;
    isShow: boolean;
    extCls: string | unknown[];
    draggable: boolean;
    quickClose: boolean;
    scrollable: boolean;
    closeIcon: boolean;
    escClose: boolean;
    fullscreen: boolean;
    animateType: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    propsMixin: {
        isShow: import("vue-types").VueTypeValidableDef<boolean> & {
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
        extCls: (import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        }) | (import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        });
        scrollable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        showMask: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        closeIcon: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        escClose: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        fullscreen: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        size: import("vue-types").VueTypeDef<"small" | "normal" | "large" | "medium">;
        draggable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        quickClose: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        transfer: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        zIndex: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        maxHeight: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        title: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        animateType: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
        beforeClose: import("vue-types").VueTypeDef<unknown>;
        dialogType: import("vue-types").VueTypeDef<"show" | "operation" | "confirm" | "process">;
        multiInstance: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        infoType: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    };
}>;
export default BkModal;
export { BkModal, propsMixin, };
