declare const BkDivider: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            align: "right" | "left" | "center";
            direction: "horizontal" | "vertical";
            type: "dashed" | "solid";
            width: number;
            color: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
                default: "horizontal" | "vertical";
            };
            align: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
                default: "right" | "left" | "center";
            };
            color: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            width: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            type: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
                default: "dashed" | "solid";
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "align" | "direction" | "type" | "width" | "color">;
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
            direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
                default: "horizontal" | "vertical";
            };
            align: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
                default: "right" | "left" | "center";
            };
            color: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            width: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            type: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
                default: "dashed" | "solid";
            };
        }>>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            align: "right" | "left" | "center";
            direction: "horizontal" | "vertical";
            type: "dashed" | "solid";
            width: number;
            color: string;
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
        direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
            default: "horizontal" | "vertical";
        };
        align: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
            default: "right" | "left" | "center";
        };
        color: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        width: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        type: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
            default: "dashed" | "solid";
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
        default: "horizontal" | "vertical";
    };
    align: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
        default: "right" | "left" | "center";
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    width: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    type: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
        default: "dashed" | "solid";
    };
}>>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    align: "right" | "left" | "center";
    direction: "horizontal" | "vertical";
    type: "dashed" | "solid";
    width: number;
    color: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkDivider;
