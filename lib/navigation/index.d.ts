declare const Navigation: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            sideTitle: string;
            navigationType: import("./navigation").BkNavigationType;
            navWidth: string | number;
            hoverWidth: string | number;
            showSideNavTitle: boolean;
            headerTitle: string;
            hoverLeaveDelay: number;
            hoverEnterDelay: number;
            defaultOpen: boolean;
            headHeight: string | number;
            needMenu: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            navWidth: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            hoverWidth: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            showSideNavTitle: {
                type: BooleanConstructor;
                default: boolean;
            };
            sideTitle: {
                type: StringConstructor;
                default: string;
            };
            headerTitle: {
                type: StringConstructor;
                default: string;
            };
            hoverLeaveDelay: {
                type: NumberConstructor;
                default: number;
            };
            hoverEnterDelay: {
                type: NumberConstructor;
                default: number;
            };
            defaultOpen: BooleanConstructor;
            headHeight: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            navigationType: {
                type: import("vue").PropType<import("./navigation").BkNavigationType>;
                default: string;
                validator(v: import("./navigation").BkNavigationType): boolean;
            };
            needMenu: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onHover?: (...args: any[]) => any;
            onLeave?: (...args: any[]) => any;
            onToggle?: (...args: any[]) => any;
            "onToggle-click"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "sideTitle" | "navigationType" | "navWidth" | "hoverWidth" | "showSideNavTitle" | "headerTitle" | "hoverLeaveDelay" | "hoverEnterDelay" | "defaultOpen" | "headHeight" | "needMenu">;
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
        $emit: (event: "hover" | "toggle" | "leave" | "toggle-click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            navWidth: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            hoverWidth: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            showSideNavTitle: {
                type: BooleanConstructor;
                default: boolean;
            };
            sideTitle: {
                type: StringConstructor;
                default: string;
            };
            headerTitle: {
                type: StringConstructor;
                default: string;
            };
            hoverLeaveDelay: {
                type: NumberConstructor;
                default: number;
            };
            hoverEnterDelay: {
                type: NumberConstructor;
                default: number;
            };
            defaultOpen: BooleanConstructor;
            headHeight: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            navigationType: {
                type: import("vue").PropType<import("./navigation").BkNavigationType>;
                default: string;
                validator(v: import("./navigation").BkNavigationType): boolean;
            };
            needMenu: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onHover?: (...args: any[]) => any;
            onLeave?: (...args: any[]) => any;
            onToggle?: (...args: any[]) => any;
            "onToggle-click"?: (...args: any[]) => any;
        }, {
            defaultHeaderTitle: import("vue").Ref<string>;
            nav: {
                click: boolean;
                hover: boolean;
                delay: boolean;
                timer: any;
                enterTimer: any;
            };
            onBeforeUnmount: (hook: () => any, target?: import("vue").ComponentInternalInstance) => false | Function;
            handleMouseOver: () => void;
            handleMouseLeave: () => void;
            handleClick: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hover" | "toggle" | "leave" | "toggle-click")[], string, {
            sideTitle: string;
            navigationType: import("./navigation").BkNavigationType;
            navWidth: string | number;
            hoverWidth: string | number;
            showSideNavTitle: boolean;
            headerTitle: string;
            hoverLeaveDelay: number;
            hoverEnterDelay: number;
            defaultOpen: boolean;
            headHeight: string | number;
            needMenu: boolean;
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
        navWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        hoverWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        showSideNavTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
        sideTitle: {
            type: StringConstructor;
            default: string;
        };
        headerTitle: {
            type: StringConstructor;
            default: string;
        };
        hoverLeaveDelay: {
            type: NumberConstructor;
            default: number;
        };
        hoverEnterDelay: {
            type: NumberConstructor;
            default: number;
        };
        defaultOpen: BooleanConstructor;
        headHeight: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        navigationType: {
            type: import("vue").PropType<import("./navigation").BkNavigationType>;
            default: string;
            validator(v: import("./navigation").BkNavigationType): boolean;
        };
        needMenu: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onHover?: (...args: any[]) => any;
        onLeave?: (...args: any[]) => any;
        onToggle?: (...args: any[]) => any;
        "onToggle-click"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        defaultHeaderTitle: import("vue").Ref<string>;
        nav: {
            click: boolean;
            hover: boolean;
            delay: boolean;
            timer: any;
            enterTimer: any;
        };
        onBeforeUnmount: (hook: () => any, target?: import("vue").ComponentInternalInstance) => false | Function;
        handleMouseOver: () => void;
        handleMouseLeave: () => void;
        handleClick: () => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    navWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    hoverWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showSideNavTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    sideTitle: {
        type: StringConstructor;
        default: string;
    };
    headerTitle: {
        type: StringConstructor;
        default: string;
    };
    hoverLeaveDelay: {
        type: NumberConstructor;
        default: number;
    };
    hoverEnterDelay: {
        type: NumberConstructor;
        default: number;
    };
    defaultOpen: BooleanConstructor;
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    navigationType: {
        type: import("vue").PropType<import("./navigation").BkNavigationType>;
        default: string;
        validator(v: import("./navigation").BkNavigationType): boolean;
    };
    needMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onHover?: (...args: any[]) => any;
    onLeave?: (...args: any[]) => any;
    onToggle?: (...args: any[]) => any;
    "onToggle-click"?: (...args: any[]) => any;
}, {
    defaultHeaderTitle: import("vue").Ref<string>;
    nav: {
        click: boolean;
        hover: boolean;
        delay: boolean;
        timer: any;
        enterTimer: any;
    };
    onBeforeUnmount: (hook: () => any, target?: import("vue").ComponentInternalInstance) => false | Function;
    handleMouseOver: () => void;
    handleMouseLeave: () => void;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hover" | "toggle" | "leave" | "toggle-click")[], "hover" | "toggle" | "leave" | "toggle-click", {
    sideTitle: string;
    navigationType: import("./navigation").BkNavigationType;
    navWidth: string | number;
    hoverWidth: string | number;
    showSideNavTitle: boolean;
    headerTitle: string;
    hoverLeaveDelay: number;
    hoverEnterDelay: number;
    defaultOpen: boolean;
    headHeight: string | number;
    needMenu: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default Navigation;
