declare const _default: import("vue").DefineComponent<{
    onContentScroll: FunctionConstructor;
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    enabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    scrollEvent: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    lineHeight: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    minHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    className: import("vue-types").VueTypeDef<string | string[] | {
        [key: string]: any;
    } | {
        [key: string]: any;
    }[]> & {
        default: string | (() => {
            [key: string]: any;
        }) | (() => string[]) | (() => {
            [key: string]: any;
        }[]);
    };
    contentClassName: import("vue-types").VueTypeDef<string | string[] | {
        [key: string]: any;
    } | {
        [key: string]: any;
    }[]> & {
        default: string | (() => {
            [key: string]: any;
        }) | (() => string[]) | (() => {
            [key: string]: any;
        }[]);
    };
    contentStyle: import("vue-types").VueTypeValidableDef<{
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
    scrollXName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    scrollYName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    groupItemCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    preloadItemCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    renderAs: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    contentAs: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    scrollOffsetTop: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    scrollPosition: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    abosuteHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    throttleDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "content-scroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    onContentScroll: FunctionConstructor;
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    enabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    scrollEvent: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    lineHeight: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    minHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    className: import("vue-types").VueTypeDef<string | string[] | {
        [key: string]: any;
    } | {
        [key: string]: any;
    }[]> & {
        default: string | (() => {
            [key: string]: any;
        }) | (() => string[]) | (() => {
            [key: string]: any;
        }[]);
    };
    contentClassName: import("vue-types").VueTypeDef<string | string[] | {
        [key: string]: any;
    } | {
        [key: string]: any;
    }[]> & {
        default: string | (() => {
            [key: string]: any;
        }) | (() => string[]) | (() => {
            [key: string]: any;
        }[]);
    };
    contentStyle: import("vue-types").VueTypeValidableDef<{
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
    scrollXName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    scrollYName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    groupItemCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    preloadItemCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    renderAs: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    contentAs: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    scrollOffsetTop: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    scrollPosition: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    abosuteHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    throttleDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}>>, {
    enabled: boolean;
    width: string | number;
    height: string | number;
    list: unknown[];
    lineHeight: any;
    minHeight: number;
    className: string | {
        [key: string]: any;
    };
    scrollEvent: boolean;
    contentClassName: string | {
        [key: string]: any;
    };
    contentStyle: {
        [key: string]: any;
    };
    scrollXName: string;
    scrollYName: string;
    groupItemCount: number;
    preloadItemCount: number;
    renderAs: string;
    contentAs: string;
    scrollOffsetTop: number;
    scrollPosition: string;
    abosuteHeight: string | number;
    throttleDelay: number;
    rowKey: string;
}>;
export default _default;
