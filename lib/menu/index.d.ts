import Group from './menu-group';
import Item from './menu-item';
import Submenu from './submenu';
declare const BkMenu: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            mode: "vertical";
            collapse: boolean;
            uniqueOpen: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            activeKey: StringConstructor;
            collapse: BooleanConstructor;
            openedKeys: {
                type: import("vue").PropType<string[]>;
            };
            mode: {
                type: import("vue").PropType<"vertical">;
                default: string;
            };
            uniqueOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            "onUpdate:activeKey"?: (...args: any[]) => any;
            "onUpdate:openKeys"?: (...args: any[]) => any;
            onOpenChange?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "mode" | "collapse" | "uniqueOpen">;
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
        $emit: (event: "click" | "update:activeKey" | "update:openKeys" | "openChange", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            activeKey: StringConstructor;
            collapse: BooleanConstructor;
            openedKeys: {
                type: import("vue").PropType<string[]>;
            };
            mode: {
                type: import("vue").PropType<"vertical">;
                default: string;
            };
            uniqueOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            "onUpdate:activeKey"?: (...args: any[]) => any;
            "onUpdate:openKeys"?: (...args: any[]) => any;
            onOpenChange?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:activeKey" | "update:openKeys" | "openChange")[], string, {
            mode: "vertical";
            collapse: boolean;
            uniqueOpen: boolean;
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
        activeKey: StringConstructor;
        collapse: BooleanConstructor;
        openedKeys: {
            type: import("vue").PropType<string[]>;
        };
        mode: {
            type: import("vue").PropType<"vertical">;
            default: string;
        };
        uniqueOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
        "onUpdate:activeKey"?: (...args: any[]) => any;
        "onUpdate:openKeys"?: (...args: any[]) => any;
        onOpenChange?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    activeKey: StringConstructor;
    collapse: BooleanConstructor;
    openedKeys: {
        type: import("vue").PropType<string[]>;
    };
    mode: {
        type: import("vue").PropType<"vertical">;
        default: string;
    };
    uniqueOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: (...args: any[]) => any;
    "onUpdate:activeKey"?: (...args: any[]) => any;
    "onUpdate:openKeys"?: (...args: any[]) => any;
    onOpenChange?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:activeKey" | "update:openKeys" | "openChange")[], "click" | "update:activeKey" | "update:openKeys" | "openChange", {
    mode: "vertical";
    collapse: boolean;
    uniqueOpen: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    Item: import("vue").DefineComponent<{
        needIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        needIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
    }, {
        needIcon: boolean;
    }>;
    Submenu: import("vue").DefineComponent<{
        title: {
            type: StringConstructor;
            default: string;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "collapse"[], "collapse", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        onCollapse?: (...args: any[]) => any;
    }, {
        title: string;
    }>;
    Group: import("vue").DefineComponent<{
        name: {
            type: StringConstructor;
            default: string;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: StringConstructor;
            default: string;
        };
    }>>, {
        name: string;
    }>;
}>;
export default BkMenu;
export { BkMenu, Item as BkMenuItem, Submenu as BkSubmenu, Group as BkMenuGroup, };
