declare const BkDialog: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
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
            theme: "success" | "warning" | "danger" | "primary";
            extCls: string | unknown[];
            draggable: boolean;
            quickClose: boolean;
            scrollable: boolean;
            closeIcon: boolean;
            escClose: boolean;
            fullscreen: boolean;
            animateType: string;
            confirmText: string;
            cancelText: string;
            prevText: string;
            nextText: string;
            current: number;
            totalStep: number;
            headerAlign: "right" | "left" | "center";
            footerAlign: "right" | "left" | "center";
            isLoading: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            width: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            height: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            confirmText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            cancelText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            prevText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            nextText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            current: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            totalStep: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            headerAlign: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
                default: "right" | "left" | "center";
            };
            footerAlign: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
                default: "right" | "left" | "center";
            };
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
                default: "success" | "warning" | "danger" | "primary";
            };
            dialogType: import("vue-types").VueTypeDef<"show" | "operation" | "confirm" | "process">;
            isLoading: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            isShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
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
            animateType: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
            beforeClose: import("vue-types").VueTypeDef<unknown>;
            multiInstance: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            infoType: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
        }>> & {
            onConfirm?: (...args: any[]) => any;
            onPrev?: (...args: any[]) => any;
            onNext?: (...args: any[]) => any;
            onClosed?: (...args: any[]) => any;
            "onUpdate:isShow"?: (...args: any[]) => any;
            "onValue-change"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "multiInstance" | "zIndex" | "showMask" | "direction" | "transfer" | "width" | "height" | "maxHeight" | "isShow" | "theme" | "extCls" | "draggable" | "quickClose" | "scrollable" | "closeIcon" | "escClose" | "fullscreen" | "animateType" | "confirmText" | "cancelText" | "prevText" | "nextText" | "current" | "totalStep" | "headerAlign" | "footerAlign" | "isLoading">;
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
        $emit: (event: "prev" | "next" | "confirm" | "closed" | "update:isShow" | "value-change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            width: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            height: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            confirmText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            cancelText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            prevText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            nextText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            current: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            totalStep: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            headerAlign: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
                default: "right" | "left" | "center";
            };
            footerAlign: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
                default: "right" | "left" | "center";
            };
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
                default: "success" | "warning" | "danger" | "primary";
            };
            dialogType: import("vue-types").VueTypeDef<"show" | "operation" | "confirm" | "process">;
            isLoading: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            isShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
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
            animateType: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
            beforeClose: import("vue-types").VueTypeDef<unknown>;
            multiInstance: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            infoType: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
        }>> & {
            onConfirm?: (...args: any[]) => any;
            onPrev?: (...args: any[]) => any;
            onNext?: (...args: any[]) => any;
            onClosed?: (...args: any[]) => any;
            "onUpdate:isShow"?: (...args: any[]) => any;
            "onValue-change"?: (...args: any[]) => any;
        }, {
            data: {
                positionX: number;
                positionY: number;
                moveStyle: {
                    top: string;
                    left: string;
                };
            };
            handleClose: () => void;
            handleConfirm: () => void;
            escCloseHandler: (e: any) => void;
            moveHandler: (e: any) => boolean;
            handlePrevStep: () => void;
            handleNextStep: () => void;
            hasFooter: import("vue").ComputedRef<boolean>;
            isModalShow: import("vue").Ref<boolean>;
            localConfirmText: import("vue").ComputedRef<string>;
            localCancelText: import("vue").ComputedRef<string>;
            localPrevText: import("vue").ComputedRef<string>;
            localNextText: import("vue").ComputedRef<string>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("prev" | "next" | "confirm" | "closed" | "update:isShow" | "value-change")[], string, {
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
            theme: "success" | "warning" | "danger" | "primary";
            extCls: string | unknown[];
            draggable: boolean;
            quickClose: boolean;
            scrollable: boolean;
            closeIcon: boolean;
            escClose: boolean;
            fullscreen: boolean;
            animateType: string;
            confirmText: string;
            cancelText: string;
            prevText: string;
            nextText: string;
            current: number;
            totalStep: number;
            headerAlign: "right" | "left" | "center";
            footerAlign: "right" | "left" | "center";
            isLoading: boolean;
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
        width: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        height: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        confirmText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        cancelText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        prevText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        nextText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        current: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        totalStep: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        title: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        headerAlign: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
            default: "right" | "left" | "center";
        };
        footerAlign: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
            default: "right" | "left" | "center";
        };
        theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
            default: "success" | "warning" | "danger" | "primary";
        };
        dialogType: import("vue-types").VueTypeDef<"show" | "operation" | "confirm" | "process">;
        isLoading: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        isShow: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
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
        animateType: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
        beforeClose: import("vue-types").VueTypeDef<unknown>;
        multiInstance: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        infoType: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    }>> & {
        onConfirm?: (...args: any[]) => any;
        onPrev?: (...args: any[]) => any;
        onNext?: (...args: any[]) => any;
        onClosed?: (...args: any[]) => any;
        "onUpdate:isShow"?: (...args: any[]) => any;
        "onValue-change"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        data: {
            positionX: number;
            positionY: number;
            moveStyle: {
                top: string;
                left: string;
            };
        };
        handleClose: () => void;
        handleConfirm: () => void;
        escCloseHandler: (e: any) => void;
        moveHandler: (e: any) => boolean;
        handlePrevStep: () => void;
        handleNextStep: () => void;
        hasFooter: import("vue").ComputedRef<boolean>;
        isModalShow: import("vue").Ref<boolean>;
        localConfirmText: import("vue").ComputedRef<string>;
        localCancelText: import("vue").ComputedRef<string>;
        localPrevText: import("vue").ComputedRef<string>;
        localNextText: import("vue").ComputedRef<string>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    confirmText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    cancelText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prevText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    nextText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    current: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    totalStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    headerAlign: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
        default: "right" | "left" | "center";
    };
    footerAlign: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
        default: "right" | "left" | "center";
    };
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
        default: "success" | "warning" | "danger" | "primary";
    };
    dialogType: import("vue-types").VueTypeDef<"show" | "operation" | "confirm" | "process">;
    isLoading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    isShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
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
    animateType: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
    beforeClose: import("vue-types").VueTypeDef<unknown>;
    multiInstance: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    infoType: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
}>> & {
    onConfirm?: (...args: any[]) => any;
    onPrev?: (...args: any[]) => any;
    onNext?: (...args: any[]) => any;
    onClosed?: (...args: any[]) => any;
    "onUpdate:isShow"?: (...args: any[]) => any;
    "onValue-change"?: (...args: any[]) => any;
}, {
    data: {
        positionX: number;
        positionY: number;
        moveStyle: {
            top: string;
            left: string;
        };
    };
    handleClose: () => void;
    handleConfirm: () => void;
    escCloseHandler: (e: any) => void;
    moveHandler: (e: any) => boolean;
    handlePrevStep: () => void;
    handleNextStep: () => void;
    hasFooter: import("vue").ComputedRef<boolean>;
    isModalShow: import("vue").Ref<boolean>;
    localConfirmText: import("vue").ComputedRef<string>;
    localCancelText: import("vue").ComputedRef<string>;
    localPrevText: import("vue").ComputedRef<string>;
    localNextText: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("prev" | "next" | "confirm" | "closed" | "update:isShow" | "value-change")[], "confirm" | "prev" | "next" | "closed" | "update:isShow" | "value-change", {
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
    theme: "success" | "warning" | "danger" | "primary";
    extCls: string | unknown[];
    draggable: boolean;
    quickClose: boolean;
    scrollable: boolean;
    closeIcon: boolean;
    escClose: boolean;
    fullscreen: boolean;
    animateType: string;
    confirmText: string;
    cancelText: string;
    prevText: string;
    nextText: string;
    current: number;
    totalStep: number;
    headerAlign: "right" | "left" | "center";
    footerAlign: "right" | "left" | "center";
    isLoading: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkDialog;
