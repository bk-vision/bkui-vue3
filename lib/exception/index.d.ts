import Exception, { ExceptionEnum, SceneEnum } from './exception';
declare const BkException: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            type: "404" | "403" | "500" | "building" | "empty" | "search-empty" | "login";
            description: string;
            scene: "page" | "part";
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            type: import("vue-types").VueTypeDef<"404" | "403" | "500" | "building" | "empty" | "search-empty" | "login"> & {
                default: "404" | "403" | "500" | "building" | "empty" | "search-empty" | "login";
            };
            scene: import("vue-types").VueTypeDef<"page" | "part"> & {
                default: "page" | "part";
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            description: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "type" | "description" | "scene">;
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
            type: import("vue-types").VueTypeDef<"404" | "403" | "500" | "building" | "empty" | "search-empty" | "login"> & {
                default: "404" | "403" | "500" | "building" | "empty" | "search-empty" | "login";
            };
            scene: import("vue-types").VueTypeDef<"page" | "part"> & {
                default: "page" | "part";
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            description: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            title: string;
            type: "404" | "403" | "500" | "building" | "empty" | "search-empty" | "login";
            description: string;
            scene: "page" | "part";
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
        type: import("vue-types").VueTypeDef<"404" | "403" | "500" | "building" | "empty" | "search-empty" | "login"> & {
            default: "404" | "403" | "500" | "building" | "empty" | "search-empty" | "login";
        };
        scene: import("vue-types").VueTypeDef<"page" | "part"> & {
            default: "page" | "part";
        };
        title: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        description: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: import("vue-types").VueTypeDef<"404" | "403" | "500" | "building" | "empty" | "search-empty" | "login"> & {
        default: "404" | "403" | "500" | "building" | "empty" | "search-empty" | "login";
    };
    scene: import("vue-types").VueTypeDef<"page" | "part"> & {
        default: "page" | "part";
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    description: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    title: string;
    type: "404" | "403" | "500" | "building" | "empty" | "search-empty" | "login";
    description: string;
    scene: "page" | "part";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export { Exception, ExceptionEnum, SceneEnum, };
export default BkException;
