declare const BkTableColumn: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            fixed: boolean | "right" | "left";
            filter: string | boolean | {
                list: any[] | (object & (() => any[]));
                filterFn: any;
                match: "full" | "fuzzy";
                filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
                btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
            };
            sort: string | boolean | {
                sortFn: any;
                sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
            };
            minWidth: string | number;
            columnKey: string;
            showOverflowTooltip: boolean | import("../../table/src/props").IOverflowTooltip;
            resizable: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prop: import("vue-types").VueTypeDef<any>;
            label: import("vue-types").VueTypeDef<any>;
            field: import("vue-types").VueTypeDef<any>;
            render: import("vue-types").VueTypeDef<any>;
            width: import("vue-types").VueTypeDef<string | number>;
            minWidth: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            columnKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("../../table/src/props").IOverflowTooltip> & {
                default: boolean | (() => import("../../table/src/props").IOverflowTooltip);
            };
            type: import("vue-types").VueTypeDef<"none" | "selection" | "index" | "expand">;
            resizable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            fixed: import("vue-types").VueTypeDef<boolean | "right" | "left"> & {
                default: boolean | "right" | "left";
            };
            sort: import("vue-types").VueTypeDef<string | boolean | {
                sortFn: any;
                sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
            }> & {
                default: string | boolean | (() => {
                    sortFn: any;
                    sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                    value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
                });
            };
            filter: import("vue-types").VueTypeDef<string | boolean | {
                list: any[] | (object & (() => any[]));
                filterFn: any;
                match: "full" | "fuzzy";
                filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
                btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
            }> & {
                default: string | boolean | (() => {
                    list: any[] | (object & (() => any[]));
                    filterFn: any;
                    match: "full" | "fuzzy";
                    filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                    btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
                    btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
                });
            };
            colspan: import("vue-types").VueTypeDef<any>;
            rowspan: import("vue-types").VueTypeDef<any>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "fixed" | "filter" | "sort" | "minWidth" | "columnKey" | "showOverflowTooltip" | "resizable">;
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
            prop: import("vue-types").VueTypeDef<any>;
            label: import("vue-types").VueTypeDef<any>;
            field: import("vue-types").VueTypeDef<any>;
            render: import("vue-types").VueTypeDef<any>;
            width: import("vue-types").VueTypeDef<string | number>;
            minWidth: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            columnKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("../../table/src/props").IOverflowTooltip> & {
                default: boolean | (() => import("../../table/src/props").IOverflowTooltip);
            };
            type: import("vue-types").VueTypeDef<"none" | "selection" | "index" | "expand">;
            resizable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            fixed: import("vue-types").VueTypeDef<boolean | "right" | "left"> & {
                default: boolean | "right" | "left";
            };
            sort: import("vue-types").VueTypeDef<string | boolean | {
                sortFn: any;
                sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
            }> & {
                default: string | boolean | (() => {
                    sortFn: any;
                    sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                    value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
                });
            };
            filter: import("vue-types").VueTypeDef<string | boolean | {
                list: any[] | (object & (() => any[]));
                filterFn: any;
                match: "full" | "fuzzy";
                filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
                btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
            }> & {
                default: string | boolean | (() => {
                    list: any[] | (object & (() => any[]));
                    filterFn: any;
                    match: "full" | "fuzzy";
                    filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                    btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
                    btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
                });
            };
            colspan: import("vue-types").VueTypeDef<any>;
            rowspan: import("vue-types").VueTypeDef<any>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            fixed: boolean | "right" | "left";
            filter: string | boolean | {
                list: any[] | (object & (() => any[]));
                filterFn: any;
                match: "full" | "fuzzy";
                filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
                btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
            };
            sort: string | boolean | {
                sortFn: any;
                sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
            };
            minWidth: string | number;
            columnKey: string;
            showOverflowTooltip: boolean | import("../../table/src/props").IOverflowTooltip;
            resizable: boolean;
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
        prop: import("vue-types").VueTypeDef<any>;
        label: import("vue-types").VueTypeDef<any>;
        field: import("vue-types").VueTypeDef<any>;
        render: import("vue-types").VueTypeDef<any>;
        width: import("vue-types").VueTypeDef<string | number>;
        minWidth: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        columnKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("../../table/src/props").IOverflowTooltip> & {
            default: boolean | (() => import("../../table/src/props").IOverflowTooltip);
        };
        type: import("vue-types").VueTypeDef<"none" | "selection" | "index" | "expand">;
        resizable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        fixed: import("vue-types").VueTypeDef<boolean | "right" | "left"> & {
            default: boolean | "right" | "left";
        };
        sort: import("vue-types").VueTypeDef<string | boolean | {
            sortFn: any;
            sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
            value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
        }> & {
            default: string | boolean | (() => {
                sortFn: any;
                sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
            });
        };
        filter: import("vue-types").VueTypeDef<string | boolean | {
            list: any[] | (object & (() => any[]));
            filterFn: any;
            match: "full" | "fuzzy";
            filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
            btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
            btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
        }> & {
            default: string | boolean | (() => {
                list: any[] | (object & (() => any[]));
                filterFn: any;
                match: "full" | "fuzzy";
                filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
                btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
                btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
            });
        };
        colspan: import("vue-types").VueTypeDef<any>;
        rowspan: import("vue-types").VueTypeDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prop: import("vue-types").VueTypeDef<any>;
    label: import("vue-types").VueTypeDef<any>;
    field: import("vue-types").VueTypeDef<any>;
    render: import("vue-types").VueTypeDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    minWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    columnKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("../../table/src/props").IOverflowTooltip> & {
        default: boolean | (() => import("../../table/src/props").IOverflowTooltip);
    };
    type: import("vue-types").VueTypeDef<"none" | "selection" | "index" | "expand">;
    resizable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    fixed: import("vue-types").VueTypeDef<boolean | "right" | "left"> & {
        default: boolean | "right" | "left";
    };
    sort: import("vue-types").VueTypeDef<string | boolean | {
        sortFn: any;
        sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
        value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
    }> & {
        default: string | boolean | (() => {
            sortFn: any;
            sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
            value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
        });
    };
    filter: import("vue-types").VueTypeDef<string | boolean | {
        list: any[] | (object & (() => any[]));
        filterFn: any;
        match: "full" | "fuzzy";
        filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
        btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
        btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
    }> & {
        default: string | boolean | (() => {
            list: any[] | (object & (() => any[]));
            filterFn: any;
            match: "full" | "fuzzy";
            filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
            btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
            btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
        });
    };
    colspan: import("vue-types").VueTypeDef<any>;
    rowspan: import("vue-types").VueTypeDef<any>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    fixed: boolean | "right" | "left";
    filter: string | boolean | {
        list: any[] | (object & (() => any[]));
        filterFn: any;
        match: "full" | "fuzzy";
        filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
        btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
        btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
    };
    sort: string | boolean | {
        sortFn: any;
        sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
        value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
    };
    minWidth: string | number;
    columnKey: string;
    showOverflowTooltip: boolean | import("../../table/src/props").IOverflowTooltip;
    resizable: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkTableColumn;
