import Image from './image';
import ImageViewer from './image-viewer';
export { Image, ImageViewer };
declare const BkImage: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            zIndex: number;
            fit: "none" | "fill" | "contain" | "cover" | "scale-down";
            urlList: unknown[];
            maskClose: boolean;
            src: string;
            fallback: string;
            lazy: boolean;
            isShowPreviewTitle: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            src: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            fallback: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            fit: import("vue-types").VueTypeDef<"none" | "fill" | "contain" | "cover" | "scale-down"> & {
                default: "none" | "fill" | "contain" | "cover" | "scale-down";
            };
            lazy: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            urlList: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            isShowPreviewTitle: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            maskClose: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            zIndex: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            onError?: (...args: any[]) => any;
            onClose?: (...args: any[]) => any;
            onLoaded?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "zIndex" | "fit" | "urlList" | "maskClose" | "src" | "fallback" | "lazy" | "isShowPreviewTitle">;
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
        $emit: (event: "change" | "close" | "error" | "loaded", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            src: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            fallback: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            fit: import("vue-types").VueTypeDef<"none" | "fill" | "contain" | "cover" | "scale-down"> & {
                default: "none" | "fill" | "contain" | "cover" | "scale-down";
            };
            lazy: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            urlList: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            isShowPreviewTitle: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            maskClose: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            zIndex: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            onError?: (...args: any[]) => any;
            onClose?: (...args: any[]) => any;
            onLoaded?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "error" | "loaded")[], string, {
            zIndex: number;
            fit: "none" | "fill" | "contain" | "cover" | "scale-down";
            urlList: unknown[];
            maskClose: boolean;
            src: string;
            fallback: string;
            lazy: boolean;
            isShowPreviewTitle: boolean;
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
        src: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        fallback: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        fit: import("vue-types").VueTypeDef<"none" | "fill" | "contain" | "cover" | "scale-down"> & {
            default: "none" | "fill" | "contain" | "cover" | "scale-down";
        };
        lazy: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        urlList: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            default: () => unknown[];
        };
        isShowPreviewTitle: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        maskClose: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        zIndex: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        onError?: (...args: any[]) => any;
        onClose?: (...args: any[]) => any;
        onLoaded?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    src: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    fallback: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    fit: import("vue-types").VueTypeDef<"none" | "fill" | "contain" | "cover" | "scale-down"> & {
        default: "none" | "fill" | "contain" | "cover" | "scale-down";
    };
    lazy: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    urlList: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    isShowPreviewTitle: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    maskClose: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    onLoaded?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "error" | "loaded")[], "change" | "close" | "error" | "loaded", {
    zIndex: number;
    fit: "none" | "fill" | "contain" | "cover" | "scale-down";
    urlList: unknown[];
    maskClose: boolean;
    src: string;
    fallback: string;
    lazy: boolean;
    isShowPreviewTitle: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkImage;
